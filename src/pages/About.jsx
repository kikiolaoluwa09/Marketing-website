import React from "react";
import { Link } from "react-router-dom";
import plansImage from "../assets/Plans.png";
import chatScreenImage from "../assets/Chat screen (1).png";

/* ---- SVG Icons ---- */
const HeartHandIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LayersIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ---- Data ---- */
const values = [
  {
    icon: <HeartHandIcon />,
    title: "Empathy first",
    description:
      "Every feature, every reply, every pixel is measured by one question: does it feel caring?",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Trust by default",
    description:
      "Encryption, transparency reports, and delete-anytime controls make privacy tangible.",
  },
  {
    icon: <EyeIcon />,
    title: "Radical transparency",
    description:
      "No dark patterns, no hidden data use. You always know what CuraAi sees and stores.",
  },
  {
    icon: <GlobeIcon />,
    title: "Accessible to all",
    description:
      "Designed for every bandwidth, every device, and every level of digital literacy.",
  },
  {
    icon: <LayersIcon />,
    title: "Gentle complexity",
    description:
      "Powerful AI under the hood, but only as much as you need surfaces at a time.",
  },
  {
    icon: <UsersIcon />,
    title: "Community shaped",
    description:
      "Every major feature is shaped by early companions through feedback loops and open labs.",
  },
];

const achievements = [
  { value: "18K+", label: "Daily reflections" },
  { value: "12", label: "Countries reached" },
  { value: "4.9", label: "Avg. rating" },
  { value: "220K", label: "Care notes saved" },
];

const timeline = [
  {
    year: "2024",
    event: "Alash Studios founded with a mission to build humane technology.",
  },
  {
    year: "2024",
    event: "CuraAi concept validated through 200+ user interviews.",
  },
  { year: "2025", event: "Private beta launched with 500 early companions." },
  { year: "2025", event: "Contextual memory and audio replies shipped." },
  {
    year: "2026",
    event: "Public waitlist opened. Studio tier for care teams announced.",
  },
];

function About() {
  return (
    <div className="space-y-28 pb-8 pt-20">
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              About CuraAi
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
              Built with the tenderness of an{" "}
              <span className="text-[color:var(--primary)]">
                independent studio
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              CuraAi is a product of Alash Studios. The Latin root
              &ldquo;Cura&rdquo; means to care &mdash; and that is not just our
              name, it is our product requirement.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex  items-center gap-12 lg:flex-row">
            <div className="flex-1 space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Who We Are
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
                A small team with a big belief: technology should feel human.
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                We are designers, engineers, and researchers who believe
                wellbeing technology should be as calm as the conversations it
                facilitates. CuraAi operates under Alash Studios yet feels
                boutique, like a limited-edition print &mdash; intentional in
                every detail.
              </p>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Our team blends expertise in natural language processing,
                clinical psychology consultation, and editorial design to create
                an AI companion that is both powerful and gentle.
              </p>
            </div>
            {/* <div className="flex-1">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-lg">
                <img
                  src={plansImage}
                  alt="CuraAi planning boards"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-14 sm:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Our Impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              Our collective achievements
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.label} className="text-center">
                <p className="text-4xl font-semibold text-[color:var(--primary)]">
                  {a.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
            <div className="flex-1 space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
                Our Mission
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
                Companionship, not clinical advice.
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                CuraAi does not replace therapists. Instead, it offers a warm,
                reflective space between sessions &mdash; a place to process
                thoughts, capture moods, and receive gentle prompts that help
                you understand yourself better.
              </p>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                We empower individuals through accessible, emotionally
                intelligent technology. We believe in promoting self-reflection,
                simplifying emotional check-ins, and enhancing wellness through
                thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Our Values
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              Principles that guide every feature
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--primary)] transition group-hover:bg-[color:var(--primary)] group-hover:text-[color:var(--on-primary)]">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[color:var(--text)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {v.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              From idea to invitation
            </h2>
          </div>
          <div className="mt-12 space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                {/* vertical line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)] text-xs font-bold text-[color:var(--on-primary)]">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[color:var(--border)]" />
                  )}
                </div>
                <div className="pb-2 pt-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--text)]">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[color:var(--primary)] px-6 py-16 text-center text-[color:var(--on-primary)] shadow-xl sm:px-12 lg:py-20">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Be part of a more human internet.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
            CuraAi is now onboarding early companions. Share feedback, shape
            features, and help us keep the product caring, light, and
            accessible.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--on-primary)] px-7 py-3.5 text-sm font-semibold text-[color:var(--primary)] transition hover:opacity-90"
            >
              Request Early Access
              <ArrowRightIcon />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-[color:var(--on-primary)] transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
