"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _layout = require("../../elements/layout");
var _excluded = ["children", "containerVariant"];
var HeroBlock = function HeroBlock(_ref) {
  var children = _ref.children,
    _ref$containerVariant = _ref.containerVariant,
    containerVariant = _ref$containerVariant === void 0 ? 'large' : _ref$containerVariant,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_StyledSection, props, /*#__PURE__*/_react["default"].createElement(_StyledContainer, {
    variant: containerVariant
  }, children));
};
var _default = HeroBlock;
exports["default"] = _default;
var _StyledSection = (0, _styledComponents["default"])(_layout.Section).withConfig({
  displayName: "Hero___StyledSection",
  componentId: "sc-6qs09e-0"
})({
  "height": "300px",
  "@media (min-width: 768px)": {
    "height": "350px"
  },
  "@media (min-width: 1024px)": {
    "height": "400px"
  },
  "@media (min-width: 1280px)": {
    "height": "450px"
  },
  "@media (min-width: 1536px)": {
    "height": "500px"
  }
});
var _StyledContainer = (0, _styledComponents["default"])(_layout.Container).withConfig({
  displayName: "Hero___StyledContainer",
  componentId: "sc-6qs09e-1"
})({
  "display": "flex",
  "height": "100%",
  "flexDirection": "column",
  "justifyContent": "center"
});