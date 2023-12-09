export default function (scheme) {
  return {
    name: scheme.name,
    type: scheme.type,
    colors: {
      "editor.background": scheme.editor.background,
      "editor.foreground": scheme.editor.foreground,
      "editorLineNumber.activeForeground": scheme.editor.lineNumbers.active,
      "editorLineNumber.foreground": scheme.editor.lineNumbers.all,
      "editorGutter.addedBackground": "#4ade8033",
      "editorGutter.modifiedBackground": "#fb923c52",
      // Active item in the tree and list
      "list.activeSelectionBackground": "#c084fc33",
      "list.activeSelectionForeground": "#d4d4d8",
      // Hover item in the tree and list
      "list.hoverBackground": "#18181b",
      "list.hoverForeground": "#d4d4d8",

      "list.inactiveFocusBackground": "#1d2d3e",
      "list.inactiveSelectionBackground": "#18181b",
      "list.inactiveSelectionForeground": "#d4d4d8",

      "panel.background": scheme.panel.background,
      "quickInput.background": scheme.list.background,
      "sideBar.background": scheme.panel.background,
      "sideBar.border": scheme.editor.borders,
      "sideBar.foreground": "#6b7280",
      "sideBarTitle.foreground": "#bbbbbb",
      "terminal.background": scheme.panel.background,

      "activityBar.background": scheme.panel.background,
      "activityBar.border": scheme.editor.borders,
      "activityBar.activeBorder": scheme.activityBar.activeBorder,
      "activityBar.foreground": scheme.activityBar.foreground,
      "activityBarBadge.background": scheme.activityBar.badge,
      "activityBarBadge.foreground": "#000000",
      focusBorder: "#00000000",

      "statusBar.background": scheme.statusBar.background,
      "titleBar.activeBackground": scheme.panel.background,
      "titleBar.border": scheme.editor.borders,
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
          "comment.block.documentation entity.name.type",
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
          "punctuation.definition.arrow",
          "support.type.primitive",
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
      //   Italic on public function
      //   {
      //     scope: ["storage.type.function", "storage.modifier"],
      //     settings: {
      //       fontStyle: "italic",
      //     },
      //   },
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
        scope: [
          "variable.language.this",
          "variable.language.this punctuation.definition.variable",
        ],
        settings: {
          foreground: scheme.colors.this,
          fontStyle: "italic",
        },
      },
      {
        scope: ["variable.language.super"],
        settings: {
          foreground: scheme.colors.keyword,
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
          foreground: scheme.colors.punctuation,
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
          "entity.name.type",
          "support.type",
        ],
        settings: {
          foreground: scheme.colors.class,
        },
      },
      {
        scope: [
          "support.function",
          "entity.name.function",
          "meta.class meta.definition.method",
          "meta.class meta.function entity.name",
        ],
        settings: {
          foreground: scheme.colors.method,
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
        scope: ["variable.other.property", "support.variable.property"],
        settings: {
          foreground: scheme.colors.property,
        },
      },
      {
        scope: [
          "constant.language",
          "constant.numeric",
          "constant.numeric keyword.other.unit",
          "constant punctuation.separator",
        ],
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
          "meta.import",
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
      // Blade {{ $foo }}
      {
        scope: ["support.function.construct"],
        settings: {
          foreground: scheme.colors.method,
        },
      },
      {
        scope: [
          "meta.namespace keyword",
          "meta.namespace entity.name.type",
          "meta.namespace punctuation.separator",
        ],
        settings: {
          foreground: scheme.colors.storageModifier,
        },
      },
      {
        name: "Named arguments foo(bar: 1)",
        scope: ["meta.function-call.php entity.name.variable.parameter"],
        settings: {
          foreground: `${scheme.colors.method}88`,
        },
      },
      {
        name: "PHP Attributes #[Route]",
        scope: [
          "meta.attribute.php",
          "meta.attribute.php punctuation.definition",
          "meta.attribute.php support.attribute",
        ],
        settings: {
          foreground: scheme.php.attribute,
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
          foreground: scheme.html.customTag,
        },
      },
      {
        name: "Custom Tags: <x-foo>",
        scope: ["text.html meta.tag.custom punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.customTag}55`,
        },
      },
      {
        name: "<livewire:foo />",
        scope: ["text.html meta.tag.other entity.name.tag"],
        settings: {
          foreground: scheme.html.livewire,
        },
      },
      {
        name: "Custom Tags: <x-foo>",
        scope: ["text.html meta.tag.other punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.livewire}55`,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: scheme.html.attribute,
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
      {
        name: "Parenthesis in Blade instructions @foo()",
        scope: [
          "text.html.php.blade begin.bracket.round",
          "text.html.php.blade end.bracket.round",
        ],
        settings: {
          foreground: scheme.colors.punctuation,
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
      {
        scope: ["meta.import keyword.control", "meta.export keyword.control"],
        settings: {
          foreground: scheme.colors.keyword,
          fontStyle: "italic",
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Tokens: CSS/SCSS
       * ----------------------------------------
       */
      {
        name: "CSS Property Names - 'foo': bar",
        scope: ["source.css meta.property-name support.type.property-name"],
        settings: {
          foreground: scheme.css.property,
        },
      },
      {
        name: "CSS attributes - ",
        scope: ["source.css entity.other.attribute-name"],
        settings: {
          foreground: scheme.css.attribute,
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
        name: "CSS Property Values: Constant colors",
        scope: [
          "source.css constant.other.color",
          "source.css constant.other.color punctuation.definition",
        ],
        settings: {
          foreground: scheme.colors.constant,
        },
      },
      {
        name: "CSS Property Values - Function call and @at rules",
        scope: [
          "source.css support.function",
          "source.css keyword.control.at-rule",
          "source.css keyword.control.at-rule punctuation.definition",
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
        name: "CSS Property Values - Constants",
        scope: ["source.css support.constant"],
        settings: {
          foreground: scheme.colors.keywordControl,
        },
      },
      {
        name: "CSS Selectors - Entity",
        scope: ["source.css entity"],
        settings: {
          foreground: scheme.colors.class,
        },
      },
      {
        name: "CSS Selectors - Entity",
        scope: ["source.css entity.name.tag"],
        settings: {
          foreground: scheme.css.tag,
        },
      },
      {
        name: "@apply content",
        scope: ["source.css meta.at-rule.apply entity.other.attribute-name"],
        settings: {
          foreground: scheme.colors.class,
          fontStyle: "",
        },
      },
      {
        name: "CSS Variables",
        scope: ["source.css variable"],
        settings: {
          foreground: scheme.css.variable,
          fontStyle: "italic",
        },
      },
      {
        name: "CSS Variables",
        scope: ["source.css comment"],
        settings: {
          fontStyle: "italic",
        },
      },
      /**
       * ----------------------------------------
       * Language-specific Dart / Flutter
       * ----------------------------------------
       */
      {
        name: "Functions",
        scope: ["source.dart entity.name.function"],
        settings: {
          foreground: scheme.dart.function,
        },
      },
      {
        name: "Keywords and punctuation",
        scope: ["source.dart keyword.control", "source.dart punctuation.dot"],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        name: "Keywords and punctuation",
        scope: ["source.dart keyword.declaration"],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
    ],
    semanticHighlighting: false,
    // semanticTokenColors: {
    //   "method.defaultLibrary": {
    //     foreground: scheme.colors.method,
    //     fontStyle: "underline",
    //   },
    // },
  };
}
