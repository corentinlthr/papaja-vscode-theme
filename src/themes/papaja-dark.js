import colors from "../lib/colors.js";

const scheme = {
  name: "Purple",
  type: "dark",
  colors: {
    // class: colors.blue[300],
    class: colors.purple[400],
    comment: colors.gray[600],
    // constant: colors.yellow[100],
    constant: colors.blue[300],
    keyword: colors.orange[300],
    // keywordControl: colors.yellow[200],
    keywordControl: colors.yellow[100],
    method: colors.purple[400],
    property: colors.purple[200],
    punctuation: colors.gray[400],
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
    attribute: `${colors.orange[200]}`,
  },
  html: {
    tag: colors.purple[400],
    attribute: colors.orange[200],
    component: colors.purple[400],
    blade: colors.orange[300],
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
