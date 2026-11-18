
import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Fabric Maintenance Services in Nigeria",
  description:
    "Kaotheem Energy Services provides industrial fabric maintenance support for oil and gas facilities and infrastructure.",
  alternates: {
    canonical: "/services/fabric-maintenance",
  },
};

export default function FabricMaintenancePage() {
  return (
    <ServiceDetailLayout
      eyebrow="Industrial Maintenance"
      title="Fabric"
      highlightedTitle="Maintenance"
      description="Industrial fabric maintenance support to help protect facility structures, surfaces and infrastructure against operational and environmental conditions."
      heroImage="/images/industrial-surface-work.jpeg"
      heroImageAlt="Industrial surface maintenance work"
      introEyebrow="Fabric Maintenance"
      introTitle="Protecting Industrial Assets"
      introParagraphs={[
        "Industrial structures and equipment are exposed to demanding operating and environmental conditions that can affect their surfaces and long-term condition.",
        "Kaotheem Energy Services provides fabric maintenance support for industrial facilities, with work planned around project requirements, site conditions and applicable safety procedures.",
      ]}
      introImage="/images/scaffold-project-work.jpeg"
      introImageAlt="Industrial scaffolding and maintenance work"
      capabilitiesEyebrow="Our Capabilities"
      capabilitiesTitle="Fabric Maintenance Support"
      capabilitiesDescription="Maintenance activities can be adapted to the condition of the facility and the requirements of each project."
      capabilities={[
        {
          number: "01",
          title: "Surface Preparation",
          description:
            "Preparation of industrial surfaces before protective coating and maintenance activities.",
        },
        {
          number: "02",
          title: "Protective Coating",
          description:
            "Support for applying protective coating systems to suitable industrial surfaces.",
        },
        {
          number: "03",
          title: "Corrosion Protection",
          description:
            "Maintenance support aimed at protecting exposed structures and components against corrosion.",
        },
        {
          number: "04",
          title: "Structural Maintenance",
          description:
            "Maintenance support for industrial structures and facility components.",
        },
        {
          number: "05",
          title: "Scaffolding Support",
          description:
            "Access support for maintenance activities in elevated and difficult-to-reach areas.",
        },
        {
          number: "06",
          title: "Surface Repair",
          description:
            "Support for addressing damaged or deteriorated industrial surfaces.",
        },
      ]}
      applicationsEyebrow="Where We Work"
      applicationsTitle="Industrial Applications"
      applicationsDescription="Fabric maintenance support for different industrial operating environments."
      applications={[
        "Offshore Platforms",
        "Oil and Gas Facilities",
        "Storage Tanks",
        "Industrial Plants",
        "Marine Structures",
        "Pipelines and Infrastructure",
      ]}
      relatedTitle="Explore Related Services"
      relatedDescription="Explore other services that support industrial asset performance."
      relatedLinks={[
        {
          title: "Mechanical Services",
          description: "Mechanical equipment and maintenance support.",
          href: "/services/mechanical",
        },
        {
          title: "Rope Access Services",
          description: "Specialized access for elevated work locations.",
          href: "/services/rope-access",
        },
        {
          title: "Asset Integrity & Inspection",
          description: "Inspection and asset integrity services.",
          href: "/services/asset-integrity",
        },
      ]}
      finalTitle="Planning a Fabric Maintenance Project?"
      finalDescription="Contact our team to discuss your facility maintenance requirements."
    />
  );
}
