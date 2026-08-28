import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
        <span className="text-muted-foreground">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}>
      {children}
    </section>
  );
}
