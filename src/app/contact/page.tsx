import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.fullName}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy-dark">
              Visit or Reach Us
            </h2>
            <ul className="mt-6 flex flex-col gap-5 text-sm text-ink/75">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-navy" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-navy">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-navy" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-navy">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 aspect-video w-full rounded-2xl bg-gradient-to-br from-navy/10 via-gold/10 to-navy/5" />
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
