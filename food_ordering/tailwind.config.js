module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            animation: {
                'puls-fwd': 'puls-fwd 0.2s ease-in-out backwards',
            },
            keyframes: {
                'puls-fwd': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.06)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
};
