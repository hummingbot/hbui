/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={hummingbotPrismHighlightingStyle} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

const hummingbotPrismHighlightingStyle = {
  "code[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "#212627",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": "0.5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#212627",
    "padding": "0.1em",
    "borderRadius": "0.3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "#5FFFD7"
  },
  "prolog": {
    "color": "#5FFFD7"
  },
  "doctype": {
    "color": "#5FFFD7"
  },
  "cdata": {
    "color": "#5FFFD7"
  },
  "punctuation": {
    "color": "#fefefe"
  },
  "property": {
    "color": "#f8f8f2" //
  },
  "tag": {
    "color": "#f8f8f2" //
  },
  "constant": {
    "color": "#f8f8f2" //
  },
  "symbol": {
    "color": "#f8f8f2" //
  },
  "deleted": {
    "color": "#f8f8f2" //
  },
  "boolean": {
    "color": "#00e0e0"
  },
  "number": {
    "color": "#00e0e0"
  },
  "selector": {
    "color": "#a2a2a2"
  },
  "attr-name": {
    "color": "#a2a2a2"
  },
  "string": {
    "color": "#a2a2a2"
  },
  "char": {
    "color": "#a2a2a2"
  },
  "builtin": {
    "color": "#a2a2a2"
  },
  "inserted": {
    "color": "#a2a2a2"
  },
  "operator": {
    "color": "#00e0e0"
  },
  "entity": {
    "color": "#00e0e0",
    "cursor": "help"
  },
  "url": {
    "color": "#00e0e0"
  },
  ".language-css .token.string": {
    "color": "#00e0e0"
  },
  ".style .token.string": {
    "color": "#00e0e0"
  },
  "variable": {
    "color": "#00e0e0"
  },
  "atrule": {
    "color": "#5FFFD7"
  },
  "attr-value": {
    "color": "#5FFFD7"
  },
  "function": {
    "color": "#5FFFD7"
  },
  "keyword": {
    "color": "#00e0e0"
  },
  "regex": {
    "color": "#5FFFD7"
  },
  "important": {
    "color": "#5FFFD7",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
}
