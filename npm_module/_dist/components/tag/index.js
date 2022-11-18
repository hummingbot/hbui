"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _typography = require("../../elements/typography");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var _excluded = ["label", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Tag(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(TagElement, Object.assign({
    variant: variant
  }, props), /*#__PURE__*/_react["default"].createElement(_StyledLabelNano, null, label));
}
var _default = Tag;
exports["default"] = _default;
var defaultStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(174 180 183 / var(--tw-border-opacity))"
}, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["p { color: ", ";"])), "#aeb4b7")];
var infoStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(49 141 255 / var(--tw-border-opacity))"
}, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["p { color: ", ";"])), "#318dff")];
var successStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))"
}, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["p { color: ", ";"])), "#00c2ce")];
var dangerStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))"
}, (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["p { color: ", ";"])), "#eb5757")];
var warningStyle = [{
  "--tw-border-opacity": "1",
  "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))"
}, (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["p { color: ", ";"])), "#f08727")];
var tagVariants = {
  "default": defaultStyle,
  info: infoStyle,
  success: successStyle,
  danger: dangerStyle,
  warning: warningStyle
};
var TagElement = _styledComponents["default"].div.withConfig({
  displayName: "tag__TagElement",
  componentId: "sc-efwltt-0"
})(function (_ref2) {
  var isUppercase = _ref2.isUppercase;
  return [{
    "display": "inline-flex",
    "userSelect": "none",
    "justifyContent": "center",
    "borderRadius": "4px",
    "borderWidth": "1px",
    "padding": "0.25rem"
  }, function (_ref3) {
    var _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? 'default' : _ref3$variant;
    return tagVariants[variant];
  }, isUppercase && {
    "textTransform": "uppercase"
  }];
});
var _StyledLabelNano = (0, _styledComponents["default"])(_typography.LabelNano).withConfig({
  displayName: "tag___StyledLabelNano",
  componentId: "sc-efwltt-1"
})({
  "fontWeight": "500"
});