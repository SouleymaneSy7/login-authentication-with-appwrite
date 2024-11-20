import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    fontFamily: {
      notoSerif: ['"Noto Serif Display", serif'],
      satoshi: ['"Satoshi", sans-serif'],
    },

    fontSize: {
      "fs-heading-lg": "var(--fs-heading-lg)",
      "fs-heading-sm": "var(--fs-heading-sm)",
      "fs-body": "var(--fs-body)",
      "fs-input-placeholder": "var(--fs-input-placeholder)",
      "fs-forgot-password": "var(--fs-forgot-password)",
      "fs-errors": "var(--fs-errors)",
    },

    fontWeight: {
      "fw-bold": "var(--fw-bold)",
      "fw-semi-bold": "var(--fw-semi-bold)",
      "fw-regular": "var(--fw-regular)",
    },

    extend: {
      colors: {
        "green-clr": "var(--green-clr)",
        "yellow-clr": "var(--yellow-clr)",
        "red-clr": "var(--red-clr)",
        "input-bg-clr": "var(--input-bg-clr)",
        "dark-bg-clr": "var(--dark-bg-clr)",
        "input-errors-bg-clr": "var(--input-errors-bg-clr)",
        "modal-container-bg-clr": "var(--modal-container-bg-clr)",
        "input-text-clr": "var(--input-text-clr)",
        "text-dark-clr": "var(--text-dark-clr)",
        "text-accent-clr": "var(--accent-text-clr)",
      },
    },
  },
  plugins: [],
} satisfies Config;
