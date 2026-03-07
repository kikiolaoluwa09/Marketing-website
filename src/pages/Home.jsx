import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Chatscreen.png";
// import onboardingImage from "../assets/Onboarding 3 (1).png";
import  chatImage from "../assets/Chat.png";
// import successImage from "../assets/Success Screen.png";

/* ---- SVG Icon Components ---- */
const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    <path d="M10 21h4" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01" />
    <path d="M12 10h.01" />
    <path d="M16 10h.01" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const MoonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const features = [
  {
    icon: <HeartIcon />,
    title: "Emotionally aware responses",
    description:
      "CuraAi detects tonal shifts \u2014 calm, tense, or hopeful \u2014 and mirrors how you feel with gentle, human-like replies.",
    imageAlt: "CuraAi chat showing emotion-aware response",
  },
  {
    icon: <BrainIcon />,
    title: "Opt-in contextual memory",
    description:
      "Choose what CuraAi remembers. Bookmark preferences and milestones so conversations feel continuous, never invasive.",
    imageAlt: "CuraAi onboarding screen for memory preferences",
  },
  {
    icon: <ShieldIcon />,
    title: "Privacy you can verify",
    description:
      "End-to-end encryption, transparent data reports, and one-click deletion. Your story stays yours \u2014 always.",
    imageAlt: "CuraAi privacy success confirmation",
  },
];

const whyCuraAi = [
  {
    icon: <ChatBubbleIcon />,
    title: "Empathetic dialogue",
    description: "Language models tuned for softness, validation, and practical next steps when you need them most.",
  },
  {
    icon: <SparkleIcon />,
    title: "Reflective prompts",
    description: "Gentle daily check-ins and journaling nudges that feel like chatting with a trusted friend.",
  },
  {
    icon: <LockIcon />,
    title: "Delete-anytime controls",
    description: "One-click export or permanent deletion. You decide how long your data lives.",
  },
  {
    icon: <MoonIcon />,
    title: "Calm, human-centered UI",
    description: "Editorial whitespace, legible typography, and gentle colour blocking keep the interface light.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your companion",
    description: "Sign up in seconds. No lengthy forms \u2014 just a name and how you'd like to be greeted.",
  },
  {
    number: "02",
    title: "Start a conversation",
    description: "Talk about your day, reflect on a feeling, or ask for a gentle prompt. CuraAi listens first.",
  },
  {
    number: "03",
    title: "Grow at your pace",
    description: "Unlock memory, audio, and deeper features only when you're ready. No pressure, ever.",
  },
];

const testimonials = [
  {
    quote: "CuraAi feels like reading a thoughtfully annotated journal of my emotions \u2014 responsive, calm, and never overwhelming.",
    author: "Amaka O.",
    role: "Beta Companion",
  },
  {
    quote: "The interface is as soothing as the replies. It's the only AI companion that remembers context without feeling invasive.",
    author: "Noah T.",
    role: "Product Researcher",
  },
  {
    quote: "I finally have a space where I can process my thoughts without judgement. CuraAi just gets it.",
    author: "Lina K.",
    role: "Early Access User",
  },
];

const stats = [
  { value: "18K+", label: "Daily reflections" },
  { value: "220K", label: "Care notes saved" },
  { value: "1.2s", label: "Average response" },
  { value: "99.9%", label: "Uptime" },
];

/* ---- Component ---- */
function Home() {
  return (
    <div className="space-y-28 pb-8 pt-20">
      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="none"><circle cx="12" cy="12" r="6" /></svg>
            Now onboarding early companions
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            A lighter way to{" "}
            <span className="text-[color:var(--primary)]">feel heard</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            CuraAi is your emotionally aware AI companion — designed to listen
            with care, respond with empathy, and respect your privacy at every
            step.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--primary)] px-7 py-3.5 text-sm font-semibold text-[color:var(--on-primary)] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Join the Waitlist
              <ArrowRightIcon />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-7 py-3.5 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--surface)]"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto mt-16 max-w-5xl flex justify-center gap-10">
     
            <img
              src={heroImage}
              alt="CuraAi chat interface"
              className="h-[100%] w-auto rounded-2xl object-cover"
            />
            
            <img
              src={chatImage}
              alt="CuraAi chat interface"
              className="hidden md:block h-[100%] w-auto rounded-2xl object-cover"
            />
            

        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-center transition hover:shadow-md">
              <p className="text-2xl font-semibold text-[color:var(--text)] sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES (alternating like TrediBooks) */}
      <section id="features" className="px-4 sm:px-6 lg:px-8x">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Core Features</p>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl lg:text-5xl">
            Essential features your wellbeing deserves
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-20">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`flex flex-col items-center lg:flex-row py-0 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-5 lg:max-w-md p-5 border border-(--border) rounded-lg bg-(--surface) transition hover:drop-shadow-2xl"> 
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[c4olor:var(--surface-2)] text-[color:var(--primary)]">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
                  {feat.title}
                </h3>
                <p className="text-base leading-relaxed text-[color:var(--muted)]">
                  {feat.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* WHY CURAAI */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Why CuraAi</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl lg:text-5xl">
              Built around how you feel
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {whyCuraAi.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--primary)] transition group-hover:bg-[color:var(--primary)] group-hover:text-[color:var(--on-primary)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[color:var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - 3 Steps */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-16 sm:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">How It Works</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              Get started in just 3 simple steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center lg:text-left">
                <span className="text-5xl font-bold text-[color:var(--primary)] opacity-20">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[color:var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Testimonials</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              Hear what people are saying
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <QuoteIcon />
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-bold text-[color:var(--on-primary)]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--text)]">{t.author}</p>
                    <p className="text-xs text-[color:var(--muted)]">{t.role}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-(--primary) px-6 py-16 text-center text-(--on-primary) shadow-xl sm:px-12 lg:py-20">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Take care of your wellbeing today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
            Join the waitlist to receive early access, reflective journaling prompts, and private walkthroughs — no spam, ever.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--on-primary)] px-7 py-3.5 text-sm font-semibold text-[color:var(--primary)] transition hover:opacity-90"
            >
              Join Waitlist
              <ArrowRightIcon />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-[color:var(--on-primary)] transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
