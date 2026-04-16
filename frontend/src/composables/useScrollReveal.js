
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe all .reveal elements in the DOM
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  // Re-observe after dynamic content changes
  const observe = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer?.observe(el))
  }

  return { observe }
}
