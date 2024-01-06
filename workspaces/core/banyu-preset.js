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
            fontSize: {
                'jds-text-xs': [
                    '0.786rem',
                    {
                        lineHeight: '1rem',
                    },
                ],
                'jds-text-sm': [
                    '0.857rem',
                    {
                        lineHeight: '1.143rem',
                    },
                ],
                'jds-text-base': [
                    '1rem',
                    {
                        lineHeight: '1.429rem',
                    },
                ],
                'jds-text-lg': [
                    '1rem',
                    {
                        lineHeight: '1.714rem',
                    },
                ],
                'jds-text-xl': [
                    '1.286rem',
                    {
                        lineHeight: '2rem',
                    },
                ],
                'jds-text-2xl': [
                    '1.429rem',
                    {
                        lineHeight: '2rem',
                    },
                ],
                'jds-text-3xl': [
                    '1.714rem',
                    {
                        lineHeight: '2.286rem',
                    },
                ],
                'jds-text-4xl': [
                    '2.143rem',
                    {
                        lineHeight: '2.571rem',
                    },
                ],
                'jds-text-5xl': [
                    '2.571rem',
                    {
                        lineHeight: '2.857rem',
                    },
                ],
                'jds-text-6xl': [
                    '3.429rem',
                    {
                        lineHeight: '4rem',
                    },
                ],
            },
            borderRadius: {
                'rounded-sm': 'var(--jla-rounded-sm)',
                'rounded': 'var(--jla-rounded)',
                'rounded-md': 'var(--jla-rounded-md)',
                'rounded-lg': 'var(--jla-rounded-lg)',
                'rounded-xl': 'var(--jla-rounded-xl)',
                'rounded-2xl': 'var(--jla-rounded-2xl)',
                'rounded-3xl': 'var(--jla-rounded-3xl)',
                'rounded-4xl': 'var(--jla-rounded-4xl)',
                'rounded-5xl': 'var(--jla-rounded-5xl)',
                'rounded-full': 'var(--jla-rounded-full)',
            },
            zIndex: {
                1: '1',
                5: '5',
                10000: '10000',
            },
            boxShadow: {
                inset: '0 0 0 1px rgb(var(--piccolo)) inset',
                interactive: '0 0 0 2px rgb(var(--piccolo)) inset',
                focus: `0 0 0 4px rgba(var(--piccolo), .13)`,
                left: `rgb(var(--beerus)) -6px 0px 9px -10px`,
                input: '0 0 0 var(--border-width) rgb(var(--beerus)) inset',
                'input-hov':
                    '0 0 0 var(--border-i-width) rgb(var(--bulma) / 7%) inset, 0 0 0 var(--border-i-width) rgb(var(--beerus)) inset',
                'input-err': '0 0 0 var(--border-i-width) rgb(var(--chichi)) inset',
                'input-focus': '0 0 0 var(--border-i-width) rgb(var(--piccolo)) inset',
                'input-cell-focus': '0 0 0 var(--border-width) rgb(var(--bulma)) inset',
                'moon-xs': 'var(--shadow-xs)',
                'moon-sm': 'var(--shadow-sm)',
                'moon-md': 'var(--shadow-md)',
                'moon-lg': 'var(--shadow-lg)',
                'moon-xl': 'var(--shadow-xl)',
                textarea: '0 0 0 var(--border-width) rgb(var(--beerus))',
                'textarea-hov':
                    '0 0 0 var(--border-i-width) rgb(var(--bulma) / 7%), 0 0 0 var(--border-i-width) rgb(var(--beerus))',
                'textarea-focus': '0 0 0 var(--border-i-width) rgb(var(--piccolo))',
                'textarea-err': '0 0 0 var(--border-i-width) rgb(var(--chichi))',
            },
            opacity: {
                moon: 'var(--opacity-moon)',
            },
            keyframes: {
                error: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
                },
                explode: {
                    '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                    '50%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.4 },
                    '80%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
                    '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
                },
                rotation: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                pulse2: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '0%': { transform: 'scale(1)' },
                    '70%': { transform: 'scale(1)', boxShadow: '0 0 0 30px transparent' },
                    '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 transparent' },
                },
                // Toast
                'toast-hide': {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                'toast-slide-in-right': {
                    '0%': { transform: `translateX(calc(100% + 1rem))` },
                    '100%': { transform: 'translateX(0)' },
                },
                'toast-slide-in-left': {
                    '0%': { transform: `translateX(calc(-100% + 1rem))` },
                    '100%': { transform: 'translateX(0)' },
                },
                'toast-slide-in-down': {
                    '0%': { transform: `translateY(calc(100% + 1rem))` },
                    '100%': { transform: 'translateY(0)' },
                },
                'toast-slide-in-up': {
                    '0%': { transform: `translateY(calc(-100% + 1rem))` },
                    '100%': { transform: 'translateY(0)' },
                },
                'toast-swipe-out': {
                    '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
                    '100%': {
                        transform: `translateX(calc(100% + 1rem))`,
                    },
                },
            },
            animation: {
                // Toast
                'toast-hide': 'toast-hide 300ms ease-in forwards',
                'toast-slide-in-right':
                    'toast-slide-in-right 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                'toast-slide-in-left':
                    'toast-slide-in-left 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                'toast-slide-in-down':
                    'toast-slide-in-down 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                'toast-slide-in-up':
                    'toast-slide-in-up 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards',
            },
            colors: {
                piccolo: {
                    DEFAULT: withOpacityValue('--piccolo'),
                },
                hit: {
                    DEFAULT: withOpacityValue('--hit'),
                },
                beerus: {
                    DEFAULT: withOpacityValue('--beerus'),
                },
                goku: {
                    DEFAULT: withOpacityValue('--goku'),
                },
                gohan: {
                    DEFAULT: withOpacityValue('--gohan'),
                },
                bulma: {
                    DEFAULT: withOpacityValue('--bulma'),
                },
                trunks: {
                    DEFAULT: withOpacityValue('--trunks'),
                },
                goten: {
                    DEFAULT: withOpacityValue('--goten'),
                },
                popo: {
                    DEFAULT: withOpacityValue('--popo'),
                },
                jiren: {
                    DEFAULT: withOpacityValue('--jiren'),
                },
                heles: {
                    DEFAULT: withOpacityValue('--heles'),
                },
                zeno: {
                    DEFAULT: withOpacityValue('--zeno'),
                },
                // support colours
                krillin: {
                    DEFAULT: withOpacityValue('--krillin'),
                    60: withOpacityValue('--krillin-60'),
                    10: withOpacityValue('--krillin-10'),
                },
                chichi: {
                    DEFAULT: withOpacityValue('--chichi'),
                    60: withOpacityValue('--chichi-60'),
                    10: withOpacityValue('--chichi-10'),
                },
                roshi: {
                    DEFAULT: withOpacityValue('--roshi'),
                    60: withOpacityValue('--roshi-60'),
                    10: withOpacityValue('--roshi-10'),
                },
                dodoria: {
                    DEFAULT: withOpacityValue('--dodoria'),
                    60: withOpacityValue('--dodoria-60'),
                    10: withOpacityValue('--dodoria-10'),
                },
                cell: {
                    DEFAULT: withOpacityValue('--cell'),
                    60: withOpacityValue('--cell-60'),
                    10: withOpacityValue('--cell-10'),
                },
                raditz: {
                    DEFAULT: withOpacityValue('--raditz'),
                    60: withOpacityValue('--raditz-60'),
                    10: withOpacityValue('--raditz-10'),
                },
                whis: {
                    DEFAULT: withOpacityValue('--whis'),
                    60: withOpacityValue('--whis-60'),
                    10: withOpacityValue('--whis-10'),
                },
                frieza: {
                    DEFAULT: withOpacityValue('--frieza'),
                    60: withOpacityValue('--frieza-60'),
                    10: withOpacityValue('--frieza-10'),
                },
                nappa: {
                    DEFAULT: withOpacityValue('--nappa'),
                    60: withOpacityValue('--nappa-60'),
                    10: withOpacityValue('--nappa-10'),
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-radix')(),
        plugin(function ({ addComponents }) {
            addComponents({
                // deprecated classname. You may use "text-goten bg-piccolo"
                '.btn-primary': {
                    color: 'rgb(var(--goten))',
                    backgroundColor: `rgb(var(--piccolo))`,
                },
                // deprecated classname. You may use "text-bulma bg-transparent ring-inset ring-1 ring-trunks hover:ring-bulma"
                '.btn-secondary': {
                    color: 'rgb(var(--bulma))',
                    background: 'none',
                    boxShadow: `inset 0 0 0 1px rgb(var(--trunks)/1)`,
                    '&:hover': {
                        boxShadow: `inset 0 0 0 1px rgb(var(--bulma))`,
                    },
                },
                // deprecated classname. You may use "text-goten bg-hit"
                '.btn-tertiary': {
                    color: 'rgb(var(--goten))',
                    backgroundColor: 'rgb(var(--hit))',
                },
                '.anim-error': {
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    perspective: '1000px',
                },
                '.anim-pulse': {
                    boxShadow: '0 0 0 0 rgb(var(--piccolo))',
                },
                '.input-number-clear': {
                    MozAppearance: 'textfield',
                    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                        opacity: 0,
                    },
                },
                '.input-xl': {
                    '&:not(:focus):not([disabled])::placeholder': {
                        opacity: 0,
                    },
                    '&:not(:focus):not([disabled]):placeholder-shown + label': {
                        top: '50%',
                        marginTop: '-0.438rem',
                        fontSize: '1rem',
                        lineHeight: '1rem',
                    },
                },
                '.input-dt-shared': {
                    '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
                        display: 'block',
                        padding: 0,
                        height: '2.375rem',
                        lineHeight: '2.375rem',
                    },
                    '&::-webkit-date-and-time-value': {
                        paddingTop: '0.5rem',
                    },
                    '&::-webkit-calendar-picker-indicator': {
                        position: 'absolute',
                    },
                },
                '.input-lg-dt-shared': {
                    '&::-webkit-datetime-edit': {
                        height: '2.875rem',
                        lineHeight: '2.875rem',
                    },
                    '&::-webkit-date-and-time-value': {
                        paddingTop: '0.625rem',
                    },
                },
                '.input-xl-dt-shared': {
                    '&::-webkit-datetime-edit': {
                        height: '3.5rem',
                        lineHeight: '3.5rem',
                    },
                    '&::-webkit-date-and-time-value': {
                        paddingTop: '1rem',
                    },
                },
                '.input-xl-dt-label': {
                    '&::-webkit-datetime-edit': {
                        height: '2.25rem',
                        lineHeight: '2.125rem',
                    },
                    '&::-webkit-date-and-time-value': {
                        paddingTop: 0,
                    },
                },
                '.input-d': {
                    '&::-webkit-calendar-picker-indicator': {
                        right: '0.875rem',
                    },
                },
                '.input-t': {
                    '&::-webkit-calendar-picker-indicator': {
                        right: '0.875rem',
                    },
                },
                '.input-d-rtl': {
                    //type === 'date' rtl
                    '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
                        position: 'absolute',
                        right: '0',
                    },
                    '&::-webkit-calendar-picker-indicator': {
                        left: '0.5rem',
                    },
                },
                '.input-t-rtl': {
                    //type === 'time' rtl
                    '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
                        position: 'absolute',
                        right: '0.5rem',
                    },
                    '&::-webkit-calendar-picker-indicator': {
                        left: '0.5rem',
                    },
                },
                '.input-dt-local-rtl': {
                    //type === 'datetime-local' rtl
                    '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
                        position: 'absolute',
                        right: '0',
                    },
                    '&::-webkit-calendar-picker-indicator': {
                        left: '0.5rem',
                    },
                },
                '.input-rsb-hidden': {
                    '&:not(:hover):not(:focus):not(:invalid)': {
                        clipPath: `inset(calc(var(--border-i-width) * -1) 0.15rem calc(var(--border-i-width) * -1) 0)`,
                    },
                },
                '.input-lsb-hidden': {
                    '&:not(:hover):not(:focus):not(:invalid)': {
                        clipPath: `inset(calc(var(--border-i-width) * -1) 0 calc(var(--border-i-width) * -1) 0.15rem)`,
                    },
                },
                '.input-tbb-hidden': {
                    '&:not(:hover):not(:focus):not(:invalid)': {
                        clipPath: `inset(0.15rem calc(var(--border-i-width) * -1) 0 calc(var(--border-i-width) * -1))`,
                    },
                },
                '.input-bbb-hidden': {
                    '&:not(:hover):not(:focus):not(:invalid)': {
                        clipPath: `inset(0 calc(var(--border-i-width) * -1) 0.15rem calc(var(--border-i-width) * -1))`,
                    },
                },
                '.input-rsb-clip-path': {
                    clipPath: `inset(calc(var(--border-i-width) * -1) 0.15rem calc(var(--border-i-width) * -1) 0)`,
                },
                '.input-lsb-clip-path': {
                    clipPath: `inset(calc(var(--border-i-width) * -1) 0 calc(var(--border-i-width) * -1) 0.15rem)`,
                },
                '.input-tbb-clip-path': {
                    clipPath: `inset(0.15rem calc(var(--border-i-width) * -1) 0 calc(var(--border-i-width) * -1))`,
                },
                '.input-bbb-clip-path': {
                    clipPath: `inset(0 calc(var(--border-i-width) * -1) 0.15rem calc(var(--border-i-width) * -1))`,
                },
                '.brcrumb-li': {
                    '& a, & span': {
                        padding: '0.5rem',
                    },
                },
                '.hidden-scroll': {
                    '&::-webkit-scrollbar': {
                        width: 12,
                        height: 12,
                        cursor: 'pointer',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                        backgroundClip: 'content-box',
                        borderRadius: '100px',
                        border: '3px solid transparent',
                    },
                    '&:hover::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgb(var(--goku))',
                    },
                },
            });
        }),
        plugin(function ({ addVariant }) {
            for (let state of ['checked', 'selected', 'active', 'disabled']) {
                addVariant(`moon-${state}`, [
                    `&[aria-${state}="true"]`,
                    `:where([aria-${state}="true"]) &`,
                ]);
                addVariant(`moon-not-${state}`, [
                    `&[aria-${state}="false"]`,
                    `:where([aria-${state}="false"]) &`,
                ]);
            }
            addVariant(`moon-open`, [
                `&[aria-open="true"]`,
                `:where([aria-open="true"]) &`,
                `&[data-state="open"]`,
                `:where([data-state="open"]) &`,
            ]);
        }),
    ],
};