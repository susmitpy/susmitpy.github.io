import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	darkMode: "class",
  theme: {
	  extend: {
		  fontFamily: {
			  mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
			  sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
		  },
		  colors: {
		  // Obsidian theme palette
		  obsidian: {
			  950: '#0a0a0a',
			  900: '#0f0f0f',
			  800: '#151515',
			  700: '#1a1a1a',
			  600: '#252525',
			  500: '#333333',
			  400: '#525252',
			  300: '#737373',
			  200: '#a3a3a3',
			  100: '#d4d4d4',
			  50: '#fafafa',
		  },
		  // Accent colors - deep indigo/violet
		  accent: {
			  DEFAULT: 'rgba(99, 102, 241, 0.2)',
			  glow: 'rgba(99, 102, 241, 0.15)',
			  border: 'rgba(99, 102, 241, 0.3)',
			  solid: '#6366f1',
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			  DEFAULT: 'hsl(var(--card))',
			  foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			  DEFAULT: 'hsl(var(--popover))',
			  foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			  DEFAULT: 'hsl(var(--primary))',
			  foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			  DEFAULT: 'hsl(var(--muted))',
			  foreground: 'hsl(var(--muted-foreground))'
		  },
		  destructive: {
			  DEFAULT: 'hsl(var(--destructive))',
			  foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  },
		  borderRadius: {
			  lg: 'var(--radius)',
			  md: 'calc(var(--radius) - 2px)',
			  sm: 'calc(var(--radius) - 4px)'
		  },
		  animation: {
			  scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			  move: "move 5s linear infinite",
			  'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
			  'glow-pulse': 'glowPulse 2s ease-in-out infinite',
			  'float': 'float 6s ease-in-out infinite',
			  'particle-flow': 'particleFlow 3s ease-in-out infinite',
			  'marquee': 'marquee 25s linear infinite',
			  'marquee-slow': 'marquee 40s linear infinite',
		  },
		  keyframes: {
			  scroll: {
				  to: {
					  transform: "translate(calc(-50% - 0.5rem))",
				  },
			  },
			  move: {
				  "0%": { transform: "translateX(-200px)" },
				  "100%": { transform: "translateX(200px)" },
			  },
			  fadeInUp: {
				  '0%': { opacity: '0', transform: 'translateY(20px)' },
				  '100%': { opacity: '1', transform: 'translateY(0)' },
			  },
			  glowPulse: {
				  '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)' },
				  '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.2)' },
			  },
			  float: {
				  '0%, 100%': { transform: 'translateY(0)' },
				  '50%': { transform: 'translateY(-10px)' },
			  },
			  particleFlow: {
				  '0%': { transform: 'translateX(-100%)', opacity: '0' },
				  '10%': { opacity: '1' },
				  '90%': { opacity: '1' },
				  '100%': { transform: 'translateX(400%)', opacity: '0' },
			  },
			  marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-50%)' },
			  },
		  },
		  boxShadow: {
			  'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
			  'glow-lg': '0 0 40px rgba(99, 102, 241, 0.2)',
			  'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
			  'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
		  },
		  backdropBlur: {
			  xs: '2px',
		  },
	  }
  },
	plugins: [
		addVariablesForColors,
		require("tailwindcss-animate"),
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
			  }),
			  "bg-dot": (value: any) => ({
				  backgroundImage: `url("${svgToDataUri(
					  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="16" cy="16" r="1"/></svg>`
				  )}")`,
			  }),
		  },
		  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
	  );
		},
	],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
