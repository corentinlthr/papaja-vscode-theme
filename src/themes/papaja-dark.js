import colors from "../lib/colors.js";

const scheme = {
  name: "Purple",
  type: "dark",
  colors: {
    class: colors.purple[400],
    comment: colors.gray[600],
    constant: colors.yellow[200],
    enumMember: colors.yellow[200],
    keyword: colors.orange[300],
    keywordControl: colors.orange[300],
    method: colors.purple[300],
    parameter: colors.orange[100],
    parameterLabel: colors.orange[200],
    property: colors.purple[200],
    punctuation: colors.gray[400],
    storage: colors.orange[200],
    string: colors.green[400],
    stringQuote: colors.green[300],
    variable: colors.gray[200],
    variableImportPrefix: colors.teal[200],
    variableDefaultLibrary: colors.yellow[100],
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
    use: `${colors.purple[300]}55`,
    attribute: `${colors.blue[400]}`,
  },
  html: {
    tag: colors.purple[400],
    customTag: colors.blue[400],
    livewire: colors.purple[400],
    attribute: colors.orange[300],
    customAttribute: colors.blue[200],
    blade: colors.orange[400],
  },
  json: {
    key: colors.purple[300],
  },
  js: {
    objectKey: colors.purple[300],
  },
  css: {
    property: colors.orange[200],
    class: colors.purple[400],
    value: colors.gray[300],
    constant: colors.orange[300],
    variable: colors.gray[300],
    tag: colors.gray[400],
  },
  dart: {
    method: colors["purple"][300],
  },
  python: {
    builtIn: colors["yellow"][100],
  },
};

export default scheme;
