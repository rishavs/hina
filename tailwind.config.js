/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/*.ts"],
    daisyui: {
        themes: [
            "cupcake", "business",
            {
                delight: {
                    "primary": "#1b5790",
                    "secondary": "#fde235",
                    "accent": "#12395e",
                    "neutral": "#f9fafb",
                    "info": "#90d4ee",
                    "success": "#15b280",
                    "warning": "#d7a914",
                    "error": "#e8615e",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui")
    ],
}

