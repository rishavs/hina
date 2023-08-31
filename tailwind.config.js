/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/*.ts"],
    daisyui: {
        themes: [
            "cupcake", "business",
            {
                delight: {
                    "primary": "#fde68a",
                    "secondary": "#f472b6",
                    "accent": "#075985",
                    "neutral": "#0284c7",
                    "info": "#8be8fd",
                    "success": "#52fa7c",
                    "warning": "#fb923c",
                    "error": "#ff5757",
                    "base-100": "#f3f4f6",
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

