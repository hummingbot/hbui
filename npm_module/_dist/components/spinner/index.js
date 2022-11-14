"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = exports.SpinnerBlock = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject;
var _excluded = ["color", "radius", "style", "duration", "strokeWidth", "center"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Spinner(_ref) {
  var color = _ref.color,
    radius = _ref.radius,
    style = _ref.style,
    duration = _ref.duration,
    strokeWidth = _ref.strokeWidth,
    center = _ref.center,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var styles = style || {};
  if (center) {
    styles.display = 'block';
    styles.textAlign = 'center';
  }
  var Path = getPathElement(color);
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: styles
  }, /*#__PURE__*/_react["default"].createElement(_StyledSvg, {
    viewBox: "0 0 42 42",
    style: {
      animationDuration: (duration ? duration : 900) + "ms",
      width: (radius ? radius : 40) + "px",
      height: (radius ? radius : 40) + "px"
    },
    $_css2: (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n          @keyframes rotate {\n            100% {transform: rotate(360deg);}\n          }\n          animation-name: rotate;\n          animation-timing-function: linear;\n          display: inline-block;\n          animation-iteration-count: infinite;\n        "])))
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    transform: "translate(3 3)",
    strokeWidth: "3"
  }, /*#__PURE__*/_react["default"].createElement(_StyledCircle, {
    cx: "18",
    cy: "18",
    r: "18"
  }), Path)));
}
var _default = Spinner;
exports["default"] = _default;
var SpinnerBlock = _styledComponents["default"].div.withConfig({
  displayName: "spinner__SpinnerBlock",
  componentId: "sc-1d744a1-0"
})({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%'
});
exports.SpinnerBlock = SpinnerBlock;
function DefaultPath() {
  return /*#__PURE__*/_react["default"].createElement(_StyledPath, {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function BluePath() {
  return /*#__PURE__*/_react["default"].createElement(_StyledPath2, {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function GreenPath() {
  return /*#__PURE__*/_react["default"].createElement(_StyledPath3, {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function RedPath() {
  return /*#__PURE__*/_react["default"].createElement(_StyledPath4, {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
function OrangePath() {
  return /*#__PURE__*/_react["default"].createElement(_StyledPath5, {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}
var getPathElement = function getPathElement(color) {
  switch (color) {
    case 'green':
      return /*#__PURE__*/_react["default"].createElement(GreenPath, null);
    case 'blue':
      return /*#__PURE__*/_react["default"].createElement(BluePath, null);
    case 'orange':
      return /*#__PURE__*/_react["default"].createElement(OrangePath, null);
    case 'red':
      return /*#__PURE__*/_react["default"].createElement(RedPath, null);
  }
  return /*#__PURE__*/_react["default"].createElement(DefaultPath, null);
};
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "spinner___StyledSvg",
  componentId: "sc-1d744a1-1"
})(["", ""], function (p) {
  return p.$_css2;
});
var _StyledCircle = (0, _styledComponents["default"])("circle").withConfig({
  displayName: "spinner___StyledCircle",
  componentId: "sc-1d744a1-2"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(223 225 226 / var(--tw-text-opacity))",
  ".dark &": {
    "--tw-text-opacity": "1",
    "color": "rgb(62 67 71 / var(--tw-text-opacity))"
  }
});
var _StyledPath = (0, _styledComponents["default"])("path").withConfig({
  displayName: "spinner___StyledPath",
  componentId: "sc-1d744a1-3"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(0 0 0 / var(--tw-text-opacity))",
  ".dark &": {
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))"
  }
});
var _StyledPath2 = (0, _styledComponents["default"])("path").withConfig({
  displayName: "spinner___StyledPath2",
  componentId: "sc-1d744a1-4"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(49 141 255 / var(--tw-text-opacity))"
});
var _StyledPath3 = (0, _styledComponents["default"])("path").withConfig({
  displayName: "spinner___StyledPath3",
  componentId: "sc-1d744a1-5"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(0 194 206 / var(--tw-text-opacity))"
});
var _StyledPath4 = (0, _styledComponents["default"])("path").withConfig({
  displayName: "spinner___StyledPath4",
  componentId: "sc-1d744a1-6"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(235 87 87 / var(--tw-text-opacity))"
});
var _StyledPath5 = (0, _styledComponents["default"])("path").withConfig({
  displayName: "spinner___StyledPath5",
  componentId: "sc-1d744a1-7"
})({
  "stroke": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(240 135 39 / var(--tw-text-opacity))"
});