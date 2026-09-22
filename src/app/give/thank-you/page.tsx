import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Thank You | ${siteConfig.name}`,
};

export default function ThankYouPage() {
  return (
    <>
      <PageHeader title="Thank You" subtitle="Your generosity is a blessing to our parish." />
      <section className="px-5 py-16 text-center sm:px-8">
        <p className="mx-auto max-w-xl text-ink/70">
          May God bless you for your gift. A receipt has been sent to your email from
          Stripe.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full border border-navy px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
        >
          Return Home
        </Link>
      </section>
    </>
  );
}
