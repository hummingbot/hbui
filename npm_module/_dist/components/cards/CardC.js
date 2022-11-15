"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.CardC = CardC;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _buttons = require("../buttons");
var _templateObject;
var _excluded = ["iconElement", "headerText", "descriptionText", "linkURL", "external", "linkClass"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CardC(_ref) {
  var iconElement = _ref.iconElement,
    headerText = _ref.headerText,
    descriptionText = _ref.descriptionText,
    linkURL = _ref.linkURL,
    external = _ref.external,
    linkClass = _ref.linkClass,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  if (!linkURL) {
    return /*#__PURE__*/_react["default"].createElement(HoverlessRoot, props, /*#__PURE__*/_react["default"].createElement(HeaderSection, null, iconElement && /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, iconElement), headerText && /*#__PURE__*/_react["default"].createElement(HeaderSection, null, /*#__PURE__*/_react["default"].createElement(Header, {
      isBold: true
    }, headerText))), descriptionText && /*#__PURE__*/_react["default"].createElement(Description, null, descriptionText));
  }
  var LinkElement = ExternalA;
  if (!external) {
    LinkElement = linkClass;
  }
  return /*#__PURE__*/_react["default"].createElement(LinkElement, {
    to: linkURL,
    href: linkURL,
    target: external ? '_blank' : null,
    rel: external ? "noreferrer" : null
  }, /*#__PURE__*/_react["default"].createElement(Root, props, /*#__PURE__*/_react["default"].createElement(HeaderSection, null, iconElement && /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, iconElement), /*#__PURE__*/_react["default"].createElement(Header, {
    isBold: true
  }, headerText), external && /*#__PURE__*/_react["default"].createElement(_StyledExternalLinkIcon, null)), descriptionText && /*#__PURE__*/_react["default"].createElement(Description, null, descriptionText)));
}
var ExternalA = _styledComponents["default"].a.withConfig({
  displayName: "CardC__ExternalA",
  componentId: "sc-v9rx65-0"
})(function () {
  return [];
});
var Root = _styledComponents["default"].div.withConfig({
  displayName: "CardC__Root",
  componentId: "sc-v9rx65-1"
})(function () {
  return [{
    "position": "relative",
    "borderRadius": "8px",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "padding": "8px",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgb(0 194 206 / var(--tw-text-opacity))"
    },
    ".dark &:hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(95 255 215 / var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgb(95 255 215 / var(--tw-text-opacity))"
    },
    "@media (min-width: 976px)": {
      "padding": "16px"
    },
    "@media (min-width: 1440px)": {
      "padding": "24px"
    }
  }];
});
var HoverlessRoot = _styledComponents["default"].div.withConfig({
  displayName: "CardC__HoverlessRoot",
  componentId: "sc-v9rx65-2"
})(function () {
  return [{
    "position": "relative",
    "borderRadius": "8px",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "padding": "8px",
    "@media (min-width: 976px)": {
      "padding": "16px"
    },
    "@media (min-width: 1440px)": {
      "padding": "24px"
    }
  }];
});
var HeaderSection = _styledComponents["default"].div.withConfig({
  displayName: "CardC__HeaderSection",
  componentId: "sc-v9rx65-3"
})(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "paddingBottom": "16px"
  }];
});
var Header = (0, _styledComponents["default"])(_typography.H6).withConfig({
  displayName: "CardC__Header",
  componentId: "sc-v9rx65-4"
})(function () {
  return [{
    "lineHeight": "1"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    color: inherit;\n  "])))];
});
var Description = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "CardC__Description",
  componentId: "sc-v9rx65-5"
})(function () {
  return [{
    "lineHeight": "1.25",
    "color": "var(--text-secondary)"
  }];
});
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "CardC___StyledDiv",
  componentId: "sc-v9rx65-6"
})({
  "paddingRight": "16px"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "CardC___StyledDiv2",
  componentId: "sc-v9rx65-7"
})({
  "paddingRight": "16px"
});
var _StyledExternalLinkIcon = (0, _styledComponents["default"])(_buttons.ExternalLinkIcon).withConfig({
  displayName: "CardC___StyledExternalLinkIcon",
  componentId: "sc-v9rx65-8"
})({
  "position": "absolute",
  "top": "16px",
  "right": "16px"
});