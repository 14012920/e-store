import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      colors: {
        primary: "var(--brand-secondary)",
        brand2:"var(--brand-modify-secondary)",
        brandSecondary: "var(--brand-secondary)",
        appBgColor: "var(--app-bg-color)",
        productBgColor: "var(--product-bg-color)",
        buttonBgColor: "var(--button-bg-color)",
        buttonTextColor: "var(--button-text-color)",
        buttonBgHoverColor: "var(--button-bg-hover-color)",
        buttonTextHoverColor: "var(--button-text-hover-color)",
        productButtonBgColor: "var(--product-btn-bg-color)",
        navbarTextColor: "var(--navbar-text-color)",
        navbarTextHoverColor: "var(--header-icon-hover-color)",
        brandText: "var(--brand-text)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
