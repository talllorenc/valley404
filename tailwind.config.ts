import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			colors: {
				contentDark: "#9394A1",
				contentLight: "#42434D",
			},
			boxShadow: {
				buttonLight: "2px 2px 1px 1px rgba(255,255,255, 1)",
				buttonDark: "2px 2px 1px 1px rgba(19,19,22, 1)",
			},
			keyframes: {
				press: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(0.95)" },
					"100%": { transform: "scale(1)" },
				},
				pulse: {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"50%": { transform: "scale(1.05)", opacity: "0.9" },
				},
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				wiggle: {
					"0%, 100%": {
						transform: "rotate(-3deg)",
					},
					"50%": {
						transform: "rotate(3deg)",
					},
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				press: "press 0.2s ease-in-out",
				pulse: "pulse 1s ease-in-out infinite",
				bounce: "bounce 1s infinite",
				wiggle: "wiggle 0.8s ease-in-out infinite",
				spin: "spin 1s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
