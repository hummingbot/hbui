"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

function Copy(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg, Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "15",
    fill: "none",
    viewBox: "0 0 14 15"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#788187",
    d: "M12.25.75H6.125c-.984 0-1.75.793-1.75 1.75v6.125c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75V2.5c0-.957-.793-1.75-1.75-1.75zm.438 7.875a.45.45 0 01-.438.438H6.125a.432.432 0 01-.438-.438V2.5a.45.45 0 01.438-.438h6.125a.47.47 0 01.438.438v6.125zM8.311 13a.45.45 0 01-.437.438H1.75A.432.432 0 011.312 13V6.875a.45.45 0 01.438-.438H3.5V5.125H1.75c-.984 0-1.75.793-1.75 1.75V13c0 .984.766 1.75 1.75 1.75h6.125c.957 0 1.75-.766 1.75-1.75v-1.75H8.312V13z"
  }));
}
var _default = Copy;
exports["default"] = _default;
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "Copy___StyledSvg",
  componentId: "sc-l7f55c-0"
})({
  "fill": "currentColor",
  "color": "var(--text-primary)"
});