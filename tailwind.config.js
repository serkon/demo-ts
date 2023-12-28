// tint & shade color generator
function generateColors(baseName, start = 100, end = 900, step = 100) {
  const colors = {};
  for (let i = start; i <= end; i += step) {
    colors[i] = `var(--${baseName}-${i})`;
  }
  return colors;
}

const colorNames = [
  "primary",
  "secondary",
  "gray",
  "danger",
  "success",
  "warning",
  "info",
];

const colors = colorNames.reduce((acc, color) => {
  return { ...acc, [`${color}`]: generateColors(color, 100, 900) };
}, {});

module.exports = {
  content: [
    "./.nuxt/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{html,js,vue}",
    "./components/**/*.{html,js,vue}",
    "./layouts/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
