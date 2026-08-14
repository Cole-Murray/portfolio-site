import { Section } from "@/components/ui/Section";
import { about, otherRoles } from "@/content";
import { SECTION_IDS } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <Section
      id={SECTION_IDS.experience}
      index="04"
      label="earlier experience"
      title="Experience"
      headerClassName="mb-10 md:mb-14"
    >
      <div>
        {otherRoles.map((role) => (
          <article
            key={role.id}
            className="reveal grid gap-7 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <div>
              <h3 className="font-display text-xl leading-tight text-fg">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{role.org}</p>
              <div className="mt-4 space-y-1 font-mono text-[10px] uppercase tracking-widest text-faint">
                <p>
                  <time dateTime={role.startedOn}>{role.dates}</time>
                </p>
                <p>{role.location}</p>
              </div>
            </div>

            <ul className="max-w-[68ch] space-y-3">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] size-1 shrink-0 rounded-full bg-line-strong"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {about.activities.map((activity) => (
          <article
            key={activity.org}
            className="reveal grid gap-7 border-t border-line py-8 opacity-80 md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <div>
              <p className="eyebrow">Extracurricular / leadership</p>
              <h3 className="mt-3 font-display text-lg leading-tight text-fg">
                {activity.org}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {activity.detail}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-faint">
                {activity.dates}
              </p>
            </div>

            <ul className="max-w-[68ch] space-y-3">
              {activity.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] size-1 shrink-0 rounded-full bg-line-strong"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
