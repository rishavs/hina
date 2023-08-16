/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/*.ts"],
    daisyui: {
        themes: [
            "cupcake", "business",
            {
                delight: {
                    "primary": "#62e0cb",
                    "secondary": "#ed8798",
                    "accent": "#81f771",
                    "neutral": "#181c25",
                    "base-100": "#e0e3f1",
                    "info": "#90d4ee",
                    "success": "#15b280",
                    "warning": "#d7a914",
                    "error": "#e8615e",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}

