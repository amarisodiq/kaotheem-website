
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "FLUXO NDT Products & Consumables in Nigeria",
  description:
    "Explore FLUXO magnetic particle inspection, dye penetrant testing, ultrasonic testing consumables, developers, cleaners and inspection products available through Kaotheem Energy Services Ltd in Nigeria.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "FLUXO NDT Products & Consumables | Kaotheem Nigeria",
    description:
      "Explore FLUXO NDT inspection consumables and request product information or availability from Kaotheem Energy Services Ltd.",
    url: "/products",
    siteName: "Kaotheem Energy Services Ltd",
    type: "website",
  },
};

const products = [
  {
    code: "FLUXO 3",
    name: "Black Magnetic Ink",
    category: "Magnetic Particle Inspection",
    image: "/images/fluxo-3.jpg",
  },
  {
    code: "FLUXO 4",
    name: "White Contrast Paint",
    category: "Magnetic Particle Inspection",
    image: "/images/fluxo-4.jpg",
  },
  {
    code: "FLUXO 5",
    name: "Remover for White Contrast Paint",
    category: "Magnetic Particle Inspection",
    image: "/images/fluxo-5.jpg",
  },
  {
    code: "FLUXO 6",
    name: "Fluorescent Magnetic Ink",
    category: "Magnetic Particle Inspection",
    image: "/images/fluxo-6.jpg",
  },
  {
    code: "FLUXO P125",
    name: "Red Dye Penetrant",
    category: "Penetrant Testing",
    image: "/images/fluxo-p125.jpg",
  },
  {
    code: "FLUXO P139",
    name: "Red Dye Penetrant",
    category: "Penetrant Testing",
    image: "/images/fluxo-p139.jpg",
  },
  {
    code: "FLUXO R175",
    name: "Developer",
    category: "Penetrant Testing",
    image: "/images/fluxo-r175.jpg",
  },
  {
    code: "FLUXO R180",
    name: "Developer",
    category: "Penetrant Testing",
    image: "/images/fluxo-r180.jpg",
  },
  {
    code: "FLUXO 8702",
    name: "Fluorescent Penetrant",
    category: "Penetrant Testing",
    image: "/images/fluxo-8702.jpg",
  },
  {
    code: "FLUXO N150",
    name: "Solvent Cleaner",
    category: "Cleaning Products",
    image: "/images/fluxo-n150.jpg",
  },
  {
    code: "FLUXO S190",
    name: "Solvent Cleaner",
    category: "Cleaning Products",
    image: "/images/fluxo-s190.jpg",
  },
];

const additionalProducts = [
  {
    title: "Magnetic Particle Inspection",
    items: [
      "FLUXO 2 – Strippable White Contrast Paint",
      "FLUXO 7 – White Contrast Paint",
      "FLUXO 215 – Water-based Black Magnetic Ink",
      "FLUXO 307 – Water-based Fluorescent Magnetic Ink",
    ],
  },
  {
    title: "Penetrant Testing",
    items: [
      "FLUXO P172 – Red Dye Penetrant",
      "FLUXO PHT – High-temperature Red Dye Penetrant",
      "FLUXO RHT – High-temperature Developer",
      "FLUXO NHT – High-temperature Remover",
    ],
  },
  {
    title: "Ultrasonic Testing",
    items: [
      "FLUXO US-3",
      "FLUXO US-9",
      "FLUXO GEL D",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#071321] text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">

        <Image
          src="/images/industrial-tube-inspection.jpeg"
          alt="Industrial inspection and non-destructive testing"
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
                Products & Consumables
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              FLUXO NDT Products.
              <span className="mt-2 block text-blue-400">
                Inspection Essentials.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore FLUXO consumables for magnetic particle inspection,
              penetrant testing, ultrasonic testing and industrial
              inspection applications through Kaotheem Energy Services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#catalogue"
                className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Explore Catalogue →
              </a>

              <a
                href="mailto:info@kaotheem.com?subject=FLUXO%20Product%20Enquiry"
                className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Enquire About Products
              </a>

            </div>

            <div className="mt-16 border-t border-white/20 pt-8">
              <p className="text-sm font-semibold">
                FLUXO NDT Consumables
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Magnetic Particle · Penetrant Testing · Ultrasonic Testing
              </p>
            </div>

          </div>
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
                We provide direct access to high-performance Penetrant
                Testing (PT) and Magnetic Particle Inspection (MPI)
                products backed by{" "}
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


      {/* INTRODUCTION */}
      <section className="border-b border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">

          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  FLUXO Product Range
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                  Products for
                  <span className="block text-blue-400">
                    Inspection Applications.
                  </span>
                </h2>
              </div>

              <p className="leading-8 text-slate-400">
                Browse our selection of FLUXO inspection consumables.
                Contact our team for product specifications, documentation,
                pricing and availability.
              </p>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section id="catalogue" className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <ScrollReveal>
            <div className="mb-14">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Featured Products
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                FLUXO Product Catalogue
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Explore selected products from the FLUXO inspection
                consumables range.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product, index) => (
              <ScrollReveal key={product.code}>

                <article className="group h-full overflow-hidden border border-white/10 bg-[#0d2034] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">

                  <div className="relative aspect-[4/3] overflow-hidden bg-white">

                    <Image
                      src={product.image}
                      alt={`${product.code} ${product.name} FLUXO NDT consumable`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-4 transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 bg-[#071321] px-3 py-2 text-xs font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="flex h-full flex-col p-6">

                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {product.code}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-xs text-slate-400">
                      {product.category}
                    </p>

                    <a
                      href={`mailto:info@kaotheem.com?subject=${encodeURIComponent(
                        `Enquiry for ${product.code}`
                      )}&body=${encodeURIComponent(
                        `Hello Kaotheem Team,\n\nI would like to enquire about ${product.code} - ${product.name}.\n\nPlease provide product information, pricing and availability.\n\nThank you.`
                      )}`}
                      className="mt-7 border-t border-white/10 pt-5 text-sm font-semibold text-blue-400 transition group-hover:text-white"
                    >
                      Request Product Information →
                    </a>

                  </div>

                </article>

              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="border-y border-white/10 bg-[#0a1929]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>
            <div className="mb-14 max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                More From FLUXO
              </p>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Additional Product Range
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                The FLUXO range also includes additional products
                for different inspection methods and applications.
              </p>

            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">

            {additionalProducts.map((group) => (
              <ScrollReveal key={group.title}>

                <div className="h-full border border-white/10 bg-[#0d2034] p-8">

                  <h3 className="text-xl font-bold">
                    {group.title}
                  </h3>

                  <div className="mt-7 space-y-4">

                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 border-b border-white/10 pb-4"
                      >
                        <span className="text-blue-400">•</span>

                        <p className="text-sm leading-6 text-slate-300">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>

                  <a
                    href={`mailto:info@kaotheem.com?subject=${encodeURIComponent(
                      `Enquiry - ${group.title}`
                    )}`}
                    className="mt-8 inline-block text-sm font-semibold text-blue-400 transition hover:text-white"
                  >
                    Enquire About These Products →
                  </a>

                </div>

              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* PRODUCT ENQUIRY */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">

          <ScrollReveal>
            <div className="relative overflow-hidden border border-blue-500/20 bg-[#0d2034] p-8 md:p-14">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

                <div className="max-w-2xl">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Product Enquiries
                  </p>

                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Looking for a Specific FLUXO Product?
                    <span className="mt-2 block text-blue-400">
                      Talk to Our Team.
                    </span>
                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">
                    Contact Kaotheem for product information, technical
                    documentation, pricing and availability.
                  </p>

                </div>

                <a
                  href="mailto:info@kaotheem.com?subject=FLUXO%20Product%20Enquiry"
                  className="inline-flex shrink-0 items-center justify-center bg-blue-600 px-8 py-5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Send Product Enquiry →
                </a>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}
