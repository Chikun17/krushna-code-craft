import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="font-mono text-xs text-muted-foreground">{profile.identity}</p>
        </div>

        <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {[
            { href: profile.github, label: "GitHub", Icon: Github },
            { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
