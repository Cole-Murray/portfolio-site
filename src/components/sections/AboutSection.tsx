import { about } from "@/content";
import { Section } from "@/components/ui/Section";
import { SECTION_IDS } from "@/lib/constants";

export function AboutSection() {
  const { education } = about;

  return (
    <Section
      id={SECTION_IDS.about}
      index="06"
      label="about"
      title="About"
    >
      <div className="reveal mt-12 grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16 lg:gap-20">
        {/* The intro band's terminal card already opens with bio[0]. */}
        <div className="max-w-[62ch] space-y-5">
          {about.bio.slice(1).map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="space-y-10">
          <div>
            <dt className="eyebrow">Education</dt>
            <dd className="mt-4 space-y-1.5 text-fg">
              <p className="font-display text-lg">{education.degree}</p>
              <p>{education.school}</p>
              <p className="text-muted">{education.college}</p>
              {education.minor ? (
                <p className="text-muted">Minor: {education.minor}</p>
              ) : null}
              <p className="text-muted">{education.expected}</p>
              {education.gpa ? (
                <p className="text-muted">GPA {education.gpa}</p>
              ) : null}
            </dd>
          </div>

          <div>
            <dt className="eyebrow">Awards</dt>
            <dd className="mt-4">
              <ul className="flex list-none flex-wrap gap-2">
                {about.awards.map((award) => (
                  <li key={award} className="chip">
                    {award}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div>
            <dt className="eyebrow">Languages</dt>
            <dd className="mt-4 text-fg">{about.languages.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
