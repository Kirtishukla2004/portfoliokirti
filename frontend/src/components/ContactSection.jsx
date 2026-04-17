// components/ContactSection.jsx
// Contact info cards + form that POSTs to Python FastAPI backend

import { ref, reactive } from "vue";
import axios from "axios";
import { PERSONAL, SOCIALS } from "@/data/portfolio";

const CONTACT_INFO = [
  {
    icon: "✉️",
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    external: false,
  },
  {
    icon: "📱",
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/kirtishukla2004/",
    href: PERSONAL.linkedin,
    external: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Kirtishukla2004",
    href: PERSONAL.github,
    external: true,
  },
];

const InfoCard = ({ info }) => (
  <div class="glass rounded-xl p-5 flex items-center gap-4 hover:border-brand-500/30 transition-all duration-300">
    <div
      class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style="background: var(--brand-dim);"
    >
      <span class="text-lg">{info.icon}</span>
    </div>
    <div>
      <div class="text-xs text-slate-500 font-body mb-0.5">{info.label}</div>
      <a
        href={info.href}
        target={info.external ? "_blank" : undefined}
        rel={info.external ? "noopener noreferrer" : undefined}
        class="text-slate-200 font-body text-sm hover:text-brand-400 transition-colors"
      >
        {info.value}
      </a>
    </div>
  </div>
);

const SuccessState = ({ onReset }) => (
  <div class="text-center py-8">
    <div
      class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
      style="background: var(--brand-dim);"
    >
      ✓
    </div>
    <h3 class="font-display font-700 text-white text-xl mb-2">Message sent!</h3>
    <p class="text-slate-400 text-sm font-body mb-6">
      I'll get back to you within 24 hours.
    </p>
    <button
      onClick={onReset}
      class="btn-outline px-6 py-2.5 text-sm rounded-xl"
    >
      Send another
    </button>
  </div>
);

export default {
  name: "ContactSection",
  setup() {
    const form = reactive({ name: "", email: "", message: "" });
    const sending = ref(false);
    const success = ref(false);
    const error = ref("");

    const validate = () => {
      if (!form.name.trim()) return "Please enter your name.";
      if (!form.email.trim()) return "Please enter your email.";
      if (!/\S+@\S+\.\S+/.test(form.email))
        return "Please enter a valid email.";
      if (!form.message.trim()) return "Please enter a message.";
      return "";
    };

    const submit = async () => {
      error.value = validate();
      if (error.value) return;

      sending.value = true;
      try {
        // POST to Python FastAPI backend
        await axios.post("https://portfoliokirti-1.onrender.com/api/contact", {
          name: form.name,
          email: form.email,
          message: form.message,
        });
        success.value = true;
      } catch (e) {
        error.value =
          e?.response?.data?.detail ||
          "Something went wrong. Please try again.";
      } finally {
        sending.value = false;
      }
    };

    const reset = () => {
      success.value = false;
      error.value = "";
      form.name = "";
      form.email = "";
      form.message = "";
    };

    return () => (
      <section id="contact" class="py-28">
        <div class="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div class="text-center mb-16 reveal">
            <span class="section-label mb-4">Contact</span>
            <h2 class="font-display text-4xl md:text-5xl font-700 text-white">
              Let's work together
            </h2>
            <p class="mt-4 text-slate-500 font-body max-w-lg mx-auto">
              Have a project in mind or just want to chat? My inbox is always
              open.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* ── Left: info cards ── */}
            <div class="space-y-5 reveal">
              {CONTACT_INFO.map((info) => (
                <InfoCard key={info.label} info={info} />
              ))}
            </div>

            {/* ── Right: form ── */}
            <div class="glass rounded-2xl p-8 reveal reveal-delay-2">
              {success.value ? (
                <SuccessState onReset={reset} />
              ) : (
                <div class="space-y-4">
                  {/* Name */}
                  <div>
                    <label class="block text-xs font-display font-600 text-slate-400 mb-2 tracking-wider uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onInput={(e) => (form.name = e.target.value)}
                      class="contact-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label class="block text-xs font-display font-600 text-slate-400 mb-2 tracking-wider uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onInput={(e) => (form.email = e.target.value)}
                      class="contact-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label class="block text-xs font-display font-600 text-slate-400 mb-2 tracking-wider uppercase">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onInput={(e) => (form.message = e.target.value)}
                      class="contact-input resize-none"
                    />
                  </div>

                  {error.value && (
                    <p class="text-red-400 text-xs font-body">{error.value}</p>
                  )}

                  {/* Submit button */}
                  <button
                    onClick={submit}
                    disabled={sending.value}
                    class="btn-primary w-full py-3.5 rounded-xl text-sm justify-center gap-2"
                  >
                    {sending.value ? (
                      <>
                        <svg
                          class="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          />
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
};
