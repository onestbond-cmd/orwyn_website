"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmotionProvider } from "@/contexts/emotion-context"

export default function PrivacyPage() {
  return (
    <EmotionProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-1/4 w-full max-w-lg h-[500px] bg-glow-purple/22 rounded-full" />
        </div>
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: June 2026</p>
          </div>
          
          <div className="space-y-10 text-foreground/70 leading-relaxed text-base md:text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">1. Introduction</h2>
              <p>
                At Orwyn, we take your privacy extremely seriously. We believe that a truly safe space requires absolute trust. 
                This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                2. Information We Collect
              </h2>
              <p>
                As Orwyn is currently in pre-launch, the only personal data we collect is:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-foreground/30">
                <li>
                  <strong className="text-foreground/90 font-medium">
                    Waitlist data:
                  </strong>{" "}
                  Your first name and email address when you join our waitlist. This is stored securely in Mailchimp and used only to notify you when Orwyn launches.
                </li>
                <li>
                  <strong className="text-foreground/90 font-medium">
                    Analytics data:
                  </strong>{" "}
                  Anonymous usage data collected via Google Analytics 4, only if you accept cookies. This includes pages visited, time spent, and general location (country level). No personally identifiable information is collected via analytics.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                3. How We Use Your Information
              </h2>
              <p>
                We use your email address solely to send you a launch notification when Orwyn becomes available. We will never sell your data, share it with third parties for marketing purposes, or use it for anything beyond what is stated here. You can unsubscribe from our waitlist at any time by emailing contact@onestbond.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                4. Third Party Services
              </h2>
              <p>
                We use the following third-party services to operate this website:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-foreground/30">
                <li>
                  <strong className="text-foreground/90 font-medium">Mailchimp</strong> — stores waitlist email addresses. View their{" "}
                  <a
                    href="https://mailchimp.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-foreground/90 font-medium">Google Analytics 4</strong> — collects anonymous analytics data with your consent. View their{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-foreground/90 font-medium">Microsoft Clarity</strong> — collects anonymous session analytics (heatmaps, session recordings) with your consent. View their{" "}
                  <a
                    href="https://privacy.microsoft.com/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong className="text-foreground/90 font-medium">Vercel</strong> — hosts this website. View their{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please feel free to reach out via our contact page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                6. Cookies
              </h2>
              <p>
                Orwyn uses cookies solely for analytics purposes through Google Analytics 4 (GA4). 
                These cookies help us understand how visitors use our website so we can improve 
                the experience.
              </p>
              <p>
                The cookies we use:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-foreground/30 text-muted-foreground/80">
                <li>
                  <span className="text-foreground/80 font-medium">_ga</span> — 
                  Distinguishes unique users. 
                  Expires after 2 years.
                </li>
                <li>
                  <span className="text-foreground/80 font-medium">_ga_*</span> — 
                  Maintains session state. 
                  Expires after 2 years.
                </li>
                <li>
                  <span className="text-foreground/80 font-medium">orwyn-cookie-consent</span> — 
                  Stores your cookie preference. 
                  Expires after 1 year.
                </li>
              </ul>
              <p>
                We only load analytics cookies after you explicitly accept via our cookie banner. 
                If you decline, no analytics cookies are set. You can change your preference at any 
                time by clearing your browser cookies and revisiting the site.
              </p>
              <p>
                You can also opt out of Google Analytics tracking at any time by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">7. Your Rights</h2>
              <p>
                Under applicable Indian data protection law, you have the right to access, correct, 
                and delete your personal data. You may also withdraw consent for data processing at 
                any time by contacting us. As we use Google Analytics, you may opt out of analytics 
                tracking at any time via Google's opt-out tools or by adjusting your browser settings.
              </p>
              <p>
                To exercise any of these rights or to raise a data protection complaint, contact our Grievance Officer at{" "}
                <a
                  href="mailto:contact@onestbond.com"
                  className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  contact@onestbond.com
                </a>
                . We will respond to all requests within 30 days in accordance with the Digital Personal Data Protection Act, 2023.
              </p>
            </section>
          </div>
        </div>
        <div className="mt-20">
          <Footer hideCta={true} />
        </div>
      </main>
    </EmotionProvider>
  )
}
