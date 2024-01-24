const { banyuTheme } = require("@banyu/theme/plugin");
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
    extend: {},
  },
  plugins: [
    banyuTheme({
      themes: {

      },
    }),
  ],
  presets: [
    require('./banyu-preset.js')
  ],
}

