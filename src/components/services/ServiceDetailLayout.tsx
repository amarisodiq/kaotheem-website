
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type ServiceDetailLayoutProps = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  introImage: string;
  introImageAlt: string;
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  capabilities: {
    number: string;
    title: string;
    description: string;
  }[];
  applicationsEyebrow: string;
  applicationsTitle: string;
  applicationsDescription: string;
  applications: string[];
  relatedTitle: string;
  relatedDescription: string;
  relatedLinks: {
    title: string;
    description: string;
    href: string;
  }[];
  finalTitle: string;
  finalDescription: string;
};

export default function ServiceDetailLayout({
  eyebrow,
  title,
  highlightedTitle,
  description,
  heroImage,
  heroImageAlt,
  introEyebrow,
  introTitle,
  introParagraphs,
  introImage,
  introImageAlt,
  capabilitiesEyebrow,
  capabilitiesTitle,
  capabilitiesDescription,
  capabilities,
  applicationsEyebrow,
  applicationsTitle,
  applicationsDescription,
  applications,
  relatedTitle,
  relatedDescription,
  relatedLinks,
  finalTitle,
  finalDescription,
}: ServiceDetailLayoutProps) {
  return (
    <main className="min-h-screen bg-[#071321] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={heroImageAlt}
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
                  {eyebrow}
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                {title}
                <span className="block text-blue-400">
                  {highlightedTitle}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                {description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
                >
                  Request a Service →
                </Link>

                <Link
                  href="/services"
                  className="border border-white/30 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
                >
                  All Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                {introEyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {introTitle}
              </h2>

              {introParagraphs.map((paragraph, index) => (
                <p key={index} className="mt-7 leading-8 text-slate-400">
                  {paragraph}
                </p>
              ))}

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 border-b border-blue-500 pb-3 text-sm font-semibold text-blue-400 transition hover:text-white"
              >
                Discuss Your Requirements →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={introImage}
                alt={introImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <ScrollReveal>
            <div className="mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                {capabilitiesEyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                {capabilitiesTitle}
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                {capabilitiesDescription}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <ScrollReveal key={item.number}>
                <article className="group h-full border border-white/10 bg-[#0d2034] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
                    {item.number}
                  </span>

                  <h3 className="mt-9 text-xl font-bold">{item.title}</h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-blue-400 transition group-hover:text-white"
                    >
                      Make an Enquiry →
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-y border-white/10 bg-[#0a1929]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                {applicationsEyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {applicationsTitle}
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                {applicationsDescription}
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Speak With Our Team →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {applications.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-28 items-center border border-white/10 bg-[#0d2034] p-5"
                >
                  <div>
                    <span className="text-xs font-semibold text-blue-400">
                      {String(index + 1).padStart(2, "0")}
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

      {/* RELATED SERVICES */}
      <section className="bg-[#071321]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Explore More
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                {relatedTitle}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                {relatedDescription}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <ScrollReveal key={link.href}>
                <div className="flex h-full flex-col justify-between border border-white/10 bg-[#0d2034] p-8 transition hover:border-blue-500/60 md:flex-row md:items-center md:gap-8">
                  <div>
                    <h3 className="text-xl font-bold">{link.title}</h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                      {link.description}
                    </p>
                  </div>

                  <Link
                    href={link.href}
                    className="mt-6 inline-flex shrink-0 text-sm font-semibold text-blue-400 transition hover:text-white md:mt-0"
                  >
                    Explore Service →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {finalTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              {finalDescription}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#071321] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#10243a]"
          >
            Contact Our Team →
          </Link>
        </div>
      </section>
    </main>
  );
}
