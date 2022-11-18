"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["active"];
function PowerSwitch(_ref) {
  var active = _ref.active,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg, Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    fill: "none",
    viewBox: "0 0 14 14"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: active ? "00C2CE" : "#C9CDCF",
    d: "M10.391 1.285c-.164-.11-.383-.055-.465.11l-.328.574c-.082.136-.027.328.11.437A5.434 5.434 0 0112.25 7a5.467 5.467 0 01-5.468 5.469A5.45 5.45 0 011.312 7c0-1.914.985-3.637 2.517-4.594.136-.11.191-.3.109-.437l-.328-.574c-.082-.165-.301-.22-.465-.11C1.258 2.488-.027 4.594 0 7.027c0 3.72 3.063 6.782 6.782 6.754A6.78 6.78 0 0013.562 7c0-2.406-1.284-4.512-3.17-5.715zM7.438 7.547V.328A.353.353 0 007.11 0h-.656a.332.332 0 00-.329.328v7.219c0 .191.137.328.329.328h.656a.332.332 0 00.328-.328z"
  }));
}
var _default = PowerSwitch;
exports["default"] = _default;
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "PowerSwitch___StyledSvg",
  componentId: "sc-1l1ny36-0"
})({
  "fill": "currentColor",
  "color": "var(--text-primary)"
});