// App.jsx
// Root component — orchestrates loading screen + all sections
// Uses Vue JSX (Composition API) throughout

import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

// ── Section components ────────────────────────
import LoadingScreen   from '@/components/LoadingScreen.jsx'
import Navbar          from '@/components/Navbar.jsx'
import HeroSection     from '@/components/HeroSection.jsx'
import AboutSection    from '@/components/AboutSection.jsx'
import SkillsSection   from '@/components/SkillsSection.jsx'
import ProjectsSection from '@/components/ProjectsSection.jsx'
import ExperienceSection from '@/components/ExperienceSection.jsx'
import ContactSection  from '@/components/ContactSection.jsx'
import FooterSection   from '@/components/FooterSection.jsx'

export default {
  name: 'App',
  setup() {
    const loading = ref(true)

    // Boot: hide loading screen after 1.4 s
    onMounted(() => {
      setTimeout(() => { loading.value = false }, 1400)
    })

    // Scroll-reveal: IntersectionObserver on all .reveal elements
    useScrollReveal()

    return () => (
      <>
        {/* Loading overlay */}
        {loading.value && <LoadingScreen />}

        {/* Main app — always in DOM so fonts/layout aren't flash-painted */}
        <div style={{ visibility: loading.value ? 'hidden' : 'visible' }}>
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          <FooterSection />
        </div>
      </>
    )
  },
}
