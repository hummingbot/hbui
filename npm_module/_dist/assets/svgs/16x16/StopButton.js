"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
function StopButton(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    tw: "fill-current text-primary"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.375 0h-8.25C.492 0 0 .516 0 1.125v8.25A1.11 1.11 0 001.125 10.5h8.25c.61 0 1.125-.492 1.125-1.125v-8.25A1.14 1.14 0 009.375 0z"
  }));
}
var _default = StopButton;
exports["default"] = _default;