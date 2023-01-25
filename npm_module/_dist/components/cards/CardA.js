"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.CardA = CardA;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _buttons = require("../buttons");
var _templateObject;
var _excluded = ["imgSrc", "imgAlt", "headerText", "descriptionText", "children", "linkURL", "linkClass", "external"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CardA(_ref) {
  var imgSrc = _ref.imgSrc,
    imgAlt = _ref.imgAlt,
    headerText = _ref.headerText,
    descriptionText = _ref.descriptionText,
    children = _ref.children,
    linkURL = _ref.linkURL,
    linkClass = _ref.linkClass,
    external = _ref.external,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  if (!linkURL) {
    return /*#__PURE__*/_react["default"].createElement(HoverlessRoot, props, imgSrc && /*#__PURE__*/_react["default"].createElement(Image, {
      src: imgSrc,
      alt: imgAlt || headerText || 'image'
    }), headerText && /*#__PURE__*/_react["default"].createElement(HeaderSection, null, /*#__PURE__*/_react["default"].createElement(Header, {
      isBold: true
    }, headerText)), descriptionText && /*#__PURE__*/_react["default"].createElement(Description, null, descriptionText), children && /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, children));
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
  }, /*#__PURE__*/_react["default"].createElement(Root, props, imgSrc && /*#__PURE__*/_react["default"].createElement(Image, {
    src: imgSrc,
    alt: imgAlt || headerText || 'image'
  }), headerText && /*#__PURE__*/_react["default"].createElement(HeaderSection, null, /*#__PURE__*/_react["default"].createElement(Header, {
    isBold: true
  }, headerText), external && /*#__PURE__*/_react["default"].createElement(_StyledExternalLinkIcon, null)), descriptionText && /*#__PURE__*/_react["default"].createElement(Description, null, descriptionText), children && /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, children)));
}
var ExternalA = _styledComponents["default"].a.withConfig({
  displayName: "CardA__ExternalA",
  componentId: "sc-kwttha-0"
})(function () {
  return [];
});
var Root = _styledComponents["default"].div.withConfig({
  displayName: "CardA__Root",
  componentId: "sc-kwttha-1"
})(function () {
  return [{
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
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var HoverlessRoot = _styledComponents["default"].div.withConfig({
  displayName: "CardA__HoverlessRoot",
  componentId: "sc-kwttha-2"
})(function () {
  return [{
    "borderRadius": "8px",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "padding": "8px",
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var Image = _styledComponents["default"].img.withConfig({
  displayName: "CardA__Image",
  componentId: "sc-kwttha-3"
})(function () {
  return [{
    "width": "100%",
    "borderRadius": "6px",
    "paddingBottom": "24px"
  }];
});
var HeaderSection = _styledComponents["default"].div.withConfig({
  displayName: "CardA__HeaderSection",
  componentId: "sc-kwttha-4"
})(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "paddingBottom": "16px"
  }];
});
var Header = (0, _styledComponents["default"])(_typography.H6).withConfig({
  displayName: "CardA__Header",
  componentId: "sc-kwttha-5"
})(function () {
  return [{
    "lineHeight": "1"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    color: inherit;\n  "])))];
});
var Description = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "CardA__Description",
  componentId: "sc-kwttha-6"
})(function () {
  return [{
    "lineHeight": "1.25",
    "color": "var(--text-secondary)"
  }];
});
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "CardA___StyledDiv",
  componentId: "sc-kwttha-7"
})({
  "marginTop": "1rem"
});
var _StyledExternalLinkIcon = (0, _styledComponents["default"])(_buttons.ExternalLinkIcon).withConfig({
  displayName: "CardA___StyledExternalLinkIcon",
  componentId: "sc-kwttha-8"
})({
  "marginLeft": "16px"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "CardA___StyledDiv2",
  componentId: "sc-kwttha-9"
})({
  "marginTop": "1rem"
});