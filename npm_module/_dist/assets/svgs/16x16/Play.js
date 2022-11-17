"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
function Play(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "13",
    viewBox: "0 0 11 13",
    tw: "fill-current text-primary"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.938 5.028L1.688.153C1.007-.245 0 .153 0 1.114v9.75c0 .89.938 1.43 1.688.985l8.25-4.875a1.14 1.14 0 000-1.946z"
  }));
}
var _default = Play;
exports["default"] = _default;