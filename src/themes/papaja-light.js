import colors from "../lib/colors.js";

const scheme = {
  name: "Purple",
  type: "light",
  colors: {
    class: colors.purple[700],
    comment: colors.gray[400],
    constant: colors.yellow[600],
    enumMember: colors.yellow[700],
    keyword: colors.orange[600],
    keywordControl: colors.orange[500],
    method: colors.purple[500],
    parameter: colors.orange[100],
    parameterLabel: colors.orange[800],
    property: colors.purple[950],
    punctuation: colors.gray[500],
    storage: colors.orange[500],
    string: colors.green[700],
    stringQuote: colors.green[700],
    variable: colors.gray[900],
    variableImportPrefix: colors.teal[200],
    variableDefaultLibrary: colors.yellow[700],
  },
  activityBar: {
    activeBorder: colors.orange[600],
    foreground: colors.gray[600],
    badge: colors.orange[600],
    badgeForeground: colors.gray[100],
  },
  editor: {
    background: colors.gray[50],
    foreground: colors.gray[800],
    borders: colors.gray[300],
    keybindingLabel: colors.gray[500],
    lineNumbers: {
      all: `${colors.gray[200]}`,
      active: colors.gray[400],
    },
  },
  statusBar: {
    background: `${colors.gray[50]}`,
    foreground: colors.gray[900],
  },
  panel: {
    background: colors.gray[100],
    foreground: colors.gray[300],
  },
  list: {
    background: colors.gray[100],
    foreground: colors.gray[300],
    activeBackground: `${colors.orange[500]}22`,
    activeForeground: colors.orange[700],
    highlightForeground: colors.orange[600],
  },
  php: {
    use: `${colors.purple[800]}88`,
    attribute: `${colors.blue[700]}`,
  },
  html: {
    tag: colors.purple[800],
    customTag: colors.blue[800],
    livewire: colors.purple[400],
    attribute: colors.orange[700],
    // customAttribute: colors.blue[700],
    customAttribute: colors.orange[700],
    blade: colors.orange[700],
  },
  css: {
    property: colors.orange[800],
    class: colors.purple[700],
    value: colors.gray[300],
    constant: colors.orange[600],
    variable: colors.gray[900],
    tag: colors.gray[600],
  },
  dart: {
    method: colors["purple"][500],
  },
  python: {
    builtIn: colors["yellow"][100],
  },
};

export default scheme;
