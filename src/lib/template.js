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
    semanticHighlighting: true,
    semanticTokenColors: {
      // COMMONS
      annotation: {
        foreground: scheme.colors.keyword,
        // fontStyle: "italic",
      },
      class: {
        foreground: scheme.colors.class,
      },
      "class.annotation": {
        foreground: scheme.colors.keyword,
        fontStyle: "",
      },
      enumMember: {
        foreground: scheme.colors.enumMember,
      },
      method: {
        foreground: scheme.colors.method,
      },
      "method.defaultLibrary": {
        foreground: scheme.colors.method,
      },
      module: {
        foreground: scheme.colors.variableDefaultLibrary,
      },
      parameter: {
        foreground: scheme.colors.variable,
      },
      "parameter.declaration": {
        foreground: scheme.colors.variable,
      },
      "parameter.label": {
        foreground: scheme.colors.parameterLabel,
      },
      property: {
        foreground: scheme.colors.property,
      },
      "property.annotation": {
        foreground: scheme.colors.keyword,
        fontStyle: "italic",
      },
      "variable.importPrefix": {
        foreground: scheme.colors.variableImportPrefix,
      },
      "variable.defaultLibrary": {
        foreground: scheme.colors.variableDefaultLibrary,
      },

      // SPECIFIC: DART
      "method:dart": {
        foreground: scheme.dart.method,
      },

      // SPECIFIC: PYTHON
      "selfParameter:python": {
        foreground: scheme.colors.keyword,
        fontStyle: "italic",
      },
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
          "comment.block.documentation storage.type",
          "comment.block.documentation keyword",
          "comment.block.documentation keyword.other.type",
          "comment.block.documentation punctuation",
          "comment.block.documentation punctuation.definition",
          "comment.block.documentation punctuation.separator",
          "comment.block.documentation punctuation.separator.delimiter",
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

      {
        scope: ["keyword", "storage.type"],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        scope: ["storage"],
        settings: {
          fontStyle: "italic",
          foreground: scheme.colors.storage,
        },
      },
      {
        scope: [
          "meta.namespace keyword",
          "meta.namespace entity.name.type",
          "meta.namespace punctuation.separator",
        ],
        settings: {
          foreground: scheme.colors.storage,
        },
      },
      // The javascript arrow function is under storage.type.function,
      // but we don't want it to be italic.
      {
        scope: ["storage.type.function.arrow"],
        settings: {
          foreground: scheme.colors.keyword,
          fontStyle: "normal",
        },
      },
      {
        scope: ["string", "punctuation.definition.string"],
        settings: {
          foreground: scheme.colors.string,
        },
      },
      {
        scope: [
          "constant",
          "constant.numeric",
          "constant punctuation.separator",
          "constant.numeric keyword.other.unit",
          "support.constant",
          "variable.other.constant",
        ],
        settings: {
          foreground: scheme.colors.constant,
        },
      },
      {
        scope: [
          "punctuation.dot",
          "punctuation.accessor",
          "punctuation.definition.variable",
          "punctuation.definition.arrow",
          "meta.function.php punctuation.separator.delimiter", // PHP pipe in Type|Type

          // YAML/JSON keys
          "entity.name.tag.yaml",
          "support.type.property-name.json",
        ],
        settings: {
          foreground: scheme.colors.keyword,
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace",
          "begin.bracket.round.blade",
          "end.bracket.round.blade",
          "meta.tag.tsx keyword.operator.assignment",
          "meta.tag.jsx keyword.operator.assignment",
          "meta.function.parameters.php punctuation.separator.delimiter", // Override the change created by the rule above for the pipe in Type|Type

          //CSS
          "source.css keyword.operator", // '=' in CSS
          "source.css entity.name.tag", // Tag names in CSS
        ],
        settings: {
          foreground: scheme.colors.punctuation,
        },
      },
      {
        name: "Imports",
        scope: [
          "meta.import",
          "meta.import keyword.control",
          "meta.export keyword.control",
          "keyword.control.import",
          "keyword.other.import",
          "meta.preprocessor.include", // C
          "meta.declaration.dart", // Dart
        ],
        settings: {
          foreground: scheme.colors.keyword,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "support.class",
          "entity.name.type",
          "entity.name.class",
          "entity.other.inherited-class",
          "keyword.other.type",
          "support.type.primitive",
          "variable.language.this",

          // PHP
          "keyword.operator.nullable-type.php", // Question mark in nullable types

          // JS/TS
          "source.js meta.import variable.other.readwrite",
          "source.jsx meta.import variable.other.readwrite",
          "source.ts meta.import variable.other.readwrite",
          "source.tsx meta.import variable.other.readwrite",

          // CSS
          "source.css entity",
        ],
        settings: {
          foreground: scheme.colors.class,
        },
      },
      {
        scope: [
          "support.function",
          "entity.name.function",
          "punctuation.definition.variable.php",

          // JS
          "meta.template.expression punctuation", // String interpolation

          // PHP
          "variable.language.this.php", // $this
          "support.function.construct", // Blade {{ $foo }}
        ],
        settings: {
          foreground: scheme.colors.method,
        },
      },

      {
        scope: ["variable"],
        settings: {
          foreground: scheme.colors.variable,
        },
      },
      {
        scope: ["variable.other.property", "support.variable.property"],
        settings: {
          foreground: scheme.colors.property,
        },
      },
      {
        name: "Super, Self, Me, etc.",
        scope: ["variable.language"],
        settings: {
          foreground: scheme.colors.keyword,
          fontStyle: "italic",
        },
      },
      {
        name: "this",
        scope: ["variable.language.this"],
        settings: {
          fontStyle: "italic",
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
          "source.php meta.function.closure storage.type",
          "source.php meta.function.closure keyword",
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
        name: "Enum values: Enum::FooBar",
        scope: ["constant.other.class.php"],
        settings: {
          foreground: scheme.colors.enumMember,
        },
      },

      {
        name: "Named arguments foo(bar: 1)",
        scope: [
          "meta.function-call.php entity.name.variable.parameter",
          "meta.function-call.php punctuation.separator.colon",
        ],
        settings: {
          foreground: scheme.colors.parameterLabel,
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
        scope: ["entity.name.tag"],
        settings: {
          foreground: scheme.html.tag,
        },
      },
      {
        name: "Tag names Chevrons in React",
        scope: ["source.js punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.tag}55`,
        },
      },
      {
        name: "Tag names Chevrons",
        scope: ["text.html punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.tag}55`,
        },
      },
      {
        name: "Tag Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: scheme.html.attribute,
          fontStyle: "italic",
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
        name: "Custom Tags Chevrons: <x-foo>",
        scope: ["text.html meta.tag.custom punctuation.definition.tag"],
        settings: {
          foreground: `${scheme.html.customTag}55`,
        },
      },
      {
        name: "Custom Tag Attributes",
        scope: ["meta.tag.custom entity.other.attribute-name"],
        settings: {
          foreground: scheme.html.customAttribute,
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
       * Language-specific Tokens: CSS/SCSS
       * ----------------------------------------
       */
      {
        name: "Property Names - 'foo': bar",
        scope: ["source.css meta.property-name support.type.property-name"],
        settings: {
          foreground: scheme.css.property,
        },
      },
      {
        name: "Class names",
        scope: ["source.css entity.other.attribute-name.class"],
        settings: {
          foreground: scheme.css.class,
        },
      },
      {
        name: "html attribute names (type, ...)",
        scope: ["source.css entity.other.attribute-name"],
        settings: {
          foreground: scheme.html.attribute,
          fontStyle: "normal",
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
          foreground: scheme.css.constant,
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
        scope: ["source.css support.constant"],
        settings: {
          foreground: scheme.css.constant,
        },
      },
      {
        scope: ["source.css entity.name.tag"],
        settings: {
          foreground: scheme.css.tag,
        },
      },
      {
        name: "@apply content",
        scope: [
          "source.css meta.at-rule.apply entity.other.attribute-name.class",
        ],
        settings: {
          foreground: scheme.css.class,
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
       * Language-specific C
       * ----------------------------------------
       */
      {
        name: "Imports",
        scope: [
          "source.c meta.preprocessor",
          "source.c meta.preprocessor keyword.control",
          "source.c meta.preprocessor punctuation.definition",
          "source.python keyword.control.import",
          "meta.declaration keyword.other.import", // dart, refactor imports
        ],
        settings: {
          foreground: scheme.colors.keyword,
          fontStyle: "italic",
        },
      },

      /**
       * ----------------------------------------
       * Language-specific Python
       * ----------------------------------------
       */
      {
        name: "Arguments in function",
        scope: ["source.python meta.function-call.arguments"],
        settings: {
          foreground: scheme.colors.variable,
        },
      },
    ],
  };
}
