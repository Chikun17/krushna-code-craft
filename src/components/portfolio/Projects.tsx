import { useState } from "react";
import { Github, ExternalLink, Check } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ProjectCard({ project, onDetails }: { project: Project; onDetails: () => void }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative grid h-44 place-items-center overflow-hidden border-b border-border grid-bg">
        <div
          aria-hidden
          className="absolute -bottom-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-50"
          style={{ background: "var(--gradient-accent)" }}
        />
        {project.images?.[0] ? (
          <img
            src={project.images[0].src}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <span className="relative font-mono text-5xl font-bold text-foreground/15">
            {project.index}
          </span>
        )}
      </div>


      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[11px] text-foreground/85"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm transition-colors hover:bg-accent"
            >
              <Github size={15} /> GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm transition-colors hover:bg-accent"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-border px-3.5 py-2 text-sm text-muted-foreground">
              <ExternalLink size={15} /> Demo soon
            </span>
          )}
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="projects"
        title="Work that shows how I build."
        subtitle="Links, screenshots, and live demos will be added as each project is published."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} onDetails={() => setActive(project)} />
          </Reveal>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="glass max-w-lg">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{active.title}</DialogTitle>
                <DialogDescription>{active.description}</DialogDescription>
              </DialogHeader>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                  Key features
                </p>
                <ul className="mt-3 space-y-2">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check size={15} className="mt-0.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
