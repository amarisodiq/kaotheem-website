
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Engineering & Procurement Services in Nigeria",
  description:
    "Kaotheem Energy Services provides engineering and procurement support for industrial and oil and gas projects.",
  alternates: {
    canonical: "/services/engineering-procurement",
  },
};

export default function EngineeringProcurementPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Project Solutions"
      title="Engineering &"
      highlightedTitle="Procurement"
      description="Engineering and procurement support to help industrial projects source equipment, materials and technical solutions."
      heroImage="/images/engineering-team.jpeg"
      heroImageAlt="Engineering project team"
      introEyebrow="Engineering & Procurement"
      introTitle="Supporting Projects from Planning to Delivery"
      introParagraphs={[
        "Successful industrial projects require effective engineering coordination and reliable procurement of suitable equipment and materials.",
        "Kaotheem Energy Services provides engineering and procurement support based on project specifications, technical requirements and client needs.",
      ]}
      introImage="/images/project-team.jpeg"
      introImageAlt="Industrial project team"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Engineering & Procurement Support"
      capabilitiesDescription="Our support can be adapted to the technical and supply requirements of individual projects."
      capabilities={[
        {
          number: "01",
          title: "Engineering Support",
          description:
            "Technical support and coordination for industrial engineering activities.",
        },
        {
          number: "02",
          title: "Technical Documentation",
          description:
            "Support with technical documents and project-related specifications.",
        },
        {
          number: "03",
          title: "Equipment Sourcing",
          description:
            "Identification and sourcing support for suitable industrial equipment.",
        },
        {
          number: "04",
          title: "Materials Procurement",
          description:
            "Procurement support for materials required for industrial projects.",
        },
        {
          number: "05",
          title: "Supplier Coordination",
          description:
            "Coordination with suppliers to support project purchasing requirements.",
        },
        {
          number: "06",
          title: "Delivery Coordination",
          description:
            "Support with procurement follow-up and delivery coordination.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industries We Support"
      applicationsDescription="Engineering and procurement support for a range of industrial environments."
      applications={[
        "Oil and Gas",
        "Offshore Operations",
        "Petrochemical Facilities",
        "Power Generation",
        "Industrial Manufacturing",
        "Infrastructure Projects",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support project execution and facility operations."
      relatedLinks={[
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Electrical Services",
          description: "Electrical installation and maintenance support.",
          href: "/services/electrical",
        },
        {
          title: "Instrumentation Services",
          description: "Industrial instrumentation and process support.",
          href: "/services/instrumentation",
        },
      ]}
      finalTitle="Planning an Industrial Project?"
      finalDescription="Contact our team to discuss your engineering, equipment and procurement requirements."
    />
  );
}
