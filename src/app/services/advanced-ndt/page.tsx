
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Advanced NDT Services in Nigeria",
  description:
    "Explore Kaotheem Energy Services advanced non-destructive testing capabilities including PAUT, TOFD, PEC, LRUT, ACFM, AUT, IRIS and other specialized inspection methods.",
  alternates: {
    canonical: "/services/advanced-ndt",
  },
  openGraph: {
    title: "Advanced NDT Services | Kaotheem Energy Services",
    description:
      "Advanced non-destructive testing and specialized industrial inspection capabilities in Nigeria.",
    url: "/services/advanced-ndt",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const methods = [
  {
    code: "LRUT",
    title: "Long Range Ultrasonic Testing",
    description:
      "Ultrasonic screening used to examine extended sections of suitable pipework from a single inspection location.",
  },
  {
    code: "GWUT",
    title: "Guided Wave Ultrasonic Testing",
    description:
      "Guided wave technology used to screen suitable structures and piping for changes that may indicate corrosion or other defects.",
  },
  {
    code: "PAUT",
    title: "Phased Array Ultrasonic Testing",
    description:
      "An advanced ultrasonic technique using multiple elements and controlled beam angles to examine welds and components.",
  },
  {
    code: "PECT",
    title: "Pulsed Eddy Current Testing",
    description:
      "An electromagnetic inspection technique used to assess corrosion and wall loss in suitable ferromagnetic structures, including through insulation.",
  },
  {
    code: "ACFM",
    title: "Alternating Current Field Measurement",
    description:
      "An electromagnetic inspection method used to detect and size surface-breaking cracks in suitable conductive materials.",
  },
  {
    code: "TOFD",
    title: "Time of Flight Diffraction",
    description:
      "An ultrasonic technique that uses diffracted signals to detect and size weld discontinuities.",
  },
  {
    code: "AUT",
    title: "Automated Ultrasonic Testing",
    description:
      "Automated ultrasonic inspection used to collect and record inspection data consistently across defined examination areas.",
  },
  {
    code: "DRT",
    title: "Digital Radiographic Testing",
    description:
      "Radiographic examination using digital imaging technology to assess internal features and discontinuities in suitable components.",
  },
  {
    code: "IRIS",
    title: "Internal Rotary Inspection System",
    description:
      "An ultrasonic tube inspection technique used to assess tube wall condition and identify internal or external wall loss.",
  },
  {
    code: "RFT",
    title: "Remote Field Testing",
    description:
      "An electromagnetic inspection technique commonly applied to the examination of suitable ferromagnetic tubes.",
  },
  {
    code: "NFT",
    title: "Near Field Testing",
    description:
      "An electromagnetic tube inspection technique used to assess localized conditions in suitable heat exchanger tubing.",
  },
  {
    code: "MFL",
    title: "Magnetic Flux Leakage",
    description:
      "A magnetic inspection technique used to identify metal loss and discontinuities in suitable ferromagnetic materials.",
  },
  {
    code: "SRUT",
    title: "Short Range Ultrasonic Testing",
    description:
      "Ultrasonic screening used to examine selected areas of structures and components where access or geometry may limit conventional inspection.",
  },
];

export default function AdvancedNDTPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <Image
          src="/images/industrial-tube-inspection.jpeg"
          alt="Advanced non-destructive testing in an industrial facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#061321]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061321] via-[#061321]/75 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
          <ScrollReveal direction="left">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Advanced Inspection Technologies
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Advanced
                <span className="block text-blue-400">NDT Services.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Specialized inspection technologies for evaluating critical
                industrial assets, detecting discontinuities and supporting
                informed maintenance decisions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Request an Inspection →
                </a>

                <a
                  href="/services"
                  className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  All Services
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Advanced Inspection Capabilities
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Specialized Technologies for Critical Assets.
              </h2>

              <p className="mt-7 leading-8 text-slate-400">
                Advanced Non-Destructive Testing uses specialized inspection
                techniques to examine materials, welds, pipelines, tubes and
                other industrial components.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                These methods can support the evaluation of complex
                components, corrosion monitoring, weld examination and
                condition assessment where the inspection objective requires
                specialized techniques.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Discuss Your Inspection Requirements →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/images/pipeline-field-testing.jpeg"
                alt="Industrial pipeline inspection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methods */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Advanced NDT Methods
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Specialized Inspection
                <span className="block text-blue-400">Techniques.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Our company profile identifies the following advanced
                inspection methods within our service capabilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((method, index) => (
              <ScrollReveal key={method.code}>
                <article className="group h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      METHOD {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs font-bold text-blue-400">
                      {method.code}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-bold">
                    {method.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {method.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <a
                      href="/contact"
                      className="text-sm font-semibold text-blue-400 transition group-hover:text-white"
                    >
                      Make an Enquiry →
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-white/10 bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Inspection Applications
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Inspection for Demanding Industrial Environments.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Advanced NDT methods can be selected for suitable inspection
                applications based on component design, material, access
                conditions and the examination requirements.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                The inspection technique and procedure should be determined
                by qualified personnel in line with the applicable codes,
                standards and project specifications.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Speak With Our Team →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Pipeline Systems",
                "Weld Examination",
                "Storage Tanks",
                "Heat Exchanger Tubes",
                "Offshore Structures",
                "Industrial Equipment",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-28 items-center border border-white/10 bg-[#0d2034] p-5"
                >
                  <div>
                    <span className="text-xs font-semibold text-blue-400">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Conventional NDT Link */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-8 border border-white/10 bg-[#0d2034] p-8 md:flex-row md:items-center md:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Explore More
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Explore Our Conventional NDT Services.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  Discover our conventional inspection and testing methods
                  for industrial materials and components.
                </p>
              </div>

              <a
                href="/services/conventional-ndt"
                className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Conventional NDT →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Need Advanced Inspection Support?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Contact Kaotheem Energy Services to discuss your project and
              inspection requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#071321] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#10243a]"
          >
            Contact Our Team →
          </a>
        </div>
      </section>
    </main>
  );
}
