import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-prose space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">
        The page you’re looking for doesn’t exist. Use the navigation above, or
        go back home.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-xl bg-[color:var(--primary)] px-5 py-3 text-sm font-medium text-[color:var(--on-primary)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
      >
        Back to Home
      </Link>
    </section>
  )
}
