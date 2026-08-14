import { projects, site } from "@/content";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { SECTION_IDS } from "@/lib/constants";

export function ProjectsSection() {
  const github = site.socials.find((social) => social.platform === "github");
  const hasProjects = projects.items.length > 0;

  return (
    <Section
      id={SECTION_IDS.projects}
      index="05"
      label="projects"
      title="Projects"
    >
      {hasProjects ? (
        <ul className="reveal mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <li key={project.name}>
              <article className="surface-card flex h-full flex-col p-6 md:p-7">
                <h3 className="font-display text-xl">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                {project.tech.length > 0 ? (
                  <ul className="mt-5 flex list-none flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {project.links.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        className="link-underline text-sm"
                      >
                        {link.label}
                        <span aria-hidden="true"> ↗</span>
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="reveal mt-12">
          <div className="surface-card border border-dashed border-line-strong p-8 md:p-10">
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {projects.note}
            </p>
            {github ? (
              <p className="mt-6">
                <ExternalLink
                  href={github.href}
                  className="link-underline"
                  aria-label={`Visit GitHub profile ${github.value}`}
                >
                  {github.label} — {github.value}
                  <span aria-hidden="true"> ↗</span>
                </ExternalLink>
              </p>
            ) : null}
          </div>
        </div>
      )}
    </Section>
  );
}
