"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2;
var _excluded = ["active"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CheckBox(_ref) {
  var active = _ref.active,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(SVG, Object.assign({
    active: active,
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#788187",
    d: "M13.5 1h-11A1.5 1.5 0 001 2.5v11c0 .844.656 1.5 1.5 1.5h11a1.5 1.5 0 001.5-1.5v-11c0-.813-.688-1.5-1.5-1.5zm.5 12.5c0 .281-.25.5-.5.5h-11a.494.494 0 01-.5-.5v-11c0-.25.219-.5.5-.5h11c.25 0 .5.25.5.5v11z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "checkbox-tick",
    fill: "#000",
    d: "M12.969 6.49a.856.856 0 000-1.224c-.344-.323-.881-.323-1.203 0l-4.899 4.898L4.72 8.016c-.344-.323-.881-.323-1.203 0a.856.856 0 000 1.224l2.75 2.75c.15.172.386.258.601.258.215 0 .43-.086.602-.258l5.5-5.5z"
  }));
}
var _default = CheckBox;
exports["default"] = _default;
var SVG = _styledComponents["default"].svg.withConfig({
  displayName: "CheckBox__SVG",
  componentId: "sc-1ddif9h-0"
})(function (_ref2) {
  var active = _ref2.active;
  return [{
    "cursor": "pointer"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    .checkbox-tick {\n      display: none;\n    }\n    :hover {\n      .checkbox-tick {\n        display: block;\n        opacity: 0.2;\n      }\n    }\n  "]))), active && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      .checkbox-tick {\n        display: block;\n        opacity: 1;\n      }\n    "])))]];
});