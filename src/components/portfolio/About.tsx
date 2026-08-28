import { GraduationCap, Code2, Rocket } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./Section";
import profileAsset from "@/assets/profile.jpg.asset.json";

const profileImage = profileAsset.url;

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="about me" title="Practical learning, backend engineering, and steady improvement." />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="glass rounded-3xl p-5">
            <img
              src={profileImage}
              alt="Portrait of Krushna Chandra Nayak"
              loading="lazy"
              width={768}
              height={768}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="mt-5 space-y-1">
              <p className="font-semibold">{profile.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{profile.identity}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <p className="text-foreground/80">{profile.bio}</p>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 text-cyan" />
              <div>
                <p className="font-medium">{profile.education.degree}</p>
                <p className="text-sm text-muted-foreground">{profile.education.institute}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {profile.education.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border p-5">
              <Code2 size={18} className="text-primary" />
              <p className="mt-3 font-medium">Development focus</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Backend systems, REST APIs, databases, authentication, and full-stack MERN
                applications.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-5">
              <Rocket size={18} className="text-violet" />
              <p className="mt-3 font-medium">Career interests</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Growing through real-world projects, DSA and problem solving, deployment, cloud
                technologies, and DevOps.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
