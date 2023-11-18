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
  blue: {
    300: "#7dd3fc",
    400: "#38bdf8",
  },
  orange: "#fdba74",
  pink: "#d8b4fe",
  yellow: "#fed7aa",
  green: "#86efac",
};

const scheme = {
  name: "Blue",
  type: "dark",
  colors: {
    class: colors.blue[400],
    comment: "#575760",
    constant: "#a5b4fc",
    keyword: colors.orange,
    keywordControl: colors.yellow,
    method: colors.blue[300],
    property: "#bae6fd",
    punctuation: colors.gray[500],
    storageModifier: colors.yellow,
    string: colors.green,
    stringQuote: colors.green,
    variable: colors.gray[300],
  },
  editor: {
    background: colors.gray[900],
    foreground: colors.gray[300],
    lineNumbers: {
      all: colors.gray[900],
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
    use: `${colors.blue[400]}55`,
  },
  html: {
    tag: colors.blue[300],
    attribute: colors.orange,
    component: colors.blue[300],
    blade: colors.yellow,
  },
  json: {
    key: colors.yellow,
  },
  js: {
    objectKey: "#bae6fd",
  },
  css: {
    property: colors.yellow,
    value: colors.pink,
    variable: colors.gray[300],
  },
};

export default scheme;
