// components/FooterSection.jsx

import { SOCIALS } from '@/data/portfolio'

export default {
  name: 'FooterSection',
  setup() {
    return () => (
      <footer class="border-t border-white/[0.05] py-10">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-6">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-500 hover:text-brand-400 transition-colors text-sm font-body"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p class="text-xs text-slate-600 font-body">
            © {new Date().getFullYear()} Kirti Shukla — Built with ♥ 
          </p>
        </div>
      </footer>
    )
  },
}
