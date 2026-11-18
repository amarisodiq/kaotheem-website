import Image from "next/image";
import type { Metadata } from "next";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "NDT Inspection & Engineering Services in Nigeria",
  description:
    "Kaotheem Energy Services Ltd provides conventional and advanced NDT, PAUT, asset integrity, industrial inspection and engineering services in Nigeria. Enquire about FLUXO NDT products and consumables.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NDT Inspection & Engineering Services | Kaotheem",
    description:
      "Professional NDT, asset integrity, industrial inspection and engineering solutions in Nigeria.",
    url: "/",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(37,99,235,0.2),transparent_50%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <ScrollReveal direction="left">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Engineering Excellence. Trusted Solutions.
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Protecting Assets.
                <span className="mt-2 block text-blue-400">
                  Ensuring Integrity.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Delivering non-destructive testing, asset integrity and
                specialized engineering solutions for demanding industrial
                environments.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Explore Our Services →
                </a>

                <a
                  href="/contact"
                  className="border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  Request a Quotation
                </a>
              </div>

              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
                <div>
                  <p className="text-sm font-semibold">Conventional NDT</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Inspection & Testing
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Advanced NDT</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Advanced Inspection
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Asset Integrity</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Industrial Solutions
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <HeroSlideshow />
        </div>
      </section>

      {/* NDT Capabilities */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                What We Do
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Precision Inspection.
                <span className="block text-blue-400">Reliable Results.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                We provide conventional and advanced non-destructive testing
                solutions to assess asset condition, identify defects and
                support the integrity of critical industrial infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {/* Conventional NDT */}
              <div className="group border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/60">
                <div className="relative mb-7 aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/ndt-field-inspection.jpeg"
                    alt="Conventional NDT field inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-blue-400">
                  01 / CONVENTIONAL NDT
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  Conventional Testing
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Established inspection methods for identifying surface and
                  subsurface discontinuities across industrial materials and
                  components.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Visual Testing",
                    "Ultrasonic Testing",
                    "Eddy Current",
                    "Magnetic Particle",
                    "Penetrant Testing",
                    "PMI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-2 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="/services/conventional-ndt"
                  className="mt-10 inline-block text-sm font-semibold text-blue-400 transition group-hover:text-white"
                >
                  Explore Conventional NDT →
                </a>
              </div>

              {/* Advanced NDT */}
              <div className="group border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/60">
                <div className="relative mb-7 aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/industrial-tube-inspection.jpeg"
                    alt="Advanced industrial inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-blue-400">
                  02 / ADVANCED NDT
                </span>

                <h3 className="mt-6 text-2xl font-bold">Advanced Inspection</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Advanced inspection technologies for complex geometries,
                  critical assets and demanding industrial applications.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "PAUT",
                    "TOFD",
                    "PEC",
                    "LRUT",
                    "ACFM",
                    "AUT",
                    "MFL",
                    "IRIS",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-2 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="/services/advanced-ndt"
                  className="mt-10 inline-block text-sm font-semibold text-blue-400 transition group-hover:text-white"
                >
                  Explore Advanced NDT →
                </a>
              </div>

              {/* Asset Integrity */}
              <div className="group border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/60">
                <div className="relative mb-7 aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/industrial-facility.jpeg"
                    alt="Industrial facility asset integrity"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-blue-400">
                  03 / ASSET INTEGRITY
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  Asset Integrity & Inspection
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Inspection and condition assessment solutions designed to
                  support equipment reliability, operational safety and asset
                  life extension.
                </p>

                <a
                  href="/services/asset-integrity"
                  className="mt-10 inline-block text-sm font-semibold text-blue-400 transition group-hover:text-white"
                >
                  Discover Our Capabilities →
                </a>
              </div>

              {/* Rope Access */}
              <div className="group border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:border-blue-500/60">
                <div className="relative mb-7 aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/rope-access-inspection.jpeg"
                    alt="Industrial rope access inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-blue-400">
                  04 / ROPE ACCESS
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  Specialized Access Solutions
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Specialized access support for inspection, mechanical
                  installation, structural work, fabrication and maintenance.
                </p>

                <a
                  href="/services/rope-access"
                  className="mt-10 inline-block text-sm font-semibold text-blue-400 transition group-hover:text-white"
                >
                  Discover Rope Access →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Explore All Services */}
          <div className="mt-12 flex flex-col justify-between gap-6 border border-white/10 bg-[#0d2034] p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Our Full Capabilities
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                More Than Inspection.
                <span className="block text-slate-400">
                  Complete Engineering Solutions.
                </span>
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Explore our complete range of engineering, maintenance,
                inspection and technical services across multiple industries.
              </p>
            </div>

            <a
              href="/services"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Explore All Services <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Kaotheem */}
      <section className="overflow-hidden bg-[#071321]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-32 w-32 border-l border-t border-blue-500/50" />

              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/images/ndt-field-inspection.jpeg"
                  alt="Industrial inspection work by Kaotheem Energy Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 border border-white/20 bg-[#071321]/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">NDT</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-blue-300">
                    Inspection Services
                  </p>
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Engineering & Inspection
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    Built Around Asset Integrity
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 h-32 w-32 border-b border-r border-blue-500/50" />
            </div>
          </ScrollReveal>

          {/* Company information */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                About Kaotheem
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Engineering Solutions
                <span className="block text-blue-400">Built on Integrity.</span>
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

              <div className="mt-10 space-y-5">
                {[
                  "Non-Destructive Testing",
                  "Advanced Inspection Technologies",
                  "Asset Integrity Solutions",
                  "Specialized Engineering Services",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 items-center justify-center border border-blue-500/40 text-xs text-blue-400">
                      ✓
                    </span>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/about"
                className="mt-12 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Discover Our Company →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SREM TECHNOLOGIES INTRODUCTION */}
      <section className="border-b border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
                <span>✦</span>
                Authorized Nigeria Distributor
              </span>

              <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                PT & MPI Products
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                We provide direct access to high-performance Penetrant Testing
                (PT) and Magnetic Particle Inspection (MPI) products backed by{" "}
                <span className="font-semibold text-white">
                  SREM TECHNOLOGIES&apos;
                </span>{" "}
                decades of expertise.
              </p>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <div className="flex items-center justify-center gap-3 border border-white/10 bg-[#0d2034] px-5 py-6">
                  <span className="text-xl text-blue-400">✓</span>
                  <span className="text-sm font-medium text-white">
                    ISO 9001:2015 Certified
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 border border-white/10 bg-[#0d2034] px-5 py-6">
                  <span className="text-xl text-blue-400">✓</span>
                  <span className="text-sm font-medium text-white">
                    Strict Quality Controls
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 border border-white/10 bg-[#0d2034] px-5 py-6">
                  <span className="text-xl text-blue-400">✓</span>
                  <span className="text-sm font-medium text-white">
                    Reliable Inspection Results
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FLUXO & SREM Products */}
      <section className="border-t border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Products & Consumables
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                  Precision Products.
                  <span className="block text-blue-400">
                    Trusted Performance.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  Explore FLUXO non-destructive testing consumables and SREM
                  Technologies solutions available through Kaotheem Energy
                  Services.
                </p>
              </div>

              <a
                href="/products"
                className="inline-flex border border-blue-500/50 px-6 py-4 text-sm font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
              >
                Explore Product Catalogue →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  code: "FLUXO 3",
                  name: "Black Magnetic Ink",
                  category: "Magnetic Particle Inspection",
                  image: "/images/fluxo-3.jpg",
                  number: "01",
                },
                {
                  code: "FLUXO 4",
                  name: "White Contrast Paint",
                  category: "Magnetic Particle Inspection",
                  image: "/images/fluxo-4.jpg",
                  number: "02",
                },
                {
                  code: "FLUXO P125",
                  name: "Red Dye Penetrant",
                  category: "Penetrant Testing",
                  image: "/images/fluxo-p125.jpg",
                  number: "03",
                },
                {
                  code: "FLUXO R175",
                  name: "Developer",
                  category: "Penetrant Testing",
                  image: "/images/fluxo-r175.jpg",
                  number: "04",
                },
              ].map((product) => (
                <article
                  key={product.code}
                  className="group overflow-hidden border border-white/10 bg-[#0d2034] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={`${product.code} ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 bg-[#071321] px-3 py-2 text-xs font-semibold text-white">
                      {product.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {product.code}
                    </p>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400">
                      {product.category}
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <a
                        href={`mailto:info@kaotheem.com?subject=${encodeURIComponent(
                          `Enquiry for ${product.code}`,
                        )}`}
                        className="text-sm font-semibold text-blue-400 transition group-hover:text-white"
                      >
                        Request a Quote →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 border border-blue-500/20 bg-blue-500/5 p-8 md:flex md:items-center md:justify-between">
              <div>
                <p className="text-xl font-bold">
                  Looking for a specific FLUXO product?
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Contact our team for product information and availability.
                </p>
              </div>

              <a
                href="/products"
                className="mt-6 inline-block bg-blue-600 px-6 py-4 text-sm font-semibold transition hover:bg-blue-500 md:mt-0"
              >
                Browse All Products →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Experience */}
      <section className="border-t border-white/10 bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Our Experience
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                  Experience That
                  <span className="block text-blue-400">
                    Speaks Through Results.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  Our project experience spans industrial inspection, asset
                  integrity and engineering support across demanding operational
                  environments.
                </p>
              </div>

              <a
                href="/projects"
                className="inline-flex border border-blue-500/50 px-6 py-4 text-sm font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
              >
                Explore Our Projects →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  client: "PERENCO",
                  location: "Gabon",
                  project: "Caplopez Tank Farm & Becuna Platform",
                  period: "October 2024 – January 2025",
                  category: "Industrial Inspection",
                },
                {
                  number: "02",
                  client: "NICKEL SL",
                  location: "Equatorial Guinea",
                  project: "Jade Platform, FPSO Serpentina",
                  period: "January 2023 – April 2024",
                  category: "Asset Integrity",
                },
                {
                  number: "03",
                  client: "WAPCO / EHIJESSY",
                  location: "Badagry, Nigeria",
                  project: "WAPCO Badagry",
                  period: "November – December 2025",
                  category: "Engineering Services",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="group overflow-hidden border border-white/10 bg-[#0d2034] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0d2034]">
                    <Image
                      src={
                        item.number === "01"
                          ? "/images/offshore-platform.jpeg"
                          : item.number === "02"
                            ? "/images/industrial-tube-inspection.jpeg"
                            : "/images/pipeline-field-testing.jpeg"
                      }
                      alt={`${item.category} representative industrial imagery`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 via-transparent to-transparent" />

                    <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {item.category}
                    </span>

                    <span className="absolute right-5 top-5 border border-white/30 bg-[#071321]/70 px-3 py-2 text-xs font-semibold text-white">
                      {item.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold tracking-wider text-blue-400">
                        {item.client}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug">
                      {item.project}
                    </h3>

                    <p className="mt-5 border-t border-white/10 pt-5 text-xs text-slate-400">
                      {item.period}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="bg-[#071426] px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Trust & Compliance
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Built on Standards.
                <span className="block text-blue-400">Driven by Quality.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We are committed to maintaining professional standards,
                operational integrity and responsible service delivery across
                our engineering and inspection activities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Company Registrations",
                  description:
                    "Business registration and relevant industry registration documentation.",
                },
                {
                  number: "02",
                  title: "Quality & Safety",
                  description:
                    "A commitment to quality assurance, safe working practices and responsible operations.",
                },
                {
                  number: "03",
                  title: "Industry Credentials",
                  description:
                    "Relevant industry credentials and supporting documentation for our operations.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-400/50 hover:bg-white/[0.06]"
                >
                  <span className="text-sm font-semibold tracking-widest text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Documentation available on request
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients & Industry Partners */}
      <section className="bg-white px-6 py-24 text-[#071426] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Our Network
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Experience Across
                <span className="block text-blue-600">Leading Industries.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our company profile features organizations across the oil and
                gas, petrochemical, marine, energy, aviation, construction and
                industrial sectors.
              </p>
            </div>
          </ScrollReveal>

          <div className="client-marquee overflow-hidden border-y border-slate-200 py-8">
            <div className="client-marquee-track flex w-max items-center gap-6">
              {[1, 2].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 items-center gap-6"
                  aria-hidden={group === 2}
                >
                  {[
                    ["cooperative-society", "Cooperative Society"],
                    ["shell", "Shell"],
                    ["chevron", "Chevron"],
                    ["exxonmobil", "ExxonMobil"],
                    ["seplat", "Seplat"],
                    ["nnpc", "NNPC"],
                    ["indorama", "Indorama"],
                    ["perenco", "Perenco"],
                    ["amelin-projects", "Amelin Projects"],
                    ["rina", "RINA"],
                    ["nigeria-lng", "Nigeria LNG"],
                    ["russelsmith", "RusselSmith"],
                    ["nipex", "NipeX"],
                    ["west-african-gas-pipeline", "West African Gas Pipeline"],
                    [
                      "niger-delta-development-commission",
                      "Niger Delta Development Commission",
                    ],
                    ["les-energy-services", "LES Energy Services"],
                    ["prime-atlantic", "Prime Atlantic"],
                  ].map(([logo, name]) => (
                    <div
                      key={logo}
                      className="flex h-20 w-44 shrink-0 items-center justify-center border border-slate-200 bg-white p-4"
                    >
                      <Image
                        src={`/images/clients/${logo}.png`}
                        alt={name}
                        width={160}
                        height={65}
                        className="max-h-12 w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Request a Quote */}
      <section
        id="contact"
        className="bg-[#071426] px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Let&apos;s Work Together
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Have a Project
                <span className="block text-blue-400">in Mind?</span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-slate-300">
                Whether you need specialized NDT inspection, engineering support
                or FLUXO inspection consumables, our team is ready to discuss
                your requirements.
              </p>

              <div className="mt-8 space-y-6">
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <p className="text-sm text-slate-400">Email us</p>
                    <a
                      href="mailto:info@kaotheem.com"
                      className="mt-1 inline-block text-lg font-semibold transition hover:text-blue-400"
                    >
                      info@kaotheem.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-sm text-slate-400">Call us</p>
                    <a
                      href="tel:+2348160029024"
                      className="mt-1 inline-block text-lg font-semibold transition hover:text-blue-400"
                    >
                      +234 816 002 9024
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Visit our office</p>
                  <p className="mt-1 max-w-sm font-medium leading-7 text-white">
                    No. 11 Olumeni Street, Forces Avenue, Old GRA, Port
                    Harcourt, Rivers State, Nigeria.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Our focus</p>
                  <p className="mt-1 font-medium">
                    NDT Inspection · Asset Integrity · FLUXO Products
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <h3 className="text-2xl font-bold">Send an Enquiry</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Tell us what you need. Your email application will open with a
                prepared enquiry.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@kaotheem.com?subject=General%20Business%20Enquiry"
                  className="flex w-full items-center justify-between bg-blue-600 px-6 py-5 font-semibold transition hover:bg-blue-700"
                >
                  General Enquiry
                  <span>→</span>
                </a>

                <a
                  href="mailto:info@kaotheem.com?subject=Request%20for%20Quotation"
                  className="flex w-full items-center justify-between border border-white/20 px-6 py-5 font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  Request a Quote
                  <span>→</span>
                </a>

                <a
                  href="mailto:info@kaotheem.com?subject=FLUXO%20Product%20Enquiry"
                  className="flex w-full items-center justify-between border border-white/20 px-6 py-5 font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  FLUXO Product Enquiry
                  <span>→</span>
                </a>
              </div>

              <p className="mt-8 text-xs leading-6 text-slate-500">
                Our team will review your enquiry and respond using the contact
                details provided in your email.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
