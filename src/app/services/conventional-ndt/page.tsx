
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Conventional NDT Services in Nigeria",
  description:
    "Kaotheem Energy Services provides conventional non-destructive testing services including VT, UT, ET, MT, PT, SWUT and PMI for industrial asset inspection.",
  alternates: {
    canonical: "/services/conventional-ndt",
  },
  openGraph: {
    title: "Conventional NDT Services | Kaotheem Energy Services",
    description:
      "Explore conventional non-destructive testing and inspection services from Kaotheem Energy Services Ltd.",
    url: "/services/conventional-ndt",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const methods = [
  {
    number: "01",
    code: "VT",
    title: "Visual Testing",
    description:
      "Visual examination of accessible surfaces and components to identify visible defects, surface damage, corrosion and other indications requiring further assessment.",
  },
  {
    number: "02",
    code: "UT",
    title: "Ultrasonic Testing",
    description:
      "Ultrasonic inspection used to assess material condition and detect internal discontinuities in suitable components and structures.",
  },
  {
    number: "03",
    code: "ET",
    title: "Eddy Current Testing",
    description:
      "An electromagnetic inspection method used to identify discontinuities and assess material conditions in electrically conductive materials.",
  },
  {
    number: "04",
    code: "MT",
    title: "Magnetic Particle Testing",
    description:
      "A surface and near-surface inspection method for detecting relevant discontinuities in suitable ferromagnetic materials.",
  },
  {
    number: "05",
    code: "PT",
    title: "Penetrant Testing",
    description:
      "A liquid penetrant inspection method used to reveal surface-breaking discontinuities in non-porous materials.",
  },
  {
    number: "06",
    code: "SWUT",
    title: "Shear Wave Ultrasonic Testing",
    description:
      "An ultrasonic inspection technique using angled sound waves to examine components and identify internal discontinuities.",
  },
  {
    number: "07",
    code: "PMI",
    title: "Positive Material Identification",
    description:
      "Material verification testing used to identify alloy composition and support material identification requirements.",
  },
];

export default function ConventionalNDTPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <Image
          src="/images/ndt-field-inspection.jpeg"
          alt="Non-destructive testing inspection in an industrial environment"
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
                  Inspection & Asset Integrity
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Conventional
                <span className="block text-blue-400">NDT Services.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Reliable non-destructive testing solutions to examine
                materials, identify discontinuities and support the integrity
                of industrial assets.
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
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/images/industrial-tube-inspection.jpeg"
                alt="Industrial inspection and testing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Capabilities
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Understanding Asset Condition Without Destructive Testing.
              </h2>

              <p className="mt-7 leading-8 text-slate-400">
                Conventional Non-Destructive Testing involves inspection
                techniques used to examine materials, components and
                structures without damaging their intended serviceability.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Kaotheem Energy Services provides a range of conventional
                inspection methods designed to support defect identification,
                material assessment and industrial asset integrity.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Discuss Your Inspection Requirements →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Inspection Methods */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Conventional NDT Methods
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Our Inspection
                <span className="block text-blue-400">Techniques.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Our conventional NDT capabilities include the following
                inspection methods.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((method) => (
              <ScrollReveal key={method.code}>
                <article className="group h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                      METHOD {method.number}
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
                Supporting Industrial Asset Integrity.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Conventional NDT methods can support inspection activities
                across suitable industrial equipment, materials and
                structures. The appropriate method depends on the material,
                component geometry, inspection objective and applicable
                requirements.
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
                "Pipelines",
                "Storage Tanks",
                "Welded Components",
                "Industrial Equipment",
                "Structural Components",
                "Process Facilities",
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

      {/* Related Services */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-8 border border-white/10 bg-[#0d2034] p-8 md:flex-row md:items-center md:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Explore More
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Looking for Advanced Inspection Technologies?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  Explore our advanced NDT capabilities and specialized
                  inspection methods.
                </p>
              </div>

              <a
                href="/services/advanced-ndt"
                className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Explore Advanced NDT →
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
              Need Conventional NDT Services?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Contact Kaotheem Energy Services to discuss your inspection
              requirements.
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
