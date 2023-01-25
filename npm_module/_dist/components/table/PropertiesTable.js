"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PropertiesTable = PropertiesTable;
exports.PropertiesTableRow = PropertiesTableRow;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../../hbui/elements/typography");
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

var PropsTableRowElement = _styledComponents["default"].span.withConfig({
  displayName: "PropertiesTable__PropsTableRowElement",
  componentId: "sc-69hfku-0"
})(function () {
  return [{
    "display": "grid",
    "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
    "gap": "1rem"
  }];
});
var _StyledPropsTableRowElement2 = (0, _styledComponents["default"])(PropsTableRowElement).withConfig({
  displayName: "PropertiesTable___StyledPropsTableRowElement2",
  componentId: "sc-69hfku-1"
})({
  "marginBottom": "1rem"
});
var _StyledPropsTableRowElement = (0, _styledComponents["default"])(PropsTableRowElement).withConfig({
  displayName: "PropertiesTable___StyledPropsTableRowElement",
  componentId: "sc-69hfku-2"
})({
  "marginBottom": "2rem",
  "borderBottomWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
  "paddingBottom": "0.5rem",
  ".dark &": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(95 255 215 / var(--tw-border-opacity))"
  }
});
function PropertiesTable(_ref) {
  var title = _ref.title,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_typography.H6, null, title || 'Parameters'), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_StyledPropsTableRowElement, null, /*#__PURE__*/_react["default"].createElement(_StyledP, {
    isBold: true
  }, "Prop Name"), /*#__PURE__*/_react["default"].createElement(_StyledP2, {
    isBold: true
  }, "Type"), /*#__PURE__*/_react["default"].createElement(_StyledP3, {
    isBold: true
  }, "Required"), /*#__PURE__*/_react["default"].createElement(_StyledP4, {
    isBold: true
  }, "Description")), children);
}
function PropertiesTableRow(_ref2) {
  var propName = _ref2.propName,
    type = _ref2.type,
    required = _ref2.required,
    description = _ref2.description;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StyledPropsTableRowElement2, null, /*#__PURE__*/_react["default"].createElement(_StyledP5, {
    isBold: true
  }, propName), /*#__PURE__*/_react["default"].createElement(_StyledP6, null, type), /*#__PURE__*/_react["default"].createElement(_StyledP7, null, required), /*#__PURE__*/_react["default"].createElement(_StyledP8, null, description)));
}
var _StyledP = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP",
  componentId: "sc-69hfku-3"
})({
  "gridColumn": "span 3 / span 3"
});
var _StyledP2 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP2",
  componentId: "sc-69hfku-4"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP3 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP3",
  componentId: "sc-69hfku-5"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP4 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP4",
  componentId: "sc-69hfku-6"
})({
  "gridColumn": "span 5 / span 5"
});
var _StyledP5 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP5",
  componentId: "sc-69hfku-7"
})({
  "gridColumn": "span 3 / span 3"
});
var _StyledP6 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP6",
  componentId: "sc-69hfku-8"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP7 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP7",
  componentId: "sc-69hfku-9"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP8 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropertiesTable___StyledP8",
  componentId: "sc-69hfku-10"
})({
  "gridColumn": "span 5 / span 5"
});