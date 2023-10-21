export default function (scheme) {
  return {
    name: scheme.name,
    type: scheme.type,
    semanticHighlighting: false,
    colors: {
      "editor.background": scheme.editor.background,
      "editor.foreground": scheme.editor.foreground,
      "editorLineNumber.activeForeground": scheme.editor.lineNumbers.active,
      "editorLineNumber.foreground": scheme.editor.lineNumbers.all,
      "editorGutter.addedBackground": "#4ade8033",
      "editorGutter.modifiedBackground": "#fb923c52",
      "list.activeSelectionBackground": "#c084fc33",
      "list.activeSelectionForeground": "#d4d4d8",
      "list.hoverBackground": "#18181b",
      "list.hoverForeground": "#d4d4d8",
      "list.inactiveFocusBackground": "#1d2d3e",
      "list.inactiveSelectionBackground": "#18181b",
      "list.inactiveSelectionForeground": "#d4d4d8",
      "panel.background": "#121214",
      "quickInput.background": "#121214",
      "sideBar.background": "#121214",
      "sideBar.border": "#3f3f46",
      "sideBar.foreground": "#6b7280",
      "sideBarTitle.foreground": "#bbbbbb",
      "terminal.background": scheme.terminal.background,
    },
    tokenColors: [
      // Comments and documentation
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: scheme.colors.comment,
        },
      },
      {
        scope: [
          "comment.block.documentation",
          "comment.block.documentation storage",
          "comment.block.documentation keyword",
          "comment.block.documentation punctuation",
          "comment.block.documentation punctuation.definition",
          "comment.block.documentation punctuation.separator",
          "comment.block.documentation variable",
          "comment.block.documentation entity",
          "comment.block.documentation support.class",
        ],
        settings: {
          foreground: scheme.colors.comment,
          fontStyle: "italic",
        },
      },

      // General tokens
      {
        scope: [
          "keyword",
          "storage",
          "keyword.control.flow",
          "keyword.control.return",
          "punctuation.accessor",
        ],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        scope: ["keyword.control"],
        settings: {
          foreground: scheme.colors.keywordControl,
        },
      },
      {
        scope: ["storage.modifier"],
        settings: {
          foreground: scheme.colors.storageModifier,
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: scheme.colors.variable,
        },
      },
      {
        scope: ["variable.language.this", "variable.language.this"],
        settings: {
          foreground: scheme.colors.method,
          fontStyle: "italic",
        },
      },
      {
        scope: ["punctuation", "punctuation.definition.variable"],
        settings: {
          foreground: scheme.colors.method,
        },
      },
      {
        scope: [
          "punctuation.definition",
          "punctuation.separator",
          "punctuation.terminator",
          "punctuation.section",
          "meta.brace",
          "meta.tag.tsx keyword.operator.assignment",
          "meta.tag.jsx keyword.operator.assignment",
        ],
        settings: {
          foreground: `${scheme.colors.method}77`,
        },
      },
      {
        scope: ["meta.method-call", "meta.function-call"],
        settings: {
          foreground: scheme.colors.method,
        },
      },
      {
        scope: ["support.class", "keyword.operator.nullable-type"],
        settings: {
          foreground: scheme.colors.class,
        },
      },
      {
        scope: [
          "meta.class entity.name",
          "meta.class entity.other.inherited-class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: scheme.colors.class,
        },
      },
      {
        scope: [
          "meta.class meta.definition.method",
          "meta.class meta.function entity.name",
          "meta.class meta.function support.function",
        ],
        settings: {
          foreground: scheme.colors.method,
          fontStyle: "bold",
        },
      },
      {
        scope: [
          "meta.function-call",
          "meta.function-call entity.name.function",
          "meta.method-call entity.name.function",
        ],
        settings: {
          foreground: scheme.colors.method,
          fontStyle: "",
        },
      },
      {
        scope: ["entity"],
        settings: {
          foreground: scheme.colors.method,
        },
      },
      {
        scope: ["variable.other.property"],
        settings: {
          foreground: scheme.colors.property,
        },
      },
      {
        scope: ["constant"],
        settings: {
          foreground: scheme.colors.constant,
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: scheme.colors.string,
        },
      },
      {
        scope: ["punctuation.definition.string"],
        settings: {
          foreground: scheme.colors.stringQuote,
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Tokens: PHP
       * ----------------------------------------
       */
      {
        scope: [
          "meta.use",
          "meta.namespace",
          "meta.function.closure storage.type",
        ],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["meta.use punctuation.separator", "meta.use support.other"],
        settings: {
          foreground: scheme.php.use,
        },
      },
      {
        scope: ["support.function.construct"],
        settings: {
          foreground: scheme.colors.method,
        },
      },
      {
        scope: [
          "meta.namespace keyword",
          "meta.namespace entity.name",
          "meta.namespace punctuation.separator",
        ],
        settings: {
          foreground: scheme.colors.keywordControl,
        },
      },
      {
        name: "Named arguments foo(bar: 1)",
        scope: ["meta.function-call.php entity.name.variable.parameter"],
        settings: {
          foreground: `${scheme.colors.method}66`,
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Tokens: HTML/Blade
       * ----------------------------------------
       */
      {
        name: "Tag names",
        scope: ["text.html entity.name.tag"],
        settings: {
          foreground: scheme.html.tag,
        },
      },
      {
        name: "Tag names",
        scope: ["text.html punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.tag}55`,
        },
      },
      {
        name: "Custom Tags: <x-foo>",
        scope: ["text.html meta.tag.custom entity.name.tag"],
        settings: {
          foreground: scheme.html.component,
        },
      },
      {
        name: "Custom Tags: <x-foo>",
        scope: ["text.html meta.tag.custom punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.component}55`,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: scheme.html.attribute,
        },
      },
      {
        name: "Attribute names",
        scope: ["entity.other.attribute-name"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "Blade instructions @foo / + <?php ?>",
        scope: [
          "text.html keyword.blade",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
        ],
        settings: {
          foreground: scheme.html.blade,
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Tokens: JavaScript/JSON
       * ----------------------------------------
       */
      {
        name: "JSON Keys",
        scope: ["source.json string support.type.property-name"],
        settings: {
          foreground: scheme.json.key,
        },
      },
      {
        name: "JS Object keys",
        scope: ["meta.object-literal.key"],
        settings: {
          foreground: scheme.js.objectKey,
        },
      },
      {
        name: "JSON Punctuation",
        scope: [
          "source.json punctuation",
          "source.json punctuation.definition",
          "source.json punctuation.separator",
        ],
        settings: {
          foreground: scheme.colors.punctuation,
        },
      },
      {
        name: "JS Class/variable imports",
        scope: [
          "source.js meta.import variable.other.readwrite",
          "source.jsx meta.import variable.other.readwrite",
          "source.ts meta.import variable.other.readwrite",
          "source.tsx meta.import variable.other.readwrite",
        ],
        settings: {
          foreground: scheme.colors.class,
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Tokens: CSS
       * ----------------------------------------
       */
      {
        name: "CSS Property Names",
        scope: ["source.css meta.property-name"],
        settings: {
          foreground: scheme.css.property,
        },
      },
      {
        name: "CSS Property Values",
        scope: ["source.css meta.property-value"],
        settings: {
          foreground: scheme.css.value,
        },
      },
      {
        name: "@tailwind",
        scope: [
          "meta.at-rule.tailwind",
          "meta.at-rule.tailwind punctuation.definition",
          "meta.at-rule.tailwind keyword.control",
          "meta.at-rule.tailwind variable",
        ],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        name: "@apply @layer",
        scope: [
          "source.css keyword.control.at-rule",
          "source.css keyword.control.at-rule punctuation.definition",
        ],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        name: "@apply content",
        scope: ["source.css meta.at-rule.apply entity"],
        settings: {
          foreground: scheme.colors.property,
        },
      },
      {
        name: "CSS Variables",
        scope: ["source.css variable"],
        settings: {
          foreground: scheme.css.variable,
        },
      },
    ],
  };
}
