import {
  Server,
  Network,
  LayoutTemplate,
  Database,
  ShieldCheck,
  CloudCog,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";

const icons: Record<string, LucideIcon> = {
  Server,
  Network,
  LayoutTemplate,
  Database,
  ShieldCheck,
  CloudCog,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeading eyebrow="services" title="What I can help build." />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon] ?? Server;
          return (
            <Reveal key={service.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/70">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                  <Icon size={19} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
