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
    200: "#e0d6fe",
    300: "#bab3ee",
    400: "#a394e5",
    500: "#a78bfa",
  },
  orange: {
    50: "#fff6ed",
    100: "#ffecd4",
    200: "#ffd4a8",
    300: "#ffb571",
    400: "#ff9142",
    500: "#fe6a11",
  },
  green: {
    300: "#86efac",
  },
  yellow: {
    50: "#fefbe8",
    100: "#fff8c2",
    200: "#ffed89",
    300: "#ffdc4a",
    400: "#fdc612",
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
    keyword: colors.orange[300],
    keywordControl: colors.yellow[100],
    method: colors.purple[400],
    property: colors.purple[200],
    punctuation: colors.gray[500],
    storageModifier: colors.orange[200],
    string: colors.green[300],
    stringQuote: colors.green[300],
    variable: colors.gray[200],
    this: colors.purple[400],
  },
  activityBar: {
    activeBorder: colors.yellow[100],
    foreground: colors.yellow[100],
    badge: colors.yellow[100],
  },
  editor: {
    background: colors.gray[900],
    foreground: colors.gray[200],
    borders: colors.gray[800],
    lineNumbers: {
      all: `${colors.gray[950]}00`,
      active: colors.gray[700],
    },
  },
  statusBar: {
    background: `${colors.purple[500]}33`,
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
    attribute: colors.orange[200],
    component: colors.purple[400],
    blade: colors.yellow[200],
  },
  json: {
    key: colors.purple[300],
  },
  js: {
    objectKey: colors.purple[300],
  },
  css: {
    property: colors.yellow[200],
    value: colors.gray[300],
    variable: colors.gray[300],
  },
};

export default scheme;
