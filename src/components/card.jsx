import React from 'react'

export default function card() {
  return (
    <>
          <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl bg-[color:var(--primary)] p-10 text-center text-[color:var(--on-primary)] shadow-lg">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">Be part of a more human internet</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
            CuraAi is now onboarding early companions. Share feedback, shape features, and help us keep the product caring, light, and accessible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-[color:var(--on-primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary)] transition hover:opacity-90">
              Request Early Access
            </button>
            <button className="rounded-2xl border border-white/60 px-6 py-3 text-sm font-semibold text-[color:var(--on-primary)] hover:bg-white/10">
              Download Press Kit
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
