const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'inter':
                    '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                'ui-serif':
                    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                'IBM Mono Plex':
                    '"IBM Mono Plex", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};