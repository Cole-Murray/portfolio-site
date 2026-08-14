import { site } from "@/content";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2 text-sm text-faint">
          <p>
            © {year} {site.name}
          </p>
          <p className="text-xs leading-relaxed">
            Built with Next.js, TypeScript, and Tailwind — planned with AI
            assistance, process documented in the repo.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex list-none flex-wrap gap-x-5 gap-y-2">
            {site.socials.map((social) => (
              <li key={social.platform}>
                <ExternalLink
                  href={social.href}
                  download={social.download}
                  className="link-underline text-sm text-faint hover:text-muted"
                >
                  {social.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
