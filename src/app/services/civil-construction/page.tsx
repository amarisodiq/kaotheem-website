
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Civil & Construction Services in Nigeria",
  description:
    "Kaotheem Energy Services provides civil and construction support for industrial and oil and gas projects.",
  alternates: {
    canonical: "/services/civil-construction",
  },
};

export default function CivilConstructionPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Infrastructure & Construction"
      title="Civil &"
      highlightedTitle="Construction"
      description="Civil and construction support for industrial facilities, infrastructure and project development."
      heroImage="/images/scaffold-project-work.jpeg"
      heroImageAlt="Industrial construction and project work"
      introEyebrow="Civil & Construction"
      introTitle="Supporting Industrial Infrastructure"
      introParagraphs={[
        "Civil and construction activities play an important role in developing, maintaining and improving industrial facilities and infrastructure.",
        "Kaotheem Energy Services provides civil and construction support based on project specifications, site conditions and applicable safety requirements.",
      ]}
      introImage="/images/industrial-facility.jpeg"
      introImageAlt="Industrial facility"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Civil & Construction Support"
      capabilitiesDescription="Our construction support can be tailored to the scope and requirements of individual projects."
      capabilities={[
        {
          number: "01",
          title: "Civil Works",
          description:
            "Support for general civil works within industrial and infrastructure projects.",
        },
        {
          number: "02",
          title: "Concrete Works",
          description:
            "Support for concrete-related construction and maintenance activities.",
        },
        {
          number: "03",
          title: "Structural Works",
          description:
            "Construction support involving industrial structural components.",
        },
        {
          number: "04",
          title: "Facility Improvements",
          description:
            "Support for improvement and modification works within existing facilities.",
        },
        {
          number: "05",
          title: "Site Preparation",
          description:
            "Support for preparing work areas ahead of construction activities.",
        },
        {
          number: "06",
          title: "Construction Maintenance",
          description:
            "Support for maintaining civil structures and infrastructure.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Construction Applications"
      applicationsDescription="Civil and construction support for industrial and infrastructure environments."
      applications={[
        "Oil and Gas Facilities",
        "Industrial Plants",
        "Offshore Support Facilities",
        "Processing Facilities",
        "Commercial Infrastructure",
        "Industrial Buildings",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support industrial projects and infrastructure."
      relatedLinks={[
        {
          title: "Engineering & Procurement",
          description: "Engineering and procurement support.",
          href: "/services/engineering-procurement",
        },
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Fabric Maintenance",
          description: "Industrial surface and structural maintenance.",
          href: "/services/fabric-maintenance",
        },
      ]}
      finalTitle="Planning a Construction Project?"
      finalDescription="Contact our team to discuss your civil works and construction requirements."
    />
  );
}
