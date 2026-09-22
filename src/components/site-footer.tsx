import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site-data";
import { ChurchLogo } from "@/components/church-logo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/30 bg-navy-dark text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <ChurchLogo className="h-8 w-8 shrink-0" />
            <span className="font-serif text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/70">{siteConfig.description}</p>
          <div className="mt-5 flex gap-4 text-cream/70">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-gold-light">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-gold-light">
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-gold-light">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-cream/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-light">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/50 sm:px-8">
        © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
