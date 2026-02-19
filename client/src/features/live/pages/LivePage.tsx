import { Section } from '../../../components/common/Section'

export function LivePage() {
  return (
    <Section
      title="Live Now"
      description="Current live streams and upcoming live events."
    >
      <div className="grid">
        <article className="card">Live Channel A</article>
        <article className="card">Live Channel B</article>
        <article className="card">Live Channel C</article>
      </div>
    </Section>
  )
}
