import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Kaotheem | NDT & Engineering Company in Nigeria",
  description:
    "Discover Kaotheem Energy Services Ltd, a Nigerian engineering company providing conventional and advanced non-destructive testing, asset integrity, industrial inspection and specialized engineering services.",
  keywords: [
    "Kaotheem Energy Services",
    "NDT company in Nigeria",
    "non-destructive testing Nigeria",
    "industrial inspection Nigeria",
    "asset integrity services",
    "advanced NDT services",
    "engineering services Nigeria",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kaotheem Energy Services Ltd",
    description:
      "Learn about our NDT inspection, asset integrity and engineering capabilities in Nigeria.",
    url: "/about",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* About Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/offshore-platform.jpeg"
            alt="Offshore industrial engineering environment"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/90 to-[#071321]/50" />
        </div>

        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Kaotheem Energy Services
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Engineering Solutions.
              <span className="block text-blue-400">Built on Integrity.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Delivering inspection, non-destructive testing and specialized
              engineering solutions for demanding industrial environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
              <span>Home</span>
              <span>/</span>
              <span className="text-blue-400">About Us</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Company Overview */}
      <section className="bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          {/* Company Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="/images/ndt-field-inspection.jpeg"
                alt="Industrial inspection and non-destructive testing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/60 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Company Information */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Who We Are
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                A Partner in
                <span className="block text-blue-400">
                  Industrial Excellence.
                </span>
              </h2>

              <p className="mt-8 leading-8 text-slate-400">
                Kaotheem Energy Services Limited is an indigenous engineering
                and oil and gas services company providing inspection,
                non-destructive testing and specialized technical solutions for
                industrial operations.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Our capabilities span conventional and advanced inspection
                methods, asset integrity and other specialized engineering
                services designed to support demanding operating environments.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                We are committed to delivering professional services through
                technical expertise, responsible operations and a focus on
                quality and reliability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal direction="left">
            <div className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Purpose
              </p>

              <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
                Guided by Purpose.
                <span className="block text-blue-400">
                  Driven by Excellence.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mission */}
              <div className="border border-white/10 bg-[#0a1929] p-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  01 / Our Mission
                </span>

                <h3 className="mt-8 text-2xl font-bold">What Drives Us</h3>

                <p className="mt-5 leading-8 text-slate-400">
                  To deliver dependable engineering, inspection and technical
                  solutions through professional service, technical competence
                  and a commitment to quality, safety and operational integrity.
                </p>
              </div>

              {/* Vision */}
              <div className="border border-white/10 bg-[#0a1929] p-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                  02 / Our Vision
                </span>

                <h3 className="mt-8 text-2xl font-bold">Where We Are Going</h3>

                <p className="mt-5 leading-8 text-slate-400">
                  To be a trusted engineering and technical services partner,
                  recognized for delivering reliable solutions and contributing
                  to the integrity and performance of industrial assets.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Core Values */}
          <ScrollReveal>
            <div className="mt-24">
              <div className="mb-12 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  What We Stand For
                </p>

                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                  Our Core Values
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Integrity",
                    description:
                      "Acting with honesty, accountability and transparency in our work.",
                  },
                  {
                    title: "Safety",
                    description:
                      "Prioritizing safe working practices and responsible operations.",
                  },
                  {
                    title: "Quality",
                    description:
                      "Maintaining professional standards in every service we deliver.",
                  },
                  {
                    title: "Professionalism",
                    description:
                      "Approaching every responsibility with competence and discipline.",
                  },
                  {
                    title: "Reliability",
                    description:
                      "Building trust through dependable service and consistent delivery.",
                  },
                  {
                    title: "Continuous Improvement",
                    description:
                      "Developing our capabilities through learning, innovation and experience.",
                  },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="border border-white/10 bg-[#0a1929] p-8 transition duration-300 hover:border-blue-500/50"
                  >
                    <span className="text-sm font-semibold text-blue-400">
                      0{index + 1}
                    </span>

                    <h3 className="mt-6 text-xl font-bold">{value.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal direction="left">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                What We Do
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Engineering & Inspection
                <span className="block text-blue-400">Capabilities.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Kaotheem Energy Services provides non-destructive testing, asset
                integrity and specialized engineering services for the oil and
                gas, energy and industrial sectors in Nigeria.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Asset Integrity & Inspection",
                  description:
                    "Inspection and condition assessment services supporting the reliability and integrity of industrial assets.",
                },
                {
                  number: "02",
                  title: "Non-Destructive Testing",
                  description:
                    "Conventional and advanced NDT methods for identifying material defects and assessing component condition.",
                },
                {
                  number: "03",
                  title: "Rope Access Services",
                  description:
                    "Specialized access solutions supporting inspection, installation and industrial maintenance activities.",
                },
                {
                  number: "04",
                  title: "Mechanical Services",
                  description:
                    "Mechanical engineering support for industrial equipment, facilities and operational requirements.",
                },
                {
                  number: "05",
                  title: "Electrical & Instrumentation",
                  description:
                    "Electrical and instrumentation services supporting industrial systems and technical operations.",
                },
                {
                  number: "06",
                  title: "Engineering & Procurement",
                  description:
                    "Engineering support and procurement solutions for industrial projects and operational needs.",
                },
              ].map((service) => (
                <article
                  key={service.number}
                  className="group border border-white/10 bg-[#071321] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <span className="text-sm font-semibold tracking-widest text-blue-400">
                    {service.number}
                  </span>

                  <h3 className="mt-7 text-xl font-bold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="mt-12 flex flex-col justify-between gap-6 border border-blue-500/20 bg-blue-500/5 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <h3 className="text-2xl font-bold">
                  Explore Our Technical Services
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Discover our inspection, NDT and engineering capabilities.
                </p>
              </div>

              <a
                href="/services"
                className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                View All Services →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Kaotheem */}
      <section className="border-t border-white/10 bg-[#071321]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="/images/industrial-maintenance-team.jpeg"
                alt="Industrial engineering and maintenance team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/70 to-transparent" />
              <div className="absolute bottom-7 left-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Our Approach
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Excellence in Every Detail.
                </h3>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                The Kaotheem Difference
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                A Dependable Partner
                <span className="block text-blue-400">
                  for Industrial Solutions.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-slate-400">
                Industrial operations require dependable technical support,
                careful inspection and responsible service delivery. Our
                approach is built around understanding client requirements and
                providing solutions suited to demanding operating environments.
              </p>

              <div className="mt-10 space-y-7">
                {[
                  {
                    title: "Technical Capabilities",
                    description:
                      "Conventional and advanced inspection methods alongside specialized engineering services.",
                  },
                  {
                    title: "Quality-Focused Approach",
                    description:
                      "Attention to professional standards, inspection processes and service quality.",
                  },
                  {
                    title: "Safety & Responsibility",
                    description:
                      "A commitment to responsible operations and safe working practices.",
                  },
                  {
                    title: "Client-Focused Service",
                    description:
                      "Solutions shaped around project requirements and operational needs.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-blue-500/40 text-sm font-semibold text-blue-400">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries & Sectors */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal direction="left">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Industries We Support
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Supporting Critical
                <span className="block text-blue-400">
                  Industrial Operations.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Our engineering, inspection and technical services support the
                diverse requirements of industrial and infrastructure
                operations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Oil & Gas",
                  description:
                    "Inspection and engineering support for upstream, midstream and downstream operations.",
                  image: "/images/offshore-platform.jpeg",
                },
                {
                  number: "02",
                  title: "Petrochemical",
                  description:
                    "Technical inspection and asset integrity support for processing facilities.",
                  image: "/images/industrial-facility.jpeg",
                },
                {
                  number: "03",
                  title: "Marine & Offshore",
                  description:
                    "Specialized inspection and engineering support for marine and offshore environments.",
                  image: "/images/rope-access-inspection.jpeg",
                },
                {
                  number: "04",
                  title: "Energy & Utilities",
                  description:
                    "Inspection and maintenance support for industrial energy infrastructure.",
                  image: "/images/electrical-inspection.jpeg",
                },
                {
                  number: "05",
                  title: "Construction & Infrastructure",
                  description:
                    "Engineering and technical support for construction and infrastructure projects.",
                  image: "/images/scaffold-project-work.jpeg",
                },
                {
                  number: "06",
                  title: "Industrial Manufacturing",
                  description:
                    "Inspection and technical services supporting industrial equipment and facilities.",
                  image: "/images/industrial-tube-inspection.jpeg",
                },
              ].map((industry) => (
                <article
                  key={industry.number}
                  className="group overflow-hidden border border-white/10 bg-[#071321] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industrial operations`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-xs font-semibold text-blue-300">
                      {industry.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {industry.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Page CTA */}
      <section className="border-t border-white/10 bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0a1929] px-8 py-16 text-center md:px-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Let's Work Together
                </p>

                <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                  Looking for a Reliable
                  <span className="block text-blue-400">
                    Engineering Partner?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
                  Speak with Kaotheem Energy Services about your NDT,
                  inspection, asset integrity and engineering requirements.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Contact Our Team →
                  </a>

                  <a
                    href="mailto:info@kaotheem.com"
                    className="border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400"
                  >
                    Send an Email
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
