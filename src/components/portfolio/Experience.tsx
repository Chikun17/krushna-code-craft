import { timeline, dsaTopics } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="experience / journey" title="A developer journey in progress." />

      <div className="relative mt-12 pl-6 sm:pl-8">
        <span
          aria-hidden
          className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <Reveal key={item.role} delay={i * 100}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15 sm:-left-8"
                />
                <div className="glass rounded-2xl p-6">
                  <p className="font-mono text-xs text-cyan">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="dsa" className="mt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="dsa & problem solving"
          title="Beyond Building — I Solve Problems Too."
          subtitle="I work with C++ and practice data structures and algorithms to sharpen logical thinking, algorithm design, optimization, computational thinking, and overall problem-solving ability."
        />

        <Reveal delay={100}>
          <div className="glass mt-8 overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                practice/topics.cpp
              </span>
            </div>
            <div className="flex flex-wrap gap-2 p-5">
              {dsaTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground/85"
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="border-t border-border px-5 py-4 font-mono text-xs text-muted-foreground">
              {"// coding profile links can be added here"}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
