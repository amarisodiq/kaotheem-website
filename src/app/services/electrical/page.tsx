
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Electrical Services in Nigeria",
  description:
    "Kaotheem Energy Services provides electrical service support for industrial and oil and gas facilities.",
  alternates: {
    canonical: "/services/electrical",
  },
};

export default function ElectricalServicesPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Engineering"
      title="Electrical"
      highlightedTitle="Services"
      description="Electrical service support for industrial facilities, equipment and infrastructure across demanding operating environments."
      heroImage="/images/electrical-inspection.jpeg"
      heroImageAlt="Electrical inspection work"
      introEyebrow="Electrical Services"
      introTitle="Supporting Reliable Electrical Systems"
      introParagraphs={[
        "Electrical systems are essential to the safe and reliable operation of industrial facilities.",
        "Kaotheem Energy Services provides electrical service support based on project requirements, site conditions and applicable technical and safety procedures.",
      ]}
      introImage="/images/industrial-facility.jpeg"
      introImageAlt="Industrial facility"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Electrical Service Support"
      capabilitiesDescription="Our electrical support activities can be tailored to the requirements of industrial installations and projects."
      capabilities={[
        {
          number: "01",
          title: "Electrical Installation",
          description:
            "Support for electrical installation activities and associated equipment.",
        },
        {
          number: "02",
          title: "Electrical Maintenance",
          description:
            "Maintenance support for electrical systems and industrial equipment.",
        },
        {
          number: "03",
          title: "Electrical Inspection",
          description:
            "Inspection support to help assess the condition of electrical installations.",
        },
        {
          number: "04",
          title: "Equipment Troubleshooting",
          description:
            "Support in identifying electrical equipment and system faults.",
        },
        {
          number: "05",
          title: "Cable and Wiring Support",
          description:
            "Support for cable installation, wiring and related electrical work.",
        },
        {
          number: "06",
          title: "Electrical Repair Support",
          description:
            "Electrical repair activities based on equipment condition and project requirements.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industrial Applications"
      applicationsDescription="Electrical services for a range of industrial and infrastructure environments."
      applications={[
        "Oil and Gas Facilities",
        "Offshore Installations",
        "Industrial Plants",
        "Processing Facilities",
        "Power Generation Facilities",
        "Commercial Infrastructure",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other engineering and maintenance services."
      relatedLinks={[
        {
          title: "Instrumentation Services",
          description: "Support for industrial instrumentation systems.",
          href: "/services/instrumentation",
        },
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Maintenance & Repair",
          description: "Industrial maintenance and repair support.",
          href: "/services/maintenance-repair",
        },
      ]}
      finalTitle="Need Electrical Service Support?"
      finalDescription="Contact our team to discuss your electrical project and facility requirements."
    />
  );
}
