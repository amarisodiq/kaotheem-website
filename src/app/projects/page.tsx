
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Industrial Projects & Inspection Experience in Nigeria",
  description:
    "Explore Kaotheem Energy Services Ltd's project experience in industrial inspection, asset integrity, engineering and oil and gas operations.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Experience | Kaotheem Energy Services",
    description:
      "Discover project references and engineering experience across industrial and oil and gas environments.",
    url: "/projects",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const projects = [
  {
    number: "01",
    client: "PERENCO",
    location: "Gabon",
    project: "Caplopez Tank Farm & Becuna Platform",
    period: "October 2024 – January 2025",
    category: "Industrial Inspection",
    image: "/images/offshore-platform.jpeg",
  },
  {
    number: "02",
    client: "NICKEL SL",
    location: "Equatorial Guinea",
    project: "Jade Platform, FPSO Serpentina",
    period: "January 2023 – April 2024",
    category: "Asset Integrity",
    image: "/images/industrial-tube-inspection.jpeg",
  },
  {
    number: "03",
    client: "WAPCO / EHIJESSY",
    location: "Badagry, Nigeria",
    project: "WAPCO Badagry",
    period: "November – December 2025",
    category: "Engineering Services",
    image: "/images/pipeline-field-testing.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">

        <Image
          src="/images/offshore-platform.jpeg"
          alt="Offshore oil and gas industrial project environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#071321]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/80 to-[#071321]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="max-w-3xl">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Experience
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Projects & Industry
              <span className="mt-2 block text-blue-400">
                Experience.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              An overview of project references associated with
              Kaotheem Energy Services across industrial inspection,
              asset integrity and engineering environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#project-experience"
                className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Explore Projects →
              </a>

              <a
                href="/contact"
                className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Discuss a Project
              </a>

            </div>

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-8">

              <div>
                <p className="text-sm font-semibold">Industrial</p>
                <p className="mt-1 text-xs text-slate-400">
                  Project Environments
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Inspection</p>
                <p className="mt-1 text-xs text-slate-400">
                  Technical Services
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Engineering</p>
                <p className="mt-1 text-xs text-slate-400">
                  Project Support
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-white/10 bg-[#0a1929]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Project Portfolio
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                  Experience Across
                  <span className="block text-blue-400">
                    Industrial Environments.
                  </span>
                </h2>

              </div>

              <p className="leading-8 text-slate-400">
                Our company profile documents project references
                across oil and gas, offshore facilities, industrial
                inspection and engineering operations.
              </p>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* PROJECT EXPERIENCE */}
      <section id="project-experience" className="bg-[#071321]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <ScrollReveal>
            <div className="mb-14 max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected References
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Project Experience
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Selected project references documented in the
                company's existing profile.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <ScrollReveal key={project.number}>

                <article className="group h-full overflow-hidden border border-white/10 bg-[#0d2034] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={`Representative industrial imagery for ${project.project}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/90 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 border border-white/20 bg-[#071321]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.number}
                    </span>

                    <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {project.category}
                    </span>

                  </div>

                  <div className="p-7">

                    <div className="flex items-center justify-between gap-3">

                      <span className="text-xs font-bold tracking-wider text-blue-400">
                        {project.client}
                      </span>

                      <span className="text-xs text-slate-500">
                        {project.location}
                      </span>

                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug">
                      {project.project}
                    </h3>

                    <div className="mt-6 border-t border-white/10 pt-5">

                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Project Period
                      </p>

                      <p className="mt-2 text-sm text-slate-300">
                        {project.period}
                      </p>

                    </div>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

          <p className="mt-10 text-xs leading-6 text-slate-500">
            The images shown are representative industrial imagery,
            not verified photographs of the specific projects.
          </p>

        </div>
      </section>

      {/* INDUSTRY EXPERIENCE */}
      <section className="border-y border-white/10 bg-[#0a1929]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>
            <div className="mb-14 max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Work Environment
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Industrial Sectors
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Engineering and inspection activities across
                demanding industrial environments.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Oil & Gas",
                image: "/images/offshore-platform.jpeg",
              },
              {
                title: "Industrial Facilities",
                image: "/images/industrial-facility.jpeg",
              },
              {
                title: "Pipelines",
                image: "/images/pipeline-field-testing.jpeg",
              },
              {
                title: "Inspection & Testing",
                image: "/images/ndt-field-inspection.jpeg",
              },
            ].map((sector) => (

              <ScrollReveal key={sector.title}>

                <div className="group relative aspect-[4/5] overflow-hidden border border-white/10">

                  <Image
                    src={sector.image}
                    alt={`${sector.title} industrial environment`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-[#071321]/20 to-transparent" />

                  <h3 className="absolute bottom-7 left-6 text-xl font-bold">
                    {sector.title}
                  </h3>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>
      </section>

      {/* PROJECT ENQUIRY */}
      <section className="bg-[#071321]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>

            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0d2034] p-8 md:p-14">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

                <div className="max-w-2xl">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Start a Conversation
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Have an Industrial Project?
                    <span className="mt-2 block text-blue-400">
                      Let's Work Together.
                    </span>
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    Contact our team to discuss your inspection,
                    engineering and technical service requirements.
                  </p>

                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Discuss Your Project →
                </a>

              </div>

            </div>

          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}
