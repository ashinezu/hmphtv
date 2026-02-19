import { Section } from '../../../components/common/Section'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">Welcome to HMPTTV</p>
          <h1>Community-first streaming platform</h1>
          <p>
            Watch featured content, catch live sessions, and keep up with the latest
            programming in one place.
          </p>
        </div>
      </section>

      <Section title="Featured" description="Start with what’s trending on HMPTTV.">
        <div className="grid">
          <article className="card">Featured Stream 01</article>
          <article className="card">Featured Stream 02</article>
          <article className="card">Featured Stream 03</article>
        </div>
      </Section>
    </>
  )
}
