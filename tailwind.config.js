/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Earthy / Natural Green palette for fantasticfood.in
                cream: {
                    50: '#FEFDF7',
                    100: '#FEFAE0',
                    200: '#FDF3C0',
                    300: '#FAE89A',
                    400: '#F5D76E',
                    500: '#EEC843',
                    600: '#D4A820',
                    700: '#A87E12',
                    800: '#7C5C0C',
                    900: '#523D08',
                },
                forest: {
                    50: '#F0F7F2',
                    100: '#D9EDE0',
                    200: '#B3DBBD',
                    300: '#7EC49A',
                    400: '#52B788',
                    500: '#2D9B65',
                    600: '#227849',
                    700: '#1A5E38',
                    800: '#1A3C2B',
                    900: '#0F2419',
                },
                amber: {
                    50: '#FFF9F0',
                    100: '#FEF0D6',
                    200: '#FDDBA8',
                    300: '#F9C170',
                    400: '#F4A23C',
                    500: '#D6AD60',
                    600: '#B8862A',
                    700: '#8F621A',
                    800: '#6B4512',
                    900: '#472E0B',
                },
                earth: {
                    50: '#FAF6F1',
                    100: '#F2E8DC',
                    200: '#E3CFBB',
                    300: '#CBB08E',
                    400: '#B08B64',
                    500: '#9C6E48',
                    600: '#7F5539',
                    700: '#63412B',
                    800: '#4A3020',
                    900: '#2E1D12',
                },
                moss: {
                    50: '#F2FAF4',
                    100: '#E0F2E5',
                    200: '#C2E6CB',
                    300: '#96D4A5',
                    400: '#63BB7A',
                    500: '#40A05A',
                    600: '#2E7D45',
                    700: '#266138',
                    800: '#1F4D2D',
                    900: '#163320',
                },
                // Keep forest alias for backward compat in mushroom shop components
                mushroom: {
                    50: '#F0F7F2',
                    100: '#D9EDE0',
                    200: '#B3DBBD',
                    300: '#7EC49A',
                    400: '#52B788',
                    500: '#2D9B65',
                    600: '#227849',
                    700: '#1A5E38',
                    800: '#1A3C2B',
                    900: '#0F2419',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            screens: {
                'xs': '475px',
                '3xl': '1920px',
            },
            backgroundImage: {
                'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D6A4F' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
