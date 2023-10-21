import colors from "./colors/papaja.js";

const scheme = {
  name: "Purple",
  type: "dark",
  colors: {
    class: colors.purple[500],
    comment: colors.gray[600],
    constant: colors.purple[500],
    keyword: colors.red[400],
    keywordControl: colors.orange[200],
    method: colors.purple[400],
    property: colors.purple[200],
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
  terminal: {
    background: "#121214",
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
    variable: colors.blue[300],
  },
};

export default scheme;
