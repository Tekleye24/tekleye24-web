import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { MembershipForm } from "@/components/membership-form";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Become a Member | ${siteConfig.name}`,
  description: `Join the parish family at ${siteConfig.fullName}.`,
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Become a Member"
        subtitle="Join our parish family and grow in faith together."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-ink/70">
            Membership at {siteConfig.name} means being part of a community rooted in
            the Tewahedo faith — worshiping together, supporting one another, and
            taking part in the life and ministries of the parish. Fill out the form
            below to begin the process, and a member of our church office will follow
            up with you.
          </p>

          <div className="mt-8">
            <MembershipForm />
          </div>

          <p className="mt-6 text-sm text-ink/60">
            Submitting this form will open your email app with your details filled
            in, addressed to the church office. Prefer to talk it through first?
            Reach out at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy hover:underline">
              {siteConfig.email}
            </a>{" "}
            or{" "}
            <a href={`tel:${siteConfig.phone}`} className="font-medium text-navy hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
