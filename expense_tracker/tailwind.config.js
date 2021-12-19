module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        screens: {
            xs: '400px',
            // => @media (min-width: 400px) { ... }
            
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                primary: {
                    black: '#222831',
                    grey: '#393E46',
                    teal: '#00ADB5',
                    white: '#EEEEEE',
                },
            },
        },
    },
    plugins: [],
};
