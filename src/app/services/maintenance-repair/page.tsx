
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Maintenance & Repair Services in Nigeria",
  description:
    "Kaotheem Energy Services provides maintenance and repair support for industrial and oil and gas facilities.",
  alternates: {
    canonical: "/services/maintenance-repair",
  },
};

export default function MaintenanceRepairPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Maintenance"
      title="Maintenance &"
      highlightedTitle="Repair"
      description="Industrial maintenance and repair support focused on equipment condition, operational reliability and facility performance."
      heroImage="/images/industrial-maintenance-team.jpeg"
      heroImageAlt="Industrial maintenance team"
      introEyebrow="Maintenance & Repair"
      introTitle="Supporting Equipment Reliability"
      introParagraphs={[
        "Industrial equipment and facilities require regular maintenance to support safe and reliable operations.",
        "Kaotheem Energy Services provides maintenance and repair support based on equipment condition, project requirements and applicable technical and safety procedures.",
      ]}
      introImage="/images/industrial-facility.jpeg"
      introImageAlt="Industrial facility"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Maintenance & Repair Support"
      capabilitiesDescription="Maintenance activities can be planned around facility requirements and the condition of industrial equipment."
      capabilities={[
        {
          number: "01",
          title: "Preventive Maintenance",
          description:
            "Planned maintenance support intended to help reduce unexpected equipment problems.",
        },
        {
          number: "02",
          title: "Corrective Maintenance",
          description:
            "Maintenance activities addressing identified equipment faults and defects.",
        },
        {
          number: "03",
          title: "Equipment Repairs",
          description:
            "Repair support for industrial equipment and mechanical components.",
        },
        {
          number: "04",
          title: "Shutdown Maintenance",
          description:
            "Maintenance support during planned facility shutdowns and turnaround activities.",
        },
        {
          number: "05",
          title: "Equipment Inspection",
          description:
            "Inspection support to help identify equipment condition and maintenance needs.",
        },
        {
          number: "06",
          title: "Maintenance Support",
          description:
            "General maintenance assistance for industrial facilities and operating systems.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industrial Applications"
      applicationsDescription="Maintenance support across different industrial operating environments."
      applications={[
        "Oil and Gas Facilities",
        "Offshore Installations",
        "Industrial Plants",
        "Processing Facilities",
        "Marine Infrastructure",
        "Manufacturing Facilities",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support equipment performance and facility integrity."
      relatedLinks={[
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Asset Integrity & Inspection",
          description: "Inspection and asset integrity services.",
          href: "/services/asset-integrity",
        },
        {
          title: "Fabric Maintenance",
          description: "Industrial surface and structural maintenance support.",
          href: "/services/fabric-maintenance",
        },
      ]}
      finalTitle="Need Maintenance or Repair Support?"
      finalDescription="Contact our team to discuss your equipment and facility maintenance requirements."
    />
  );
}
