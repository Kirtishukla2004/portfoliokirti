
import { PERSONAL, ABOUT_CARDS } from '@/data/portfolio'

export default {
  name: 'AboutSection',
  setup() {
    return () => (
      <section id="about" class="py-28 relative">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col md:flex-row gap-16 items-start">

            <div class="flex-1 reveal">
              <span class="section-label mb-4">About Me</span>
              <h2 class="font-display text-4xl md:text-5xl font-700 text-white leading-tight mb-6">
                Building things that
                <br />
                <span class="grad-text">actually work</span>
              </h2>

              <div class="space-y-4 font-body text-slate-400 leading-relaxed">
                {PERSONAL.aboutLong.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Currently working on */}
              <div class="mt-8 glass rounded-xl p-5">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse inline-block" />
                  <span class="font-display text-sm font-600 text-slate-300 tracking-wide">
                    Currently working on
                  </span>
                </div>
                <p class="text-sm text-slate-400 font-body">{PERSONAL.currentWork}</p>
              </div>
            </div>

            {/* ── Right: Cards ── */}
            <div class="flex-1 grid grid-cols-2 gap-4 reveal reveal-delay-2">
              {ABOUT_CARDS.map((card) => (
                <div
                  key={card.title}
                  class={[
                    'glass rounded-xl p-5 hover:border-brand-500/30 transition-all duration-300',
                    card.span ? 'col-span-2' : '',
                  ]}
                >
                  <div class="text-2xl mb-2">{card.icon}</div>
                  <div class="font-display font-600 text-sm text-white mb-1">{card.title}</div>
                  <div class="text-xs text-slate-500 font-body leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    )
  },
}
