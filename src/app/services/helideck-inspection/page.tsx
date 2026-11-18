
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Helideck Inspection Services in Nigeria",
  description:
    "Kaotheem Energy Services provides helideck inspection support for offshore and industrial facilities.",
  alternates: {
    canonical: "/services/helideck-inspection",
  },
};

export default function HelideckInspectionPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Offshore Inspection"
      title="Helideck"
      highlightedTitle="Inspection"
      description="Inspection support for offshore helideck facilities, helping operators assess condition, identify defects and maintain operational safety."
      heroImage="/images/offshore-platform.jpeg"
      heroImageAlt="Offshore platform"
      introEyebrow="Helideck Inspection"
      introTitle="Supporting Offshore Aviation Safety"
      introParagraphs={[
        "Helidecks are important operational areas on offshore installations and require appropriate inspection and maintenance attention.",
        "Kaotheem Energy Services provides helideck inspection support based on client requirements, applicable standards and agreed inspection procedures.",
      ]}
      introImage="/images/industrial-surface-work.jpeg"
      introImageAlt="Industrial surface inspection work"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Helideck Inspection Support"
      capabilitiesDescription="Inspection activities can be planned around the helideck configuration, condition and applicable requirements."
      capabilities={[
        {
          number: "01",
          title: "Visual Inspection",
          description:
            "Visual assessment of accessible helideck surfaces and structural components.",
        },
        {
          number: "02",
          title: "Surface Condition Assessment",
          description:
            "Assessment of visible surface deterioration, damage and coating condition.",
        },
        {
          number: "03",
          title: "Structural Inspection Support",
          description:
            "Inspection support for accessible structural elements associated with helideck installations.",
        },
        {
          number: "04",
          title: "Corrosion Assessment",
          description:
            "Identification and documentation of visible corrosion and coating deterioration.",
        },
        {
          number: "05",
          title: "Inspection Reporting",
          description:
            "Documentation of inspection observations and identified conditions.",
        },
        {
          number: "06",
          title: "Maintenance Recommendations",
          description:
            "Reporting observations that may require further assessment or maintenance attention.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Offshore Applications"
      applicationsDescription="Helideck inspection support for offshore operating environments."
      applications={[
        "Offshore Platforms",
        "Floating Production Facilities",
        "Offshore Support Installations",
        "Marine Facilities",
        "Oil and Gas Installations",
        "Offshore Infrastructure",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other inspection services supporting offshore asset integrity."
      relatedLinks={[
        {
          title: "Asset Integrity & Inspection",
          description: "Inspection and asset integrity services.",
          href: "/services/asset-integrity",
        },
        {
          title: "Advanced NDT",
          description: "Advanced non-destructive testing methods.",
          href: "/services/advanced-ndt",
        },
        {
          title: "Rope Access",
          description: "Specialized access for elevated work locations.",
          href: "/services/rope-access",
        },
      ]}
      finalTitle="Need Helideck Inspection Support?"
      finalDescription="Contact our team to discuss your offshore inspection requirements."
    />
  );
}
