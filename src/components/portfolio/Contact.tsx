import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      setSent(false);
      return;
    }

    setErrors({});
    setSent(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="contact"
        title="Let's Build Something Useful."
        subtitle="Have an idea, project, or opportunity? Let's connect and build something meaningful."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-3">
          {[
            { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { Icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
            { Icon: Github, label: "github.com/Chikun17", href: profile.github },
            { Icon: Linkedin, label: "linkedin.com/in/Krushna-ch", href: profile.linkedin },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass flex items-center gap-3 rounded-2xl px-5 py-4 text-sm transition-transform hover:-translate-y-0.5"
            >
              <Icon size={17} className="text-primary" />
              <span className="font-mono text-foreground/85">{label}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" className={field} placeholder="Your name" maxLength={100} />
              {errors.name ? (
                <p className="mt-2 text-xs text-destructive">{errors.name}</p>
              ) : null}
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={field}
                placeholder="you@example.com"
                maxLength={255}
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-destructive">{errors.email}</p>
              ) : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                className={field}
                placeholder="Tell me about your idea or opportunity…"
              />
              {errors.message ? (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              <Send size={16} /> Send message
            </button>

            {sent ? (
              <p className="mt-4 flex items-center gap-2 text-xs text-cyan" role="status">
                <CheckCircle2 size={14} /> Your email app should open with the message ready to
                send.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
