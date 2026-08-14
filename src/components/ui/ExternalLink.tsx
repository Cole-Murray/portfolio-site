import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Serve the target as a download instead of navigating to it. */
  download?: boolean;
}

/**
 * Anchor that opens off-site destinations in a new tab with safe rel flags,
 * while keeping same-origin links (mailto, resume PDF) in place.
 */
export function ExternalLink({
  href,
  children,
  download,
  ...props
}: ExternalLinkProps) {
  const isOffSite = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(download ? { download: "" } : {})}
      {...(isOffSite ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
