/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#b7860b",
                "cream-bg": "#F9F7F2", // New creamy background
                "charcoal-text": "#2D2D2D", // Soft charcoal for text
                "slate-muted": "#5A5A5A", // Softer grey for muted text
                "background-dark": "#1a1a1a", // Keeping for specific dark sections if needed
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'marquee': 'marquee 60s linear infinite',
            },
        },
    },
    plugins: [],
}
