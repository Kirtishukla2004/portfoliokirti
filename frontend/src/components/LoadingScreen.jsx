// components/LoadingScreen.jsx
// Animated loading screen shown on first paint

export default {
  name: 'LoadingScreen',
  setup() {
    return () => (
      <div
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style="background:#080c10;"
      >
        {/* Logo */}
        <div class="mb-8 text-center">
          <span class="font-display text-3xl font-800 grad-text tracking-widest">Hello World,Welcome to my Portfolio </span>
          <span class="text-slate-600 text-3xl font-display">.</span>
        </div>

        {/* Progress bar */}
        <div class="w-48 h-0.5 bg-surface-600 rounded overflow-hidden">
          <div
            class="h-full rounded"
            style={{
              background: 'var(--brand)',
              animation: 'loading-fill 1.2s cubic-bezier(.16,1,.3,1) forwards',
            }}
          />
        </div>

        <p class="mt-4 text-xs font-body text-slate-500 tracking-widest uppercase">
          Initializing
        </p>
      </div>
    )
  },
}
