import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, animate, motion } from "framer-motion";
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
  { value: 18, suffix: "K+", label: "Daily reflections", progress: 78 },
  { value: 220, suffix: "K", label: "Care notes saved", progress: 86 },
  { value: 1.2, suffix: "s", label: "Average response", progress: 64, decimals: 1 },
  { value: 99.9, suffix: "%", label: "Uptime", progress: 99, decimals: 1 },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function CountUp({ value, suffix = "", decimals = 0 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---- Component ---- */
function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [chatLoaded, setChatLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const ringGeometry = useMemo(() => {
    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    return { radius, circumference };
  }, []);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <motion.div
      className="relative space-y-28 overflow-hidden pb-8 pt-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[32rem] h-80 w-80 rounded-full bg-[color:var(--primary)]/10 blur-3xl" />

      {/* HERO */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <motion.span variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)] backdrop-blur-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="none"><circle cx="12" cy="12" r="6" /></svg>
            Now onboarding early companions
          </motion.span>

          <motion.h1 variants={itemVariants} className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            A lighter way to{" "}
            <span className="text-[color:var(--primary)]">feel heard</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
            CuraAi is your emotionally aware AI companion — designed to listen
            with care, respond with empathy, and respect your privacy at every
            step.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--primary)] px-7 py-3.5 text-sm font-semibold text-[color:var(--on-primary)] shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Join the Waitlist
              <ArrowRightIcon />
            </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-7 py-3.5 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--surface)]"
            >
              See how it works
            </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div variants={itemVariants} className="mx-auto mt-16 flex max-w-5xl justify-center gap-10">
          <div className="relative min-h-[220px] min-w-[240px]">
            {!heroLoaded && <div className="absolute inset-0 animate-pulse rounded-2xl bg-[color:var(--surface-2)]" />}
            <motion.img
              src={heroImage}
              alt="CuraAi chat interface"
              onLoad={() => setHeroLoaded(true)}
              className={`h-[100%] w-auto rounded-2xl object-cover shadow-xl transition-opacity duration-500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
              whileHover={{ rotate: -1.2, y: -3 }}
            />
          </div>

          <div className="relative hidden min-h-[220px] min-w-[240px] md:block">
            {!chatLoaded && <div className="absolute inset-0 animate-pulse rounded-2xl bg-[color:var(--surface-2)]" />}
            <motion.img
              src={chatImage}
              alt="CuraAi chat interface"
              onLoad={() => setChatLoaded(true)}
              className={`h-[100%] w-auto rounded-2xl object-cover shadow-xl transition-opacity duration-500 ${chatLoaded ? "opacity-100" : "opacity-0"}`}
              whileHover={{ rotate: 1.2, y: -3 }}
            />
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => {
            const progressOffset = ringGeometry.circumference - (s.progress / 100) * ringGeometry.circumference;

            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.09, duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -4, rotateX: 3, scale: 1.02 }}
                className="rounded-2xl border border-white/55 bg-white/65 p-5 text-center shadow-sm backdrop-blur-md"
              >
                <div className="relative mx-auto mb-3 h-14 w-14">
                  <svg className="h-14 w-14 -rotate-90" viewBox="0 0 60 60" aria-hidden="true">
                    <circle cx="30" cy="30" r={ringGeometry.radius} stroke="currentColor" strokeWidth="5" className="text-[color:var(--border)]" fill="transparent" />
                    <motion.circle
                      cx="30"
                      cy="30"
                      r={ringGeometry.radius}
                      stroke="currentColor"
                      strokeWidth="5"
                      className="text-[color:var(--primary)]"
                      fill="transparent"
                      strokeDasharray={ringGeometry.circumference}
                      initial={{ strokeDashoffset: ringGeometry.circumference }}
                      whileInView={{ strokeDashoffset: progressOffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-[color:var(--text)] sm:text-3xl">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* FEATURES (alternating like TrediBooks) */}
      <motion.section
        id="features"
        className="px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Core Features</p>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl lg:text-5xl">
            Essential features your wellbeing deserves
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-20">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={itemVariants}
              className={`flex flex-col items-center lg:flex-row py-0 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                whileHover={{ y: -6, rotate: -0.4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group flex-1 space-y-5 rounded-2xl border border-white/60 bg-white/65 p-6 shadow-sm backdrop-blur-md lg:max-w-md"
              >
                <motion.div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--primary)]"
                  whileHover={{ scale: 1.1, rotate: 8 }}
                >
                  {feat.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">
                  {feat.title}
                </h3>
                <p className="text-base leading-relaxed text-[color:var(--muted)]">
                  {feat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
            {whyCuraAi.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-3xl border border-white/55 bg-white/65 p-7 shadow-sm backdrop-blur-md"
              >
                <motion.div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--primary)] transition group-hover:bg-[color:var(--primary)] group-hover:text-[color:var(--on-primary)]"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-semibold tracking-tight text-[color:var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </p>
              </motion.article>
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

          <div className="mt-12 lg:hidden">
            <div className="relative overflow-hidden rounded-3xl border border-white/55 bg-white/70 p-7 shadow-sm backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testimonials[activeTestimonial].author}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <QuoteIcon />
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-bold text-[color:var(--on-primary)]">
                      {testimonials[activeTestimonial].author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--text)]">{testimonials[activeTestimonial].author}</p>
                      <p className="text-xs text-[color:var(--muted)]">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.author}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Show testimonial ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${activeTestimonial === i ? "w-7 bg-[color:var(--primary)]" : "w-2.5 bg-[color:var(--border)]"}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="rounded-xl border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--surface-2)]"
                  >
                    Prev
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="rounded-xl border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--surface-2)]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl border border-white/55 bg-white/70 p-7 shadow-sm backdrop-blur-md"
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
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[color:var(--primary)] px-6 py-16 text-center text-[color:var(--on-primary)] shadow-xl sm:px-12 lg:py-20"
        >
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
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home;
