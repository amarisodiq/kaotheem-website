
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Conventional NDT",
  "Advanced NDT",
  "Asset Integrity",
  "Rope Access",
  "Engineering & Procurement",
];

export default function Footer() {
  return (
    <footer className="bg-[#040D19] px-6 pb-8 pt-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/kaotheem-logo2.png"
                alt="Kaotheem Energy Services Ltd"
                width={180}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Engineering excellence. Trusted solutions. Delivering specialized
              engineering, inspection and industrial services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">Our Services</h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold">Contact Information</h4>

            <div className="mt-6 space-y-5 text-sm text-slate-400">

              {/* Phone */}
              <a
                href="tel:+2348160029024"
                className="group flex items-start gap-4 transition hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+234 816 002 9024</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@kaotheem.com"
                className="group flex items-start gap-4 transition hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-blue-400"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                <span>info@kaotheem.com</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-blue-400"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span className="leading-7">
                  No. 11 Olumeni Street, Forces Avenue, Old GRA, Port Harcourt,
                  Rivers State, Nigeria.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            © 2026 Kaotheem Energy Services Ltd. All
            rights reserved.
          </p>

          <p>Engineering Excellence. Trusted Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
