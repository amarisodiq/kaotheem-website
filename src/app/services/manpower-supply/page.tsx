
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Manpower Supply Services in Nigeria",
  description:
    "Kaotheem Energy Services provides manpower supply support for industrial, engineering and oil and gas projects.",
  alternates: {
    canonical: "/services/manpower-supply",
  },
};

export default function ManpowerSupplyPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Workforce Solutions"
      title="Manpower"
      highlightedTitle="Supply"
      description="Workforce support for industrial and engineering projects, helping clients meet their personnel and operational requirements."
      heroImage="/images/industrial-maintenance-team.jpeg"
      heroImageAlt="Industrial maintenance personnel"
      introEyebrow="Manpower Supply"
      introTitle="Providing Workforce Support"
      introParagraphs={[
        "Industrial projects depend on personnel with the appropriate experience, skills and understanding of site requirements.",
        "Kaotheem Energy Services provides manpower supply support based on client specifications, project scope and personnel requirements.",
      ]}
      introImage="/images/engineering-team.jpeg"
      introImageAlt="Engineering team"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Manpower Supply Support"
      capabilitiesDescription="Personnel requirements can be assessed according to project scope, technical needs and operational demands."
      capabilities={[
        {
          number: "01",
          title: "Technical Personnel",
          description:
            "Personnel support for technical and industrial project activities.",
        },
        {
          number: "02",
          title: "NDT Personnel",
          description:
            "Personnel support for non-destructive testing and inspection activities, subject to verified qualifications.",
        },
        {
          number: "03",
          title: "Engineering Personnel",
          description:
            "Workforce support for engineering and technical project requirements.",
        },
        {
          number: "04",
          title: "Skilled Workforce",
          description:
            "Supply support for skilled personnel required for industrial operations.",
        },
        {
          number: "05",
          title: "Project Personnel",
          description:
            "Personnel support for temporary and project-based workforce requirements.",
        },
        {
          number: "06",
          title: "Workforce Coordination",
          description:
            "Coordination support based on agreed personnel requirements and project arrangements.",
        },
      ]}
      applicationsEyebrow="Who We Support"
      applicationsTitle="Industries and Projects"
      applicationsDescription="Manpower support for organisations operating across industrial and infrastructure sectors."
      applications={[
        "Oil and Gas",
        "Offshore Operations",
        "Industrial Facilities",
        "Engineering Projects",
        "Construction Projects",
        "Inspection Operations",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support industrial project delivery."
      relatedLinks={[
        {
          title: "Training & Consultancy",
          description: "Technical training and consultancy support.",
          href: "/services/training-consultancy",
        },
        {
          title: "Conventional NDT",
          description: "Conventional non-destructive testing services.",
          href: "/services/conventional-ndt",
        },
        {
          title: "Engineering & Procurement",
          description: "Engineering and procurement support.",
          href: "/services/engineering-procurement",
        },
      ]}
      finalTitle="Looking for Qualified Project Personnel?"
      finalDescription="Contact our team to discuss your manpower requirements and project needs."
    />
  );
}
