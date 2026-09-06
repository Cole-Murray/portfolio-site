import Image from "next/image";

import { ContributionGraph } from "@/components/ui/ContributionGraph";
import { EmphasizedText } from "@/components/ui/EmphasizedText";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { RaceCountdown } from "@/components/ui/RaceCountdown";
import { Section } from "@/components/ui/Section";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { about } from "@/content";
import { SECTION_IDS } from "@/lib/constants";
import { getGitHubContributions, githubStatLabels } from "@/lib/github";

export async function IntroBandSection() {
  const { headshot, interests, race } = about;
  const github = await getGitHubContributions();
  const stats = githubStatLabels(github);
  const levels = github.days.map((day) => day.level);

  return (
    <Section
      id={SECTION_IDS.intro}
      index="02"
      label="intro"
      /*
       * Tight top padding on purpose: the hero is a full viewport, so this band
       * sits just past the fold — hidden on load, but the cards break the edge
       * of the screen as soon as the visitor scrolls at all.
       */
      className="pt-10 md:pt-12"
      /* Runs wider than the other sections on purpose — this band is the one
         place three panels have to share a row without feeling cramped. */
      innerClassName="max-w-[78rem]"
      headerClassName="mb-8 md:mb-10"
    >
      <div className="grid min-w-0 gap-5 lg:grid-cols-[1.55fr_1fr] lg:grid-rows-[auto_auto]">
        <TerminalWindow
          title="cole@portfolio: ~"
          className="reveal min-w-0 lg:row-span-2"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-7 sm:flex-row sm:gap-8">
            {/*
             * Beside the copy the portrait stretches to the full height of the
             * terminal body, which is otherwise dead space — the card is only
             * this tall because it spans both rows of the band on large screens.
             */}
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-lg sm:h-auto sm:w-[230px] sm:self-stretch lg:w-[270px]">
              <Image
                src={headshot.src}
                alt={headshot.alt}
                fill
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 230px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-7">
              <div>
                <p className="flex items-center gap-2 text-xs text-fg">
                  <span className="text-accent">&gt;</span>
                  <span>whoami</span>
                  <span
                    aria-hidden="true"
                    className="animate-caret h-4 w-px bg-accent"
                  />
                </p>
                {/* Snapshot only — the About section carries the full bio. */}
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  <EmphasizedText>{about.bio[0]}</EmphasizedText>
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs text-fg">
                  <span className="text-accent">&gt;</span>
                  <span>cat interests.txt</span>
                </p>
                <ul className="mt-3 flex list-none flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="group flex items-center gap-2 rounded-md bg-white/[0.045] px-2.5 py-1.5 font-mono text-[0.6875rem] leading-none text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-colors hover:bg-white/[0.075] hover:text-fg"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 rounded-full bg-accent/65 transition-colors group-hover:bg-accent"
                      />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </TerminalWindow>

        <article className="surface-card reveal min-w-0 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow">GitHub contributions</p>
            <ExternalLink
              href={github.profileUrl}
              className="link-underline shrink-0 font-mono text-xs"
            >
              {github.username}
            </ExternalLink>
          </div>

          <ContributionGraph
            className="mt-5"
            levels={github.placeholder ? undefined : levels}
            weeks={github.weeks}
          />

          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="text-[10px] leading-snug text-faint">
                  {stat.label}
                </dt>
                <dd
                  className={
                    github.placeholder
                      ? "mt-1 font-display text-base text-faint"
                      : "mt-1 font-display text-base text-fg"
                  }
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-3 font-mono text-[10px] leading-relaxed text-faint/80">
            {github.note}
          </p>
        </article>

        <article className="surface-card reveal flex min-w-0 flex-col overflow-hidden p-6 sm:p-7">
          <div className="flex min-w-0 items-center gap-4">
            <Image
              src={race.logoSrc}
              alt={race.logoAlt}
              width={513}
              height={700}
              className="h-12 w-auto shrink-0 sm:h-14"
            />
            <div className="min-w-0">
              <p className="font-display text-xl leading-tight font-semibold text-fg sm:text-2xl">
                {race.name}
              </p>
              <p className="mt-2 font-mono text-[10px] leading-relaxed uppercase tracking-[0.12em] text-faint">
                {race.location} ·{" "}
                <time dateTime={race.date}>{race.displayDate}</time>
              </p>
            </div>
          </div>
          <RaceCountdown targetDate={race.date} className="mt-5 pt-1" />
        </article>
      </div>
    </Section>
  );
}
