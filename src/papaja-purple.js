const colors = {
  gray: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  purple: {
    300: "#bab3ee",
    400: "#a394e5",
    500: "#a78bfa",
  },
  red: {
    300: "#f1beb0",
    400: "#e79882",
    500: "#d87155",
  },
  green: {
    300: "#6ee7b7",
  },
  orange: {
    50: "#fcf8ea",
    100: "#f9edc8",
    200: "#f5da93",
    300: "#eebe56",
    400: "#eaad3f",
  },
  blue: {
    50: "#ebf4ff",
    100: "#dbeaff",
    200: "#bed7ff",
    300: "#97bbff",
    400: "#6e93ff",
  },
};

const scheme = {
  name: "Purple",
  type: "dark",
  colors: {
    class: colors.purple[500],
    comment: colors.gray[600],
    constant: colors.blue[300],
    keyword: colors.red[400],
    keywordControl: colors.orange[200],
    method: colors.purple[400],
    property: colors.purple[300],
    punctuation: colors.gray[500],
    storageModifier: colors.red[300],
    string: colors.green[300],
    stringQuote: colors.green[300],
    variable: colors.gray[300],
  },
  editor: {
    background: colors.gray[900],
    foreground: colors.gray[300],
    lineNumbers: {
      all: `${colors.gray[950]}00`,
      active: colors.gray[700],
    },
  },
  panel: {
    background: colors.gray[950],
    foreground: colors.gray[300],
  },
  list: {
    background: colors.gray[800],
    foreground: colors.gray[300],
  },
  php: {
    use: `${colors.purple[400]}55`,
  },
  html: {
    tag: colors.purple[400],
    attribute: colors.red[400],
    component: colors.purple[400],
    blade: colors.orange[200],
  },
  json: {
    key: colors.purple[300],
  },
  js: {
    objectKey: colors.purple[300],
  },
  css: {
    property: colors.orange[200],
    value: colors.gray[300],
    variable: colors.gray[300],
  },
};

export default scheme;
