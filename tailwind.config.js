/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mushroom: {
                    50: '#FFF5F7',
                    100: '#FFE8ED',
                    200: '#FFD1DC',
                    300: '#FFB3C6',
                    400: '#FF8FA8',
                    500: '#FF6B8A', // Vibrant Pink/Coral
                    600: '#E85577',
                    700: '#C93D5E',
                    800: '#A32847',
                    900: '#7A1A34',
                },
                forest: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    200: '#BBF7D0',
                    300: '#86EFAC',
                    400: '#4ADE80',
                    500: '#10B981', // Modern Emerald Green
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                accent: {
                    50: '#FAF5FF',
                    100: '#F3E8FF',
                    200: '#E9D5FF',
                    300: '#D8B4FE',
                    400: '#C084FC',
                    500: '#A855F7', // Purple accent
                    600: '#9333EA',
                    700: '#7E22CE',
                    800: '#6B21A8',
                    900: '#581C87',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            screens: {
                'xs': '475px',
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
}
