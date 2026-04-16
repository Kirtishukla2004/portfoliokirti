// composables/useTheme.js
// Manages dark/light mode via document.documentElement class

import { ref } from 'vue'

const isDark = ref(true) // singleton state shared across components

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    html.classList.toggle('dark',  isDark.value)
    html.classList.toggle('light', !isDark.value)
  }

  return { isDark, toggleTheme }
}
