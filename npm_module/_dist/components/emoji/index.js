"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
Emoji.propTypes = {
  emoji: _propTypes["default"].string,
  label: _propTypes["default"].string
};
function Emoji(_ref) {
  var children = _ref.children,
    label = _ref.label,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("span", {
    role: "img",
    "aria-label": label || 'emoji',
    className: "tw-mx-0.5",
    style: Object.assign({}, style)
  }, children);
}
var _default = Emoji;
exports["default"] = _default;