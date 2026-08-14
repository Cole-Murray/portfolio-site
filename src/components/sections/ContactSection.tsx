import { site } from "@/content";
import type { SocialLink } from "@/types/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";

function socialAriaLabel(social: SocialLink): string {
  switch (social.platform) {
    case "email":
      return `Email ${social.value}`;
    case "linkedin":
      return `Visit LinkedIn profile ${social.value}`;
    case "github":
      return `Visit GitHub profile ${social.value}`;
    case "resume":
      return "Download résumé (PDF)";
  }
}

export function ContactSection() {
  const email = site.socials.find((social) => social.platform === "email");
  const secondary = site.socials.filter(
    (social) => social.platform !== "email",
  );

  return (
    <Section
      id={SECTION_IDS.contact}
      index="07"
      label="contact"
      headerClassName="max-w-4xl"
      title={
        <span className="block text-4xl leading-[1.05] md:text-6xl">
          {site.contact.headline}
        </span>
      }
      lead={site.contact.lead}
    >
      <div className="reveal mt-12 space-y-3">
        {email ? (
          <ExternalLink
            href={email.href}
            aria-label={socialAriaLabel(email)}
            className="group flex flex-col gap-1 rounded-xl bg-fg px-5 py-5 text-base-deep transition-colors hover:bg-white sm:px-7 sm:py-6"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-base-deep/60">
              {email.label}
            </span>
            <span className="text-lg font-medium sm:text-2xl">
              {email.value}
              <span
                aria-hidden="true"
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </ExternalLink>
        ) : null}

        <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-3">
          {secondary.map((social) => (
            <li key={social.platform}>
              <ExternalLink
                href={social.href}
                download={social.download}
                aria-label={socialAriaLabel(social)}
                className="surface-card group flex h-full w-full flex-col gap-1 rounded-xl border border-line px-4 py-4 transition-colors hover:border-line-strong sm:px-5 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-faint">
                  {social.label}
                </span>
                <span className="text-base font-medium text-fg sm:text-lg">
                  {social.value}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "ml-1.5 inline-block transition-transform",
                      social.download
                        ? "group-hover:translate-y-0.5"
                        : "group-hover:-translate-y-0.5",
                    )}
                  >
                    {social.download ? "↓" : "↗"}
                  </span>
                </span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
