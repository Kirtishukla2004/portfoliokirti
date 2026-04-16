// components/ExperienceSection.jsx
// Vertical timeline for work experience + education

import { TIMELINE } from '@/data/portfolio'

const TimelineItem = ({ item, delay }) => (
  <div class={`relative mb-10 reveal reveal-delay-${delay}`}>
    {/* Dot */}
    <div
      class="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-brand-400"
      style={{ background: item.current ? 'var(--brand)' : '#0d1117' }}
    />

    <div class="glass rounded-2xl p-6 hover:border-brand-500/20 transition-colors duration-300">
      {/* Header */}
      <div class="flex items-start justify-between flex-wrap gap-2 mb-2">
        <div>
          <h3 class="font-display font-700 text-white">{item.title}</h3>
          <p class="text-brand-400 text-sm font-body font-500">{item.org}</p>
        </div>

        <div class="text-right">
          <span class="text-xs font-body text-slate-500 bg-surface-700 px-3 py-1 rounded-full">
            {item.period}
          </span>
          {item.current && (
            <div class="mt-1 flex justify-end">
              <span class="inline-flex items-center gap-1 text-xs text-brand-400">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse inline-block" />
                Current
              </span>
            </div>
          )}
        </div>
      </div>

      <p class="text-sm text-slate-400 font-body leading-relaxed mt-2">{item.desc}</p>

      {/* Tech chips */}
      {item.tech && item.tech.length > 0 && (
        <div class="flex flex-wrap gap-1.5 mt-3">
          {item.tech.map(t => (
            <span key={t} class="tech-chip">{t}</span>
          ))}
        </div>
      )}
    </div>
  </div>
)

export default {
  name: 'ExperienceSection',
  setup() {
    return () => (
      <section
        id="experience"
        class="py-28"
        style="background: linear-gradient(180deg, transparent, rgba(19,174,132,0.02) 50%, transparent);"
      >
        <div class="max-w-4xl mx-auto px-6">

          {/* Heading */}
          <div class="text-center mb-16 reveal">
            <span class="section-label mb-4">Experience & Education</span>
            <h2 class="font-display text-4xl md:text-5xl font-700 text-white">The journey</h2>
          </div>

          <div class="relative pl-8">
            {/* Vertical line */}
            <div
              class="absolute left-2 top-2 bottom-2 w-px"
              style="background: linear-gradient(to bottom, var(--brand), rgba(19,174,132,0.1));"
            />

            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.title} item={item} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    )
  },
}
