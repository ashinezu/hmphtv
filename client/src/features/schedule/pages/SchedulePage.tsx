import { Section } from '../../../components/common/Section'

export function SchedulePage() {
  return (
    <Section title="Schedule" description="What’s coming up next on HMPTTV.">
      <div className="schedule-list">
        <article className="card">10:00 — Creator Spotlight</article>
        <article className="card">14:00 — Community Q&A</article>
        <article className="card">18:00 — Featured Live Session</article>
      </div>
    </Section>
  )
}
