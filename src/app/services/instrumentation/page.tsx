
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Instrumentation Services in Nigeria",
  description:
    "Kaotheem Energy Services provides instrumentation support for industrial and oil and gas facilities.",
  alternates: {
    canonical: "/services/instrumentation",
  },
};

export default function InstrumentationServicesPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Engineering"
      title="Instrumentation"
      highlightedTitle="Services"
      description="Instrumentation support for industrial systems, process monitoring and control equipment across demanding operating environments."
      heroImage="/images/industrial-tube-inspection.jpeg"
      heroImageAlt="Industrial process equipment"
      introEyebrow="Instrumentation Services"
      introTitle="Supporting Process Monitoring and Control"
      introParagraphs={[
        "Instrumentation systems help industrial facilities monitor, measure and control important operating processes.",
        "Kaotheem Energy Services provides instrumentation service support based on project requirements, equipment specifications and applicable technical and safety procedures.",
      ]}
      introImage="/images/industrial-facility.jpeg"
      introImageAlt="Industrial processing facility"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Instrumentation Support"
      capabilitiesDescription="Instrumentation activities can be tailored to the needs of industrial installations and process systems."
      capabilities={[
        {
          number: "01",
          title: "Instrument Installation",
          description:
            "Support for installing industrial instruments and associated equipment.",
        },
        {
          number: "02",
          title: "Instrument Calibration",
          description:
            "Calibration support to help verify instrument readings against defined requirements.",
        },
        {
          number: "03",
          title: "Instrumentation Maintenance",
          description:
            "Maintenance support for instruments and related process measurement systems.",
        },
        {
          number: "04",
          title: "Control System Support",
          description:
            "Support for instrumentation associated with industrial monitoring and control systems.",
        },
        {
          number: "05",
          title: "Instrument Inspection",
          description:
            "Inspection support to assess instrument condition and installation requirements.",
        },
        {
          number: "06",
          title: "Troubleshooting Support",
          description:
            "Assistance with identifying instrumentation faults and performance issues.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industrial Applications"
      applicationsDescription="Instrumentation support across process-driven industrial environments."
      applications={[
        "Oil and Gas Facilities",
        "Offshore Installations",
        "Processing Plants",
        "Petrochemical Facilities",
        "Power Generation",
        "Industrial Manufacturing",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other engineering services that support industrial operations."
      relatedLinks={[
        {
          title: "Electrical Services",
          description: "Electrical installation and maintenance support.",
          href: "/services/electrical",
        },
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Engineering & Procurement",
          description: "Engineering and procurement support.",
          href: "/services/engineering-procurement",
        },
      ]}
      finalTitle="Need Instrumentation Support?"
      finalDescription="Contact our team to discuss your instrumentation and process system requirements."
    />
  );
}
