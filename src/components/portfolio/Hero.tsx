import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileImage from "@/assets/profile-dark.jpg";



export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
            {profile.status}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
            <span className="mt-2 block text-gradient">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/80">{profile.tagline}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-6 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="glass relative float-slow rounded-3xl p-5">
            <img
              src={profileImage}
              alt="Portrait of Krushna Chandra Nayak"
              width={768}
              height={768}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>backend · apis · devops</span>
              <span className="text-cyan">ITER, SOA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
