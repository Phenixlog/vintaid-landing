import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFAF9", // Stone 50
                foreground: "#1C1917", // Stone 900
                primary: {
                    DEFAULT: "#1A4D2E", // Deep Forest Green
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F5F5F0", // Warm Sand
                    foreground: "#1C1917",
                },
                muted: {
                    DEFAULT: "#78716C", // Stone Grey
                    foreground: "#FAFAF9",
                },
                accent: {
                    DEFAULT: "#78716C", // Stone Grey
                    foreground: "#FAFAF9",
                },
                border: "#E7E5E4", // Stone 200
                // Adding destructive for completeness with shadcn usually, but sticking to requested for now
            },
            borderRadius: {
                lg: "0.75rem",
                md: "calc(0.75rem - 2px)",
                sm: "calc(0.75rem - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
