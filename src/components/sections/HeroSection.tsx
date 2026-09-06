import { ExternalLink } from "@/components/ui/ExternalLink";
import { RotatingNoun } from "@/components/ui/RotatingNoun";
import { SpinningSolid } from "@/components/ui/SpinningSolid";
import { site } from "@/content";
import { SECTION_IDS } from "@/lib/constants";
import { getBrandMark } from "@/lib/icons";

/*
 * Email and the résumé are already buttons above, so the corner only carries
 * the two profiles worth browsing. Both marks are drawn in currentColor rather
 * than their brand colours, so they read as chrome alongside the nav.
 */
const HERO_SOCIALS = ["linkedin", "github"];

export function HeroSection() {
  const resume = site.socials.find((social) => social.platform === "resume");
  const socials = HERO_SOCIALS.flatMap((platform) => {
    const social = site.socials.find((item) => item.platform === platform);
    const mark = getBrandMark(platform);
    if (!social || !mark) return [];

    return [{ platform, label: social.label, href: social.href, path: mark.path }];
  });

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-svh scroll-mt-20 flex-col overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_27rem]">
        <div className="flex flex-col justify-center">
          <p className="eyebrow items-start">
            <span
              className="mt-[0.42em] size-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {site.location}
          </p>

          <h1 className="text-gradient-fg mt-6 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.055em] sm:text-7xl">
            {site.heroTitle}
          </h1>

          <p className="mt-6 max-w-3xl font-display text-2xl leading-tight font-medium tracking-[-0.025em] text-fg md:text-3xl">
            {site.headline}
          </p>

          <p className="mt-4 font-display text-xl leading-tight font-medium tracking-[-0.025em] text-muted sm:text-2xl">
            <span aria-hidden="true">I&apos;m </span>
            <RotatingNoun className="text-accent" nouns={site.heroNouns} />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`#${SECTION_IDS.featured}`}>
              View experience
            </a>
            <a className="btn btn-ghost" href={`#${SECTION_IDS.contact}`}>
              Get in touch
            </a>
            {resume ? (
              <ExternalLink
                className="btn btn-ghost"
                download={resume.download}
                href={resume.href}
              >
                {resume.label}
              </ExternalLink>
            ) : null}
          </div>
        </div>

        {/* Decorative, and the narrow layout is already tall — desktop only. */}
        <SpinningSolid className="hidden lg:block" />
      </div>

      {/* Bottom corners, sharing the nav chrome's insets so all four align. */}
      <a
        href={`#${SECTION_IDS.intro}`}
        aria-label="Scroll to the next section"
        className="absolute bottom-5 left-5 flex flex-col items-center -space-y-1 text-accent transition-colors hover:text-fg sm:bottom-7 sm:left-8"
      >
        {[0, 1, 2].map((index) => (
          <svg
            key={index}
            aria-hidden="true"
            viewBox="0 0 12 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="scroll-chevron h-2.5 w-4"
          >
            <path d="M1 1.5 6 6.5 11 1.5" />
          </svg>
        ))}
      </a>

      <ul className="absolute right-5 bottom-5 flex items-center gap-4 sm:right-8 sm:bottom-7">
        {socials.map((social) => (
          <li key={social.platform}>
            <ExternalLink
              href={social.href}
              aria-label={social.label}
              className="block text-faint transition-colors hover:text-fg"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d={social.path} />
              </svg>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
