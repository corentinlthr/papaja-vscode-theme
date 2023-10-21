import colors from "./colors/papaja.js";

const scheme = {
  name: "2023",
  type: "light",
  colors: {
    class: colors.purple[500],
    comment: colors.gray[400],
    constant: colors.purple[500],
    keyword: colors.red[600],
    keywordControl: colors.orange[500],
    method: colors.purple[600],
    property: colors.purple[700],
    punctuation: colors.gray[600],
    storageModifier: colors.red[300],
    string: colors.green[500],
    stringQuote: colors.green[400],
    variable: colors.gray[700],
  },
  editor: {
    background: colors.gray[100],
    foreground: colors.gray[900],
    lineNumbers: {
      all: `${colors.gray[100]}00`,
      active: colors.gray[300],
    },
  },
  terminal: {
    background: colors.gray[200],
  },
  php: {
    use: `${colors.purple[400]}bb`,
  },
  html: {
    tag: colors.purple[700],
    attribute: colors.red[600],
    component: colors.purple[700],
    blade: colors.orange[500],
  },
  json: {
    key: colors.purple[600],
  },
  css: {
    property: colors.orange[500],
    value: colors.gray[700],
  },
};

export default scheme;
