
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Industrial Rope Access Services in Nigeria",
  description:
    "Kaotheem Energy Services provides industrial rope access support for inspection, maintenance and difficult-to-access work areas.",
  alternates: {
    canonical: "/services/rope-access",
  },
  openGraph: {
    title: "Rope Access Services | Kaotheem Energy Services",
    description:
      "Industrial access solutions supporting inspection and maintenance in difficult-to-reach locations.",
    url: "/services/rope-access",
    type: "website",
  },
};

export default function RopeAccessPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Access Solutions"
      title="Rope Access"
      highlightedTitle="Services."
      description="Supporting inspection and maintenance activities in elevated and difficult-to-access industrial environments."
      heroImage="/images/rope-access-inspection.jpeg"
      heroImageAlt="Industrial rope access work"
      introEyebrow="Industrial Access Capabilities"
      introTitle="Practical Access Solutions for Challenging Work Areas."
      introParagraphs={[
        "Rope access provides a method of reaching elevated and difficult-to-access work locations for suitable industrial inspection and maintenance activities.",
        "It can be considered where conventional access arrangements such as scaffolding or elevated work platforms may be impractical, subject to site conditions and a suitable risk assessment.",
        "Each work scope should be evaluated to determine the appropriate access method, personnel requirements and safety controls.",
      ]}
      introImage="/images/offshore-platform.jpeg"
      introImageAlt="Offshore industrial platform"
      capabilitiesEyebrow="Our Rope Access Applications"
      capabilitiesTitle="Supporting Work in Difficult-to-Reach Areas."
      capabilitiesDescription="Rope access may support a range of industrial activities depending on the work scope, access conditions and safety requirements."
      capabilities={[
        {
          number: "01",
          title: "Inspection Access",
          description:
            "Access support for inspection activities on elevated structures and difficult-to-reach areas.",
        },
        {
          number: "02",
          title: "Industrial Maintenance",
          description:
            "Access solutions for maintenance activities where conventional access methods may be difficult to use.",
        },
        {
          number: "03",
          title: "Structural Work",
          description:
            "Access support for work involving elevated industrial structures and infrastructure.",
        },
        {
          number: "04",
          title: "Offshore Facilities",
          description:
            "Access support for suitable work areas within offshore and marine industrial environments.",
        },
        {
          number: "05",
          title: "Plant & Facility Support",
          description:
            "Access solutions for selected activities within industrial plants and operating facilities.",
        },
        {
          number: "06",
          title: "Difficult-to-Reach Areas",
          description:
            "Practical access planning for work locations where traditional access arrangements may be challenging.",
        },
      ]}
      applicationsEyebrow="Work Environments"
      applicationsTitle="Access Solutions Across Industrial Facilities."
      applicationsDescription="Rope access suitability depends on the structure, working conditions, task requirements and approved safety arrangements."
      applications={[
        "Offshore Platforms",
        "Oil & Gas Facilities",
        "Industrial Plants",
        "Storage Tanks",
        "Marine Structures",
        "Elevated Infrastructure",
      ]}
      relatedTitle="Explore Our Related Services."
      relatedDescription="Explore other inspection and engineering capabilities that may support your industrial project."
      relatedLinks={[
        {
          title: "Asset Integrity & Inspection",
          description:
            "Inspection and condition assessment solutions for industrial assets and critical equipment.",
          href: "/services/asset-integrity",
        },
        {
          title: "Advanced NDT",
          description:
            "Specialised non-destructive testing methods for industrial components and structures.",
          href: "/services/advanced-ndt",
        },
      ]}
      finalTitle="Need Rope Access Support for Your Project?"
      finalDescription="Contact Kaotheem Energy Services to discuss your site conditions and project requirements."
    />
  );
}
