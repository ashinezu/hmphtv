import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  description?: string
  children?: ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        {description ? <p className="section__description">{description}</p> : null}
        {children}
      </div>
    </section>
  )
}
