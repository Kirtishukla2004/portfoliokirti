// composables/useTyping.js
// Returns a reactive ref that cycles through phrases with typewriter effect

import { ref, onMounted, onUnmounted } from 'vue'

export function useTyping(phrases, { typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800 } = {}) {
  const typedText = ref('')
  let phraseIdx = 0
  let charIdx   = 0
  let deleting  = false
  let timer     = null

  const step = () => {
    const current = phrases[phraseIdx]

    if (!deleting) {
      typedText.value = current.slice(0, ++charIdx)
      if (charIdx === current.length) {
        deleting = true
        timer = setTimeout(step, pauseMs)
        return
      }
    } else {
      typedText.value = current.slice(0, --charIdx)
      if (charIdx === 0) {
        deleting = false
        phraseIdx = (phraseIdx + 1) % phrases.length
      }
    }

    timer = setTimeout(step, deleting ? deleteSpeed : typeSpeed)
  }

  onMounted(() => { timer = setTimeout(step, 800) })
  onUnmounted(() => clearTimeout(timer))

  return { typedText }
}
