"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = Tabs;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _typography = require("../../elements/typography");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

/**
 * HeadlessUI "Tabs"
 * Customized for twin.macro
 * https://headlessui.dev/react/tabs
 */

function Tabs(_ref) {
  var items = _ref.items,
    tabGroupProps = _ref.tabGroupProps;
  if (!items) return null;
  return /*#__PURE__*/_react["default"].createElement(_react2.Tab.Group, tabGroupProps, /*#__PURE__*/_react["default"].createElement(_StyledTabList, null, Object.keys(items).map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(_react2.Tab, {
      as: _react.Fragment,
      key: category
    }, function (_ref2) {
      var selected = _ref2.selected;
      return /*#__PURE__*/_react["default"].createElement(_StyledButton, {
        $_css: [{
          "width": "100%",
          "borderRadius": "0.5rem",
          "paddingTop": "0.625rem",
          "paddingBottom": "0.625rem",
          "fontSize": "0.8125rem",
          "fontWeight": "500",
          "lineHeight": "1.25rem",
          "--tw-text-opacity": "1",
          "color": "rgb(0 138 146 / var(--tw-text-opacity))",
          "--tw-ring-opacity": "0.6",
          "--tw-ring-color": "rgb(0 194 206 / var(--tw-ring-opacity))",
          "--tw-ring-offset-width": "2px",
          "--tw-ring-offset-color": "#33CED8",
          ":focus": {
            "outline": "2px solid transparent",
            "outlineOffset": "2px",
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
          }
        }, selected ? {
          "--tw-bg-opacity": "1 !important",
          "backgroundColor": "rgb(0 194 206 / var(--tw-bg-opacity)) !important",
          "--tw-text-opacity": "1",
          "color": "rgb(0 0 0 / var(--tw-text-opacity))",
          "--tw-shadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          "--tw-shadow-colored": "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
          "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        } : {
          "color": "var(--text-primary)",
          ":hover": {
            "backgroundColor": "rgb(0 194 206 / 0.2)",
            "color": "var(--text-primary)"
          }
        }]
      }, category);
    });
  })), /*#__PURE__*/_react["default"].createElement(_StyledTabPanels, null, Object.values(items).map(function (group, idx) {
    return /*#__PURE__*/_react["default"].createElement(_StyledTabPanel, {
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("ul", null, group));
  })));
}
var _StyledTabList = (0, _styledComponents["default"])(_react2.Tab.List).withConfig({
  displayName: "tabs___StyledTabList",
  componentId: "sc-eav6nh-0"
})({
  "display": "flex",
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-space-x-reverse": "0",
    "marginRight": "calc(0.25rem * var(--tw-space-x-reverse))",
    "marginLeft": "calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))"
  },
  "borderRadius": "0.5rem",
  "backgroundColor": "rgb(0 81 87 / 0.2)",
  "padding": "0.25rem"
});
var _StyledButton = (0, _styledComponents["default"])("button").withConfig({
  displayName: "tabs___StyledButton",
  componentId: "sc-eav6nh-1"
})(["", ""], function (p) {
  return p.$_css;
});
var _StyledTabPanels = (0, _styledComponents["default"])(_react2.Tab.Panels).withConfig({
  displayName: "tabs___StyledTabPanels",
  componentId: "sc-eav6nh-2"
})({
  "marginTop": "0.5rem"
});
var _StyledTabPanel = (0, _styledComponents["default"])(_react2.Tab.Panel).withConfig({
  displayName: "tabs___StyledTabPanel",
  componentId: "sc-eav6nh-3"
})({
  "marginTop": "24px",
  "borderRadius": "0.5rem",
  "--tw-ring-opacity": "0.6",
  "--tw-ring-color": "rgb(0 194 206 / var(--tw-ring-opacity))",
  "--tw-ring-offset-width": "2px",
  "--tw-ring-offset-color": "#33CED8",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
  }
});