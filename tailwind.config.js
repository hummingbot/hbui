module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      backgroundColor: {
        brand: "var(--bg-brand)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)"
      },
      textColor: {
        brand: "var(--text-brand)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)"
      },
      fillColor: {
        brand: "var(--fill-brand)",
        primary: "var(--fill-primary)",
        secondary: "var(--fill-secondary)",
        tertiary: "var(--fill-tertiary)"
      },
    }
  },
  plugins: [],
}