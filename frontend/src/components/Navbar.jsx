// components/Navbar.jsx
// Sticky navbar — shrinks on scroll, mobile hamburger menu, theme toggle

import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
]

export default {
  name: 'Navbar',
  setup() {
    const scrolled    = ref(false)
    const mobileOpen  = ref(false)
    const { isDark, toggleTheme } = useTheme()

    const handleScroll = () => { scrolled.value = window.scrollY > 40 }

    onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))

    const scrollTo = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      mobileOpen.value = false
    }

    // ─── Sub-components ───────────────────────────
    const ThemeIcon = () => isDark.value
      ? (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
      : (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )

    const HamburgerIcon = () => mobileOpen.value
      ? (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
      : (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )

    return () => (
      <nav class={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled.value ? 'py-3 glass shadow-xl shadow-black/30' : 'py-5 bg-transparent',
      ]}>
        <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Desktop nav links */}
          <div class="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                class="nav-link bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div class="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 transition-colors"
            >
              <ThemeIcon />
            </button>

            {/* Hire Me CTA (desktop) */}
            <a
              href="mailto:shuklakirti2004@gmail.com"
              class="hidden md:inline-flex btn-primary px-4 py-2 text-sm rounded-lg gap-2"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => mobileOpen.value = !mobileOpen.value}
              class="md:hidden w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-300"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen.value && (
          <div class="md:hidden glass mx-4 mt-2 rounded-xl overflow-hidden">
            <div class="flex flex-col py-2">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  class="px-6 py-3 font-display text-sm font-600 text-slate-300 hover:text-brand-400 hover:bg-white/5 transition-colors tracking-widest uppercase text-left bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
  },
}
