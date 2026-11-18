import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Mechanical Services in Nigeria",
  description:
    "Explore Kaotheem Energy Services' mechanical services for industrial and oil and gas facilities.",
  alternates: {
    canonical: "/services/mechanical",
  },
};

export default function MechanicalServicesPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Engineering"
      title="Mechanical"
      highlightedTitle="Services"
      description="Mechanical support services for industrial equipment, facilities and infrastructure across demanding operating environments."
      heroImage="/images/industrial-facility.jpeg"
      heroImageAlt="Industrial facility"
      introEyebrow="Mechanical Services"
      introTitle="Supporting Industrial Operations"
      introParagraphs={[
        "Mechanical systems play an important role in the safe and reliable operation of industrial facilities.",
        "Kaotheem Energy Services provides mechanical service support for industrial and oil and gas operations, with attention to work requirements, site conditions and applicable procedures.",
      ]}
      introImage="/images/industrial-maintenance-team.jpeg"
      introImageAlt="Industrial maintenance team"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Mechanical Service Support"
      capabilitiesDescription="Mechanical work can be tailored to the equipment, facility and requirements of each project."
      capabilities={[
        {
          number: "01",
          title: "Equipment Installation",
          description:
            "Support for the installation of mechanical equipment and related components.",
        },
        {
          number: "02",
          title: "Mechanical Maintenance",
          description:
            "Maintenance support for industrial mechanical systems and equipment.",
        },
        {
          number: "03",
          title: "Equipment Inspection",
          description:
            "Visual checks and inspection support to help assess equipment condition.",
        },
        {
          number: "04",
          title: "Repair Support",
          description:
            "Mechanical repair support based on the condition and requirements of equipment.",
        },
        {
          number: "05",
          title: "Component Replacement",
          description:
            "Support for replacing worn or damaged mechanical components.",
        },
        {
          number: "06",
          title: "Shutdown Support",
          description:
            "Mechanical work support during planned maintenance and shutdown activities.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industrial Applications"
      applicationsDescription="Mechanical services can support a range of industrial environments."
      applications={[
        "Oil and Gas Facilities",
        "Offshore Installations",
        "Industrial Plants",
        "Processing Facilities",
        "Marine Infrastructure",
        "Manufacturing Facilities",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Discover other inspection and engineering services offered by Kaotheem."
      relatedLinks={[
        {
          title: "Asset Integrity & Inspection",
          description: "Inspection and asset integrity services.",
          href: "/services/asset-integrity",
        },
        {
          title: "Engineering & Procurement",
          description: "Engineering and procurement support.",
          href: "/services/engineering-procurement",
        },
        {
          title: "Maintenance & Repair",
          description: "Industrial maintenance and repair services.",
          href: "/services/maintenance-repair",
        },
      ]}
      finalTitle="Need Mechanical Service Support?"
      finalDescription="Contact our team to discuss your facility, equipment and project requirements."
    />
  );
}
