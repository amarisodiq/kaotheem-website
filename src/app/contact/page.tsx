import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Kaotheem | NDT & Engineering Enquiries Nigeria",
  description:
    "Contact Kaotheem Energy Services Ltd in Port Harcourt, Nigeria for NDT inspection, asset integrity, engineering services and FLUXO product enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kaotheem Energy Services Ltd",
    description:
      "Get in touch with our team for inspection, engineering and product enquiries in Nigeria.",
    url: "/contact",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const enquiryTypes = [
  {
    title: "NDT & Inspection Services",
    description:
      "Conventional NDT, advanced inspection, PAUT, asset integrity and technical inspection enquiries.",
    subject: "NDT and Inspection Services Enquiry",
  },
  {
    title: "Engineering Services",
    description:
      "Mechanical, electrical, instrumentation, maintenance and specialized engineering requirements.",
    subject: "Engineering Services Enquiry",
  },
  {
    title: "FLUXO Product Enquiries",
    description:
      "Product information, technical documentation, pricing and availability of NDT consumables.",
    subject: "FLUXO Product Enquiry",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/industrial-maintenance-team.jpeg"
          alt="Industrial engineering and maintenance environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#071321]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/80 to-[#071321]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Contact Kaotheem
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Let's Start a
              <span className="mt-2 block text-blue-400">Conversation.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Have an inspection requirement, engineering project or product
              enquiry? Our team is ready to discuss your requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:info@kaotheem.com"
                className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Email Our Team →
              </a>

              <a
                href="tel:+2348160029024"
                className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="border-b border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="mb-14 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Get In Touch
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                We're Here to Help.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Reach out to us through any of the contact channels below. We'll
                be glad to discuss your requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            <ScrollReveal>
              <div className="h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/50">
                <span className="text-2xl text-blue-400">✉</span>

                <h3 className="mt-7 text-xl font-bold">Email Address</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Send us your questions, enquiries and project requirements.
                </p>

                <a
                  href="mailto:info@kaotheem.com"
                  className="mt-7 inline-block break-all text-sm font-semibold text-blue-400 transition hover:text-white"
                >
                  info@kaotheem.com →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/50">
                <span className="text-2xl text-blue-400">☎</span>

                <h3 className="mt-7 text-xl font-bold">Telephone</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Speak directly with our team about your requirements.
                </p>

                <a
                  href="tel:+2348160029024"
                  className="mt-7 inline-block text-sm font-semibold text-blue-400 transition hover:text-white"
                >
                  +234 816 002 9024 →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/50">
                <span className="text-2xl text-blue-400">⌖</span>

                <h3 className="mt-7 text-xl font-bold">Office Address</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Visit our office in Port Harcourt, Rivers State.
                </p>

                <p className="mt-7 text-sm font-medium leading-7 text-white">
                  No. 11 Olumeni Street, Forces Avenue, Old GRA, Port Harcourt,
                  Rivers State, Nigeria.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ENQUIRY CATEGORIES */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal>
            <div className="mb-14 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                How Can We Help?
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Send Us an Enquiry.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Choose the area that best matches your requirement. Each option
                will prepare an email addressed to our team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {enquiryTypes.map((item, index) => (
              <ScrollReveal key={item.title}>
                <article className="group flex h-full flex-col border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
                  <span className="text-sm font-semibold text-blue-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <a
                    href={`mailto:info@kaotheem.com?subject=${encodeURIComponent(item.subject)}`}
                    className="mt-9 border-t border-white/10 pt-6 text-sm font-semibold text-blue-400 transition group-hover:text-white"
                  >
                    Send Enquiry →
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Find Our Office
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                Based in
                <span className="block text-blue-400">
                  Port Harcourt, Nigeria.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-slate-400">
                Kaotheem Energy Services Limited operates from Port Harcourt,
                Rivers State, Nigeria. Contact our team for enquiries and
                business discussions.
              </p>

              <p className="mt-7 font-medium leading-8 text-white">
                No. 11 Olumeni Street,
                <br />
                Forces Avenue, Old GRA,
                <br />
                Port Harcourt, Rivers State,
                <br />
                Nigeria.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+11+Olumeni+Street%2C+Forces+Avenue%2C+Old+GRA%2C+Port+Harcourt%2C+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Find Us on Google Maps →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="overflow-hidden border border-white/10 bg-[#0b1b2b]">
              <iframe
                title="Kaotheem Energy Services office location"
                src="https://maps.google.com/maps?q=No.%2011%20Olumeni%20Street%2C%20Forces%20Avenue%2C%20Old%20GRA%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0d2034] p-8 md:p-14">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Kaotheem Energy Services Ltd
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Let's Discuss Your
                    <span className="block text-blue-400">Next Project.</span>
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    Get in touch with our team for professional inspection,
                    engineering and product enquiries.
                  </p>
                </div>

                <a
                  href="mailto:info@kaotheem.com?subject=Business%20Enquiry"
                  className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Email Kaotheem →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
