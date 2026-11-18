
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Asset Integrity & Inspection Services in Nigeria",
  description:
    "Kaotheem Energy Services provides asset integrity and inspection solutions for oil and gas, marine, petrochemical, power and industrial facilities.",
  alternates: {
    canonical: "/services/asset-integrity",
  },
  openGraph: {
    title: "Asset Integrity & Inspection | Kaotheem Energy Services",
    description:
      "Inspection and asset integrity solutions for industrial facilities and critical equipment.",
    url: "/services/asset-integrity",
    type: "website",
  },
};

export default function AssetIntegrityPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Inspection & Asset Reliability"
      title="Asset Integrity"
      highlightedTitle="& Inspection Services"
      description="Supporting the safety, reliability and operational performance of industrial assets through inspection and condition assessment solutions."
      heroImage="/images/industrial-facility.jpeg"
      heroImageAlt="Industrial facility and equipment"
      introEyebrow="Advanced Inspection Capabilities"
      introTitle="Maintaining Asset Integrity Through Inspection."
      introParagraphs={[
        "Kaotheem Energy Services provides asset integrity and inspection solutions designed to support the safety, reliability and operational efficiency of industrial assets.",
        "Through inspection technologies and condition assessment activities, we help clients identify defects, monitor asset condition, support equipment life management and maintain applicable regulatory requirements.",
        "Our inspection approach can be tailored to the asset, operating environment and specific inspection requirements.",
      ]}
      introImage="/images/industrial-tube-inspection.jpeg"
      introImageAlt="Industrial tube inspection"
      capabilitiesEyebrow="Our Asset Integrity Capabilities"
      capabilitiesTitle="Supporting the Reliability of Critical Assets."
      capabilitiesDescription="Our asset integrity services bring together inspection and condition assessment activities to support informed maintenance and operational decisions."
      capabilities={[
        {
          number: "01",
          title: "Asset Condition Assessment",
          description:
            "Inspection activities to help evaluate the condition of equipment, structures and industrial assets.",
        },
        {
          number: "02",
          title: "Non-Destructive Testing",
          description:
            "Conventional and advanced NDT methods to support the examination of materials, components and structures.",
        },
        {
          number: "03",
          title: "Defect Detection",
          description:
            "Inspection approaches designed to identify and assess discontinuities and potential defects.",
        },
        {
          number: "04",
          title: "Condition Monitoring",
          description:
            "Inspection and monitoring activities that help track asset condition and support maintenance decisions.",
        },
        {
          number: "05",
          title: "Equipment Life Assessment",
          description:
            "Inspection information that can help organisations evaluate equipment condition and plan maintenance.",
        },
        {
          number: "06",
          title: "Inspection Support",
          description:
            "Inspection solutions that support operational reliability, safety and applicable compliance requirements.",
        },
      ]}
      applicationsEyebrow="Inspection Applications"
      applicationsTitle="Supporting Critical Industrial Environments."
      applicationsDescription="Asset integrity and inspection activities can support facilities across different industrial sectors, depending on their equipment and inspection requirements."
      applications={[
        "Oil & Gas",
        "Marine",
        "Petrochemical",
        "Power Generation",
        "Industrial Facilities",
      ]}
      relatedTitle="Explore Our Inspection Services."
      relatedDescription="Discover other non-destructive testing capabilities available within our inspection service areas."
      relatedLinks={[
        {
          title: "Conventional NDT",
          description:
            "Visual, ultrasonic, magnetic particle, penetrant testing and other conventional inspection methods.",
          href: "/services/conventional-ndt",
        },
        {
          title: "Advanced NDT",
          description:
            "Specialised inspection methods including PAUT, TOFD, PEC, LRUT and other advanced techniques.",
          href: "/services/advanced-ndt",
        },
      ]}
      finalTitle="Need Asset Integrity & Inspection Support?"
      finalDescription="Contact Kaotheem Energy Services to discuss your facility and inspection requirements."
    />
  );
}
