import { skillGroups } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="skills & technologies"
        title="The stack I build and learn with."
        subtitle="Technologies used across backend development, full-stack projects, and ongoing learning."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="glass h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                {group.title}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
