// components/SkillsSection.jsx
// 4 skill categories with animated progress bars (scroll-triggered) + chip cloud

import { ref, onMounted, onUnmounted } from 'vue'
import { SKILL_CATEGORIES, TECH_CHIPS } from '@/data/portfolio'

export default {
  name: 'SkillsSection',
  setup() {
    const barsVisible = ref(false)

    // Trigger bar animations when section enters viewport
    let observer = null
    onMounted(() => {
      const section = document.getElementById('skills')
      if (!section) return
      observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) barsVisible.value = true },
        { threshold: 0.2 }
      )
      observer.observe(section)
    })
    onUnmounted(() => observer?.disconnect())

    // ── Sub-component: single skill bar ──────────
    const SkillBar = ({ skill }) => (
      <div>
        <div class="flex justify-between mb-1.5">
          <span class="text-sm font-body text-slate-300">{skill.name}</span>
          <span class="text-xs font-body text-slate-500">{skill.level}%</span>
        </div>
        <div class="h-1.5 bg-surface-600 rounded-full overflow-hidden">
          <div
            class="skill-bar-fill"
            style={{
              width: barsVisible.value ? `${skill.level}%` : '0%',
            }}
          />
        </div>
      </div>
    )

    // ── Sub-component: category card ─────────────
    const CategoryCard = ({ category, delay }) => (
      <div class={`reveal reveal-delay-${delay}`}>
        <div class="glass rounded-2xl p-6 h-full">
          {/* Header */}
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-8 h-8 rounded-lg flex items-center justify-center text-base"
              style="background: var(--brand-dim);"
            >
              {category.icon}
            </div>
            <span class="font-display font-700 text-sm text-white tracking-wide uppercase">
              {category.name}
            </span>
          </div>

          {/* Bars */}
          <div class="space-y-4">
            {category.skills.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    )

    return () => (
      <section
        id="skills"
        class="py-28 relative"
        style="background: linear-gradient(180deg, transparent, rgba(19,174,132,0.02) 50%, transparent);"
      >
        <div class="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div class="text-center mb-16 reveal">
            <span class="section-label mb-4">Skills</span>
            <h2 class="font-display text-4xl md:text-5xl font-700 text-white">My toolkit</h2>
          </div>

          {/* Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.name} category={cat} delay={i + 1} />
            ))}
          </div>

          {/* Tech chip cloud */}
          <div class="mt-12 flex flex-wrap gap-2 justify-center reveal">
            {TECH_CHIPS.map(chip => (
              <span key={chip} class="tech-chip">{chip}</span>
            ))}
          </div>
        </div>
      </section>
    )
  },
}
