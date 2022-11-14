"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _gatsby = require("gatsby");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["to", "label", "isUppercase", "isDisabled"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Chip = function Chip(_ref) {
  var to = _ref.to,
    label = _ref.label,
    isUppercase = _ref.isUppercase,
    isDisabled = _ref.isDisabled,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(ChipRoot, {
    className: "chip",
    isUppercase: isUppercase,
    isDisabled: isDisabled
  }, /*#__PURE__*/_react["default"].createElement(ChipElement, Object.assign({
    to: to
  }, props), label));
};
var _default = Chip;
exports["default"] = _default;
var ChipRoot = _styledComponents["default"].span.withConfig({
  displayName: "chip__ChipRoot",
  componentId: "sc-1m5yrbw-0"
})(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
    isDisabled = _ref2.isDisabled;
  return [{
    "display": "flex"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    a.active {\n      ", ";\n    }\n  "])), {
    "backgroundColor": "var(--bg-input)"
  }), isUppercase && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      a {\n        text-transform: uppercase;\n      }\n    "])))], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});
var ChipElement = (0, _styledComponents["default"])(_gatsby.Link).withConfig({
  displayName: "chip__ChipElement",
  componentId: "sc-1m5yrbw-1"
})(function (_ref3) {
  (0, _objectDestructuringEmpty2["default"])(_ref3);
  return [{
    "display": "flex"
  }, {
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "borderRadius": "4px",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "backgroundColor": "transparent",
    ":hover": {
      "backgroundColor": "var(--bg-button)"
    },
    ":active": {
      "backgroundColor": "var(--bg-button-hover)"
    }
  }, {
    "fontWeight": "500"
  }, {
    "color": "var(--text-button)"
  }, {
    "fontSize": "0.9375rem"
  }, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    user-select: none;\n    cursor: pointer;\n  "])))];
});