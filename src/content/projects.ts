import type { ProjectsContent } from "@/types/content";

export const projects: ProjectsContent = {
  comingSoon: false,
  note: "Personal projects are in progress and will land here once they're worth reading about. In the meantime, the Nerdio work above is the best picture of what I build.",
  items: [
    {
      name: "Azurely",
      summary:
        "A read-only MCP server that lets Claude answer identity and access questions across Microsoft Entra ID and Azure — who holds a role, what someone can activate through PIM, what changed in the last two weeks. Read-only is enforced mechanically: a CI gate greps for mutating Graph/ARM calls and fails the build if one appears.",
      tech: [
        "TypeScript",
        "Node.js",
        "MCP SDK",
        "Microsoft Graph",
        "Azure Resource Manager",
        "Zod",
        "Jest",
        "Docker",
      ],
      links: [{ label: "GitHub", href: "https://github.com/Cole-Murray/Azurely" }],
      logoSrc: "/images/brands/azure.svg",
      logoAlt: "Azure logo",
    },
    {
      name: "First10",
      summary:
        "A Garmin Connect IQ nap alarm that won't let you snooze back to sleep — it reads steps, sustained motion, and heart-rate rise off the watch to score whether you're actually up before it will dismiss.",
      tech: ["Monkey C", "Garmin Connect IQ", "Embedded Sensors"],
      links: [{ label: "GitHub", href: "https://github.com/Cole-Murray/First10" }],
      iconSlug: "garmin",
    },
  ],
};
