// components/HeroSection.jsx
// Full-height hero with typing animation, CTA buttons, ambient orbs, stats

import { useTyping } from '@/composables/useTyping'
import { HERO_PHRASES, HERO_STATS, PERSONAL } from '@/data/portfolio'

export default {
  name: 'HeroSection',
  setup() {
    const { typedText } = useTyping(HERO_PHRASES)

    const scrollTo = (id) =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const AmbientBlobs = () => (
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style="background: radial-gradient(circle, #13ae84, transparent 70%); filter: blur(60px);"
        />
        <div
          class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style="background: radial-gradient(circle, #36c99c, transparent 70%); filter: blur(80px);"
        />
      </div>
    )

    const OrbAvatar = () => (
      <div class="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80">
        {/* Pulse rings */}
        <div
          class="absolute inset-0 rounded-full border border-brand-500/20"
          style="animation: pulse-ring 2.5s ease-out infinite; animation-delay: 0s;"
        />
        <div
          class="absolute inset-4 rounded-full border border-brand-500/15"
          style="animation: pulse-ring 2.5s ease-out infinite; animation-delay: 0.8s;"
        />

        {/* Main circle */}
        <div
          class="absolute inset-8 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(135deg, #0f2420 0%, #111d28 100%)',
            border: '1.5px solid rgba(19,174,132,0.25)',
            boxShadow: '0 0 80px rgba(19,174,132,0.12), inset 0 0 40px rgba(19,174,132,0.05)',
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <div class="text-center">
            <div class="font-display text-5xl font-800 grad-text mb-1">KS</div>
            <div class="text-xs text-slate-500 font-body tracking-widest uppercase">Dev</div>
          </div>
        </div>

        {/* Orbiting dot — clockwise */}
        <div class="absolute inset-0" style="animation: spin 12s linear infinite;">
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2.5 h-2.5 rounded-full bg-brand-400"
            style="box-shadow: 0 0 10px var(--brand);"
          />
        </div>

        {/* Orbiting dot — counter-clockwise */}
        <div class="absolute inset-0" style="animation: spin 8s linear infinite reverse;">
          <div class="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-brand-300/60" />
        </div>
      </div>
    )

    const ScrollIndicator = () => (
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style="animation: bounce-down 1.8s ease-in-out infinite;"
      >
        <span class="text-xs text-slate-600 font-body tracking-widest uppercase">scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    )

    return () => (
      <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <AmbientBlobs />

        <div class="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* ── Text column ── */}
          <div class="flex-1 text-center md:text-left">

            {/* Status badge */}
            <div class="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-8">
              <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse inline-block" />
              <span class="text-xs font-body text-slate-400 tracking-wider">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 class="font-display text-5xl md:text-7xl font-800 leading-none mb-4 text-white">
              {PERSONAL.name.split(' ')[0]}
              <br />
              <span class="grad-text">{PERSONAL.name.split(' ')[1]}</span>
            </h1>

            {/* Typing text */}
            <div class="font-display text-lg md:text-xl font-600 text-slate-400 mb-6 h-8 flex items-center justify-center md:justify-start gap-1">
              <span>{typedText.value}</span>
              <span
                class="grad-text"
                style="animation: blink 0.9s step-end infinite;"
              >|</span>
            </div>

            {/* Bio */}
            <p class="font-body text-slate-400 text-base md:text-lg leading-relaxed max-w-md mb-10 mx-auto md:mx-0">
              {PERSONAL.bio}
            </p>

            {/* CTA buttons */}
            <div class="flex items-center gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={() => scrollTo('projects')}
                class="btn-primary px-7 py-3.5 rounded-xl text-sm gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11H5m7-7l-7 7 7 7" />
                </svg>
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                class="btn-outline px-7 py-3.5 rounded-xl text-sm gap-2"
              >
                Contact Me
              </button>
            </div>

            {/* Stats row */}
            <div class="mt-14 flex items-center gap-8 justify-center md:justify-start">
              {HERO_STATS.map(stat => (
                <div key={stat.label} class="text-center md:text-left">
                  <div class="font-display text-2xl font-700 grad-text">{stat.value}</div>
                  <div class="text-xs text-slate-500 font-body mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Orb Avatar ── */}
          <OrbAvatar />
        </div>

        <ScrollIndicator />
      </section>
    )
  },
}
