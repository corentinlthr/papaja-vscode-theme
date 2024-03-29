import colors from "../lib/colors.js";

const scheme = {
  name: "Purple",
  type: "dark",
  colors: {
    class: colors.purple[400],
    comment: colors.gray[600],
    constant: colors.mauve[300],
    keyword: colors.orange[300],
    keywordControl: colors.yellow[200],
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
    attribute: `${colors.yellow[100]}`,
  },
  html: {
    tag: colors.purple[400],
    customTag: colors.purple[400],
    livewire: colors.purple[400],
    attribute: colors.orange[200],
    blade: colors.orange[300],
  },
  json: {
    key: colors.purple[300],
  },
  js: {
    objectKey: colors.purple[300],
  },
  css: {
    attribute: colors.orange[200],
    property: colors.purple[300],
    value: colors.gray[300],
    variable: colors.gray[300],
    tag: colors.orange[400],
  },
  dart: {
    function: colors["yellow"][100],
  },
  python: {
    builtIn: colors["yellow"][100],
  },
};

export default scheme;
