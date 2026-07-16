import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Required env vars (set in hosting provider dashboard, e.g. Vercel > Project > Settings > Environment Variables):
//   MAILCHIMP_API_KEY       - from Mailchimp: Account > Extras > API keys
//   MAILCHIMP_SERVER_PREFIX - the "usX" part of the Mailchimp URL (this account uses "us3")
//   MAILCHIMP_LIST_ID       - the audience/list id (this form uses "367d8d737a")

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || "us3"
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || "367d8d737a"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: { email?: string; fname?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: "Malformed request." },
      { status: 400 }
    )
  }

  const email = (body.email || "").trim()
  const fname = (body.fname || "").trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  if (!MAILCHIMP_API_KEY) {
    console.error(
      "[waitlist] MAILCHIMP_API_KEY is not set. Lost signup attempt:",
      email
    )
    return NextResponse.json(
      { success: false, error: "Server is not configured yet. Please try again shortly." },
      { status: 500 }
    )
  }

  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex")

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`

  try {
    const mcRes = await fetch(url, {
      method: "PUT", // upsert: creates if new, updates merge fields if already on the list
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: fname ? { FNAME: fname } : undefined,
      }),
    })

    const data = await mcRes.json()

    if (mcRes.ok) {
      return NextResponse.json({ success: true })
    }

    console.error("[waitlist] Mailchimp rejected signup:", email, data)

    if (data?.title === "Member Exists") {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: data?.detail || "Signup was rejected. Please try again." },
      { status: mcRes.status }
    )
  } catch (err) {
    console.error("[waitlist] Network error reaching Mailchimp for", email, err)
    return NextResponse.json(
      { success: false, error: "Could not reach the signup service. Please try again or email contact@onestbond.com." },
      { status: 502 }
    )
  }
}
