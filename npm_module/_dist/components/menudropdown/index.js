"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _typography = require("../../elements/typography");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["links", "side", "type"],
  _excluded2 = ["active"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function MenuDropdown(_ref) {
  var links = _ref.links,
    _ref$side = _ref.side,
    side = _ref$side === void 0 ? 'right' : _ref$side,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'kebab' : _ref$type,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(KebabMenuRoot, props, type === 'kebab' && /*#__PURE__*/_react["default"].createElement(KebabControl, null), type === 'chevron' && /*#__PURE__*/_react["default"].createElement(TriangleDown, null), /*#__PURE__*/_react["default"].createElement(KebabMenuContent, {
    className: "kebab-menu-content",
    side: side
  }, links.map(function (link) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: link.to,
      key: link.label
    }, /*#__PURE__*/_react["default"].createElement(KebabMenuItem, null, link.label));
  })));
}
var _default = MenuDropdown;
exports["default"] = _default;
var KebabMenuRoot = _styledComponents["default"].div.withConfig({
  displayName: "menudropdown__KebabMenuRoot",
  componentId: "sc-39nxad-0"
})(function () {
  return [{
    "position": "relative",
    "height": "18px"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    .kebab-menu-content {\n      display: none;\n    }\n    .kebab-highlight {\n      display: none;\n    }\n    :hover {\n      .kebab-highlight {\n        display: block;\n      }\n      .kebab-menu-content {\n        display: block;\n      }\n    }\n  "])))];
});
var KebabMenuContent = _styledComponents["default"].div.withConfig({
  displayName: "menudropdown__KebabMenuContent",
  componentId: "sc-39nxad-1"
})(function (_ref2) {
  var side = _ref2.side;
  return [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    min-width: 80px;\n  "]))), {
    "position": "absolute",
    "right": "-4px",
    "top": "18px"
  }, side === 'right' && {
    "right": "-4px"
  }, side === 'left' && {
    "left": "-4px"
  }, {
    "zIndex": "50",
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)"
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(201 205 207 / var(--tw-bg-opacity))",
    ".dark &": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
    }
  }];
});
var KebabControlRoot = _styledComponents["default"].div.withConfig({
  displayName: "menudropdown__KebabControlRoot",
  componentId: "sc-39nxad-2"
})(function (_ref3) {
  var active = _ref3.active;
  return [{
    "position": "relative",
    "height": "16px",
    "width": "10px"
  }, active && [(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      .kebab-highlight {\n        display: block;\n      }\n    "])))]];
});
var KebabMenuItem = (0, _styledComponents["default"])(_typography.LabelSmall).withConfig({
  displayName: "menudropdown__KebabMenuItem",
  componentId: "sc-39nxad-3"
})(function (_ref4) {
  var active = _ref4.active;
  return [{
    "cursor": "pointer",
    "userSelect": "none",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "color": "var(--text-secondary)",
    ":hover": {
      "color": "var(--text-primary)"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(252 252 252 / var(--tw-bg-opacity))",
    ".dark &": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))"
    }
  }, {
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(241 243 243 / var(--tw-bg-opacity))"
    },
    ".dark &:hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(30 34 36 / var(--tw-bg-opacity))"
    }
  }];
});
function KebabControl(_ref5) {
  var active = _ref5.active,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(KebabControlRoot, Object.assign({
    active: active
  }, props), /*#__PURE__*/_react["default"].createElement(_StyledDiv, {
    className: "kebab-highlight"
  }), /*#__PURE__*/_react["default"].createElement(_StyledSvg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "16",
    viewBox: "0 0 10 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
  })));
}
function TriangleDown() {
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg2, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    className: "chevron-down",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "transparent",
    d: "M0 0H16V16H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#AEB4B7",
    d: "M11.404 7.059a.512.512 0 00.022-.73.512.512 0 00-.73-.022l-2.923 2.75-2.9-2.75a.512.512 0 00-.73.021.512.512 0 00.02.73l3.267 3.094a.571.571 0 00.343.13.583.583 0 00.366-.13l3.265-3.093z"
  }));
}
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "menudropdown___StyledDiv",
  componentId: "sc-39nxad-4"
})({
  "position": "absolute",
  "top": "-2px",
  "left": "-3px",
  "height": "20px",
  "width": "16px",
  "borderRadius": "0.125rem",
  "backgroundColor": "var(--bg-input)"
});
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "menudropdown___StyledSvg",
  componentId: "sc-39nxad-5"
})({
  "position": "absolute",
  "top": "0px",
  "left": "0px",
  "cursor": "pointer",
  "fill": "currentColor",
  "color": "var(--text-primary)"
});
var _StyledSvg2 = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "menudropdown___StyledSvg2",
  componentId: "sc-39nxad-6"
})({
  "fill": "currentColor",
  "color": "var(--text-primary)"
});