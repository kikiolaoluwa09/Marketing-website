import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const VolumeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9.01" y2="6" />
    <line x1="15" y1="6" x2="15.01" y2="6" />
    <line x1="9" y1="10" x2="9.01" y2="10" />
    <line x1="15" y1="10" x2="15.01" y2="10" />
    <line x1="9" y1="14" x2="9.01" y2="14" />
    <line x1="15" y1="14" x2="15.01" y2="14" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ---- Data ---- */
const tiers = [
  {
    name: "Companion",
    icon: <UserIcon />,
    monthlyPrice: "0 NGN",
    yearlyPrice: "0 NGN",
    cadence: "Free forever",
    tagline: "Start with gentle daily guidance.",
    features: [
      "3 chats per day",
      "Sentiment snapshots",
      "Weekly email recap",
      "Community access",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Steady",
    icon: <ChatIcon />,
    monthlyPrice: "9,500 NGN",
    yearlyPrice: "144,000 NGN",
    cadence: "per month",
    tagline: "Unlimited chats with contextual memory.",
    features: [
      "Unlimited chats + audio",
      "Opt-in contextual memory",
      "Priority care notes",
      "Guided offboarding",
      "Export anytime",
      "Personalised prompts",
    ],
    highlight: true,
    cta: "Start Steady",
  },
  {
    name: "Studio",
    icon: <BuildingIcon />,
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    cadence: "annual partnership",
    tagline: "Deploy CuraAi for care teams and creators.",
    features: [
      "Everything in Steady",
      "Team dashboards",
      "Brand-safe tone packs",
      "SLA-backed support",
      "Custom integrations",
      "Quarterly labs with Alash Studios",
    ],
    cta: "Contact Team",
  },
];

const faqs = [
  {
    question: "Can I export or delete my conversations?",
    answer:
      "Yes. Every plan includes one-click export and deletion so you always control your story.",
  },
  {
    question: "Does CuraAi replace a therapist?",
    answer:
      "No. CuraAi offers companionship and reflective prompts, not clinical advice. We encourage professional support alongside CuraAi.",
  },
  {
    question: "What happens when I exceed the free tier limit?",
    answer:
      "You will see a gentle nudge to continue tomorrow or upgrade to Steady. We never cut a conversation mid-thought.",
  },
  {
    question: "Is my data encrypted?",
    answer:
      "Yes. All conversations use end-to-end encryption. We publish quarterly transparency reports so you can verify our practices.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Absolutely. Upgrade, downgrade, or cancel with one click. No lock-ins, no hidden fees.",
  },
  {
    question: "How does the Studio tier work?",
    answer:
      "Studio is designed for care teams, creators, and organisations. Contact us for a tailored partnership including SLA support and custom tone packs.",
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="relative space-y-16 pb-8 pt-20">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[color:var(--accent)]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-[40rem] h-80 w-80 rounded-full bg-[color:var(--primary)]/8 blur-3xl" />
      
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">Pricing</p>
          <h1 className="mt-4 text-balance text-2xl font-bold tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            Choose the pace that{" "}
            <span className="text-(--primary)">supports you</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--muted) sm:text-lg">
            All tiers use the same empathetic language models and privacy framework.
            Upgrade only when you need more continuity or team workflows.
          </p>

          
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !annual
                  ? "bg-[color:var(--primary)] text-[color:var(--on-primary)] shadow-sm"
                  : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                annual
                  ? "bg-[color:var(--primary)] text-[color:var(--on-primary)] shadow-sm"
                  : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
              }`}
            >
              Yearly
            </button>
            {annual && (
              <span className="ml-1 rounded-full bg-[color:var(--surface-2)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                Save 35%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Mobile: Horizontal Scroll with Peek | Desktop: Grid */}
          <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide sm:px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:snap-none lg:gap-6">
            {tiers.map((tier, i) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative flex min-w-[80vw] flex-col rounded-3xl border bg-white/65 p-7 shadow-sm backdrop-blur-md snap-center sm:min-w-[65vw] lg:min-w-0 ${
                  tier.highlight
                    ? "border-[color:var(--primary)] ring-2 ring-[color:var(--primary)]"
                    : "border-white/50"
                }`}
              >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--primary)] px-4 py-1 text-xs font-semibold text-[color:var(--on-primary)]">
                  Popular
                </span>
              )}

              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-[color:var(--primary)]"
                >
                  {tier.icon}
                </motion.div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[color:var(--muted)]">
                  {tier.name}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-[color:var(--text)]">
                  {annual ? tier.yearlyPrice : tier.monthlyPrice}
                </span>
                {tier.monthlyPrice !== "Custom" && (
                  <span className="text-sm text-[color:var(--muted)]">{tier.cadence}</span>
                )}
              </div>

              <p className="mt-2 text-sm text-[color:var(--muted)]">{tier.tagline}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[color:var(--muted)]">
                    <span className="mt-0.5 shrink-0 text-[color:var(--primary)]">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 w-full rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-[color:var(--primary)] text-[color:var(--on-primary)] shadow-md hover:shadow-lg"
                    : "border border-[color:var(--border)] text-[color:var(--text)] hover:bg-[color:var(--surface-2)]"
                }`}
              >
                {tier.cta}
              </motion.button>
            </motion.article>
          ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
              Got questions? We've got answers
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="rounded-2xl border border-white/50 bg-white/65 shadow-sm backdrop-blur-md"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[color:var(--text)]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-[color:var(--muted)] transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[color:var(--primary)] px-6 py-16 text-center text-[color:var(--on-primary)] shadow-xl sm:px-12 lg:py-20"
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to feel supported?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
            Start free and upgrade at your own pace. No credit card required for the Companion plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--on-primary)] px-7 py-3.5 text-sm font-semibold text-[color:var(--primary)] transition hover:opacity-90"
            >
              Get Started Free
              <ArrowRightIcon />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-[color:var(--on-primary)] transition hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Pricing;
