/* eslint-disable @typescript-eslint/no-explicit-any -- disabled, needed for just getting compilation to work, WONT AFFECT ANYTHING */
import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { withAnimations } from "animated-tailwindcss";

export default withAnimations({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["lemonade"],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui as any],
}) as Config;
