
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Training & Consultancy Services in Nigeria",
  description:
    "Kaotheem Energy Services provides training and consultancy support for industrial and oil and gas operations.",
  alternates: {
    canonical: "/services/training-consultancy",
  },
};

export default function TrainingConsultancyPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Professional Development"
      title="Training &"
      highlightedTitle="Consultancy"
      description="Technical training and consultancy support designed to strengthen industrial knowledge, operational practices and workforce capabilities."
      heroImage="/images/engineering-team.jpeg"
      heroImageAlt="Engineering professionals"
      introEyebrow="Training & Consultancy"
      introTitle="Building Technical Knowledge and Capability"
      introParagraphs={[
        "Technical knowledge and competent personnel are important to effective industrial operations.",
        "Kaotheem Energy Services provides training and consultancy support based on client requirements, project objectives and relevant industry practices.",
      ]}
      introImage="/images/project-team.jpeg"
      introImageAlt="Industrial project team"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Training & Consultancy Support"
      capabilitiesDescription="Training and consultancy activities can be structured around the needs of organisations and their workforce."
      capabilities={[
        {
          number: "01",
          title: "Technical Training",
          description:
            "Training support covering relevant technical subjects and industrial work practices.",
        },
        {
          number: "02",
          title: "NDT Training Support",
          description:
            "Knowledge development support relating to non-destructive testing methods and applications.",
        },
        {
          number: "03",
          title: "Safety Awareness",
          description:
            "Workplace safety awareness and guidance for industrial environments.",
        },
        {
          number: "04",
          title: "Technical Consultancy",
          description:
            "Technical guidance and advisory support based on defined project requirements.",
        },
        {
          number: "05",
          title: "Workforce Development",
          description:
            "Support for developing technical knowledge and workplace capabilities.",
        },
        {
          number: "06",
          title: "Operational Guidance",
          description:
            "Guidance on work practices and operational requirements for industrial projects.",
        },
      ]}
      applicationsEyebrow="Who We Support"
      applicationsTitle="Industries and Professionals"
      applicationsDescription="Training and consultancy support for organisations and personnel working in industrial environments."
      applications={[
        "Oil and Gas Companies",
        "Industrial Operators",
        "Inspection Personnel",
        "Engineering Teams",
        "Technical Workforce",
        "Project Organisations",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support technical performance and industrial operations."
      relatedLinks={[
        {
          title: "Conventional NDT",
          description: "Conventional non-destructive testing services.",
          href: "/services/conventional-ndt",
        },
        {
          title: "Advanced NDT",
          description: "Advanced inspection methods and technologies.",
          href: "/services/advanced-ndt",
        },
        {
          title: "Manpower Supply",
          description: "Personnel support for industrial projects.",
          href: "/services/manpower-supply",
        },
      ]}
      finalTitle="Looking for Training or Technical Guidance?"
      finalDescription="Contact our team to discuss your training and consultancy requirements."
    />
  );
}
