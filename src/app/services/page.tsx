import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "NDT, Inspection & Engineering Services in Nigeria",
  description:
    "Explore Kaotheem Energy Services Ltd's conventional and advanced NDT, asset integrity, rope access, mechanical, electrical, instrumentation and specialized engineering services in Nigeria.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "NDT, Inspection & Engineering Services | Kaotheem",
    description:
      "Discover Kaotheem's non-destructive testing, inspection, asset integrity and engineering capabilities in Nigeria.",
    url: "/services",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Conventional NDT Services",
    description:
      "Conventional non-destructive testing for assessing material and component condition.",
    category: "Inspection & Testing",
    href: "/services/conventional-ndt",
  },
  {
    number: "02",
    title: "Advanced NDT Services",
    description:
      "Advanced inspection methods for evaluating industrial assets and components.",
    category: "Advanced Inspection",
    href: "/services/advanced-ndt",
  },
  {
    number: "03",
    title: "Asset Integrity & Inspection Services",
    description:
      "Inspection and non-destructive testing services supporting asset condition assessment and integrity management.",
    category: "Inspection & Testing",
    href: "/services/asset-integrity",
  },
  {
    number: "04",
    title: "Rope Access Services",
    description:
      "Specialized access services for elevated and difficult-to-reach industrial locations.",
    category: "Specialized Services",
    href: "/services/rope-access",
  },
  {
    number: "05",
    title: "Mechanical Services",
    description:
      "Mechanical engineering support for industrial facilities, equipment and operations.",
    category: "Engineering",
    href: "/services/mechanical",
  },
  {
    number: "06",
    title: "Fabric Maintenance Services",
    description:
      "Fabric maintenance support for industrial structures, equipment and facilities.",
    category: "Maintenance",
    href: "/services/fabric-maintenance",
  },
  {
    number: "07",
    title: "Electrical Services",
    description:
      "Electrical engineering and technical support for industrial facilities and operations.",
    category: "Engineering",
    href: "/services/electrical",
  },
  {
    number: "08",
    title: "Instrumentation Services",
    description:
      "Instrumentation services supporting industrial systems, equipment and operations.",
    category: "Technical Services",
    href: "/services/instrumentation",
  },
  {
    number: "09",
    title: "Engineering & Procurement Services",
    description:
      "Engineering and procurement support for industrial projects and operational requirements.",
    category: "Project Support",
    href: "/services/engineering-procurement",
  },
  {
    number: "10",
    title: "Maintenance & Repair Services",
    description:
      "Maintenance and repair support for industrial equipment, systems and facilities.",
    category: "Maintenance",
    href: "/services/maintenance-repair",
  },
  {
    number: "11",
    title: "Training & Consultancy Services",
    description:
      "Technical training and consultancy support for industrial and engineering activities.",
    category: "Professional Services",
    href: "/services/training-consultancy",
  },
  {
    number: "12",
    title: "Civil & Construction Services",
    description:
      "Civil engineering and construction support for industrial infrastructure and projects.",
    category: "Construction",
    href: "/services/civil-construction",
  },
  {
    number: "13",
    title: "Helideck Inspection Services",
    description:
      "Inspection services for helidecks and associated offshore facilities.",
    category: "Inspection",
    href: "/services/helideck-inspection",
  },
  {
    number: "14",
    title: "Manpower Supply Services",
    description:
      "Manpower support for engineering, inspection and industrial operations.",
    category: "Workforce Solutions",
    href: "/services/manpower-supply",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/offshore-platform.png"
          alt="Offshore industrial engineering environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Background overlays */}
        <div className="absolute inset-0 bg-[#071321]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/80 to-[#071321]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Capabilities
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Engineering, Inspection &
              <span className="mt-2 block text-blue-400">
                Technical Solutions.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Delivering non-destructive testing, asset integrity, inspection
              and specialized engineering solutions for demanding industrial
              environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#our-services"
                className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Explore Our Services →
              </a>

              <a
                href="/contact"
                className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Request a Quotation
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-8">
              <div>
                <p className="text-sm font-semibold">Conventional NDT</p>
                <p className="mt-1 text-xs text-slate-400">
                  Inspection & Testing
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Advanced NDT</p>
                <p className="mt-1 text-xs text-slate-400">
                  Advanced Inspection
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Asset Integrity</p>
                <p className="mt-1 text-xs text-slate-400">
                  Industrial Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INTRODUCTION */}
      <section
        id="our-services"
        className="border-b border-white/10 bg-[#0a1929]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                What We Do
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Our Services.
                <span className="block text-blue-400">Our Capabilities.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Our service portfolio covers inspection, non-destructive
                testing, engineering, maintenance and technical support for
                industrial operations.
              </p>
            </div>
          </ScrollReveal>

          {/* SERVICES GRID */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ScrollReveal key={service.number}>
                <Link
                  href={service.href}
                  className="group block h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-400">
                      {service.number}
                    </span>

                    <span className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-bold leading-snug transition group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-xs uppercase tracking-wider text-slate-500">
                      Kaotheem Energy Services
                    </span>

                    <span className="text-lg text-blue-400 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NDT CAPABILITIES */}
      <section className="bg-[#071321]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-blue-500/50" />

              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/images/ndt-field-inspection.jpeg"
                  alt="Non-destructive testing field inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Inspection & Testing
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Non-Destructive Testing
                  </h3>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 h-32 w-32 border-b border-r border-blue-500/50" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Inspection Expertise
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Conventional &
                <span className="block text-blue-400">Advanced NDT.</span>
              </h2>

              <p className="mt-7 leading-8 text-slate-400">
                Non-destructive testing helps assess material and component
                condition without compromising their intended use. Our NDT
                service portfolio includes conventional and advanced inspection
                methods.
              </p>

              <div className="mt-9 space-y-5">
                <div className="border-l-2 border-blue-500 pl-5">
                  <h3 className="font-semibold">Conventional NDT</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Visual Testing, Ultrasonic Testing, Eddy Current, Magnetic
                    Particle Testing, Penetrant Testing, Shear Wave Ultrasonic
                    Testing and PMI.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-5">
                  <h3 className="font-semibold">Advanced NDT</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    PAUT, TOFD, LRUT, GWUT, PEC, ACFM, AUT, Digital Radiography,
                    IRIS, RFT, NFT, MFL and SRUT.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Discuss Inspection Requirements →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0d2034] p-8 md:p-14">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Work With Kaotheem
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Have an Engineering Project?
                    <span className="block text-blue-400">
                      Let's Discuss Your Requirements.
                    </span>
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    Contact our team to discuss your inspection, engineering,
                    maintenance or technical service needs.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Contact Our Team →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
