/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontSize: {
            sm: "0.8rem",
            base: "16px",
            button: "16px",
            "body-text-normal": "20px",
            "body-text-small": "16px",
            title1: "20px",
            title2: "16px",
            title3: "12px",
        },
        extend: {
            colors: {
                "purple-1": "#202874",
                "purple-2": "#2A3493",
                "purple-3": "#3440B2",
                "purple-4": "#3E4CD1",
                "purple-5": "#4858EF",
                "purple-6": "#5F6DF1",
                "purple-7": "#7682F3",
                "purple-8": "#8D97F5",
                "purple-9": "#A4ACF7",
                body: "#FFFFFF",
                white: "#FFFFFF",
                smokeWhite: "#F9F9F9",
                black: "#212121",
                success: "#3BD49B",
                alternative: "#F08960",
                darkMode: {
                    "purple-1": "#2C3474",
                    "purple-2": "#3A4493",
                    "purple-3": "#4854B2",
                    "purple-4": "#5664D1",
                    "purple-5": "#4858EF",
                    "purple-6": "#7884F4",
                    "purple-7": "#8B95F6",
                    "purple-8": "#9EA6F8",
                    "purple-9": "#B1B7FA",
                    body: "#212121",
                    white: "#F9F9F9",
                    smokeWhite: "#F9F9F9",
                    black: "#212121",
                    success: "#3BD49B",
                    alternative: "#F29F7E",
                },
            },
            backgroundImage: {
                "layout-bg": "url('/images/bg-light.png')",
                "layout-bg-dark": "url('/images/bg-dark.png')",
                "layout-bg-footer-dark": "url('/images/FooterBackground.png')",
                "footer-bg": "url('/images/FooterLightBackground.png')",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
