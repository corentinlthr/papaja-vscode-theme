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
    activeBorder: colors.orange[300],
    foreground: colors.orange[200],
    badge: colors.orange[400],
    badgeForeground: colors.gray[900],
  },
  editor: {
    background: colors.gray[900],
    foreground: colors.gray[200],
    borders: colors.gray[800],
    keybindingLabel: colors.gray[500],
    lineNumbers: {
      all: `${colors.gray[950]}00`,
      active: colors.gray[700],
    },
  },
  statusBar: {
    background: `${colors.gray[950]}55`,
    foreground: colors.gray[200],
  },
  panel: {
    background: colors.gray[950],
    foreground: colors.gray[300],
  },
  list: {
    background: colors.gray[800],
    foreground: colors.gray[300],
    activeBackground: `${colors.orange[300]}22`,
    activeForeground: colors.orange[200],
    highlightForeground: colors.orange[300],
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
    customAttribute: colors.orange[300],
    // customAttribute: colors.blue[200],
    blade: colors.orange[400],
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
