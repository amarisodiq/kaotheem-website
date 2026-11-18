
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Industrial Gallery | NDT & Engineering Projects",
  description:
    "Explore industrial inspection, non-destructive testing, offshore, rope access and engineering photographs from Kaotheem Energy Services Ltd.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Industrial Gallery | Kaotheem Energy Services",
    description:
      "Explore photographs representing Kaotheem's inspection, engineering and industrial service environments.",
    url: "/gallery",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const gallery = [
  {
    title: "Offshore Operations",
    category: "Oil & Gas",
    image: "/images/offshore-platform.jpeg",
  },
  {
    title: "NDT Field Inspection",
    category: "Inspection & Testing",
    image: "/images/ndt-field-inspection.jpeg",
  },
  {
    title: "Pipeline Inspection",
    category: "Inspection & Testing",
    image: "/images/pipeline-field-testing.jpeg",
  },
  {
    title: "Rope Access Operations",
    category: "Specialized Services",
    image: "/images/rope-access-inspection.jpeg",
  },
  {
    title: "Industrial Facility",
    category: "Industrial Operations",
    image: "/images/industrial-facility.jpeg",
  },
  {
    title: "Advanced Tube Inspection",
    category: "NDT Inspection",
    image: "/images/industrial-tube-inspection.jpeg",
  },
  {
    title: "Industrial Surface Work",
    category: "Maintenance",
    image: "/images/industrial-surface-work.jpeg",
  },
  {
    title: "Electrical Inspection",
    category: "Engineering",
    image: "/images/electrical-inspection.jpeg",
  },
  {
    title: "Industrial Maintenance",
    category: "Maintenance",
    image: "/images/industrial-maintenance-team.jpeg",
  },
  {
    title: "Scaffolding Operations",
    category: "Industrial Operations",
    image: "/images/scaffold-project-work.jpeg",
  },
  {
    title: "Engineering Team",
    category: "Engineering",
    image: "/images/engineering-team.jpeg",
  },
  {
    title: "Project Team",
    category: "Project Operations",
    image: "/images/project-team.jpeg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">

        <Image
          src="/images/industrial-maintenance-team.jpeg"
          alt="Industrial engineering and maintenance operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#071321]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/75 to-[#071321]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">

          <div className="max-w-3xl">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Our Gallery
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Our Work.
              <span className="mt-2 block text-blue-400">
                Our Environment.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore photographs representing industrial inspection,
              non-destructive testing, engineering and specialized
              service environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#gallery"
                className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Explore Gallery →
              </a>

              <a
                href="/contact"
                className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Contact Our Team
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-white/10 bg-[#0a1929]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">

          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Visual Portfolio
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                  Industrial Work.
                  <span className="block text-blue-400">
                    Technical Expertise.
                  </span>
                </h2>

              </div>

              <p className="leading-8 text-slate-400">
                A visual overview of industrial environments,
                inspection activities and engineering operations
                associated with our service areas.
              </p>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* GALLERY GRID */}
      <section id="gallery" className="bg-[#071321]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <ScrollReveal>
            <div className="mb-14">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Photo Collection
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Explore Our Gallery
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Browse images across our industrial service
                environments and technical capabilities.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {gallery.map((item, index) => (

              <ScrollReveal key={item.title}>

                <article className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#0d2034]">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/95 via-[#071321]/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

                  <span className="absolute left-5 top-5 border border-white/20 bg-[#071321]/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 w-full p-6">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

          <p className="mt-10 text-xs leading-6 text-slate-500">
            Images are representative of industrial environments and
            service activities. They should not be interpreted as
            verified records of specific projects unless confirmed.
          </p>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-white/10 bg-[#0a1929]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>

            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0d2034] p-8 md:p-14">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

                <div className="max-w-2xl">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Work With Us
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Looking for Inspection
                    <span className="block text-blue-400">
                      & Engineering Support?
                    </span>
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    Get in touch with Kaotheem Energy Services
                    to discuss your technical and project requirements.
                  </p>

                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Contact Kaotheem →
                </a>

              </div>

            </div>

          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}
