const { banyuTheme } = require("@jala-banyu/theme/plugin");
// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.storybook/welcome.stories.mdx",
    "../components/*/src/**/*.{js,jsx,ts,tsx}",
    "../components/*/stories/**/*.{js,jsx,ts,tsx}",
    "../core/theme/src/components/**/*.{js,jsx,ts,tsx}",
    "../core/theme/src/utils/**/*.{js,jsx,ts,tsx}",
    "../core/theme/stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans':
            ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'serif':
            ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        'mono':
            ["IBM Mono Plex", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
    },
  },
  plugins: [
    banyuTheme({
      themes: {

      },
    }),
  ],
}

