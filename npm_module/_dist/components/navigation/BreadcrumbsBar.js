"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _gatsby = require("gatsby");
var _typography = require("../../elements/typography");
var _layout = require("../../elements/layout");
var _buttons = require("../../elements/buttons");
var _Home = _interopRequireDefault(require("../../assets/svgs/icons/Home"));
var _textlink = _interopRequireDefault(require("../textlink"));
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function BreadcrumbsBar(_ref) {
  var links = _ref.links,
    buttons = _ref.buttons,
    history = _ref.history;
  return /*#__PURE__*/_react["default"].createElement(BreadcrumbsBarRoot, null, links && /*#__PURE__*/_react["default"].createElement(_Home["default"], null), links && /*#__PURE__*/_react["default"].createElement(ChevronRight, null), links && /*#__PURE__*/_react["default"].createElement(LinksRow, null, links.map(function (link, index) {
    return /*#__PURE__*/_react["default"].createElement(_StyledSpan, {
      key: link.url + index
    }, index !== 0 && /*#__PURE__*/_react["default"].createElement(_typography.P, {
      className: "divider"
    }, "/"), /*#__PURE__*/_react["default"].createElement(_textlink["default"], {
      to: link.url,
      label: link.label
    }));
  })), buttons && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '0 auto',
      width: '696px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_layout.ItemsRow, null, buttons.map(function (button, index) {
    return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
      key: button.url + index,
      to: button.url
    }, button.url === history.pathname ? /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
      isSuccess: true,
      isSmall: true
    }, button.label) : /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
      isSmall: true
    }, button.label));
  }))));
}
var _default = BreadcrumbsBar;
exports["default"] = _default;
var BreadcrumbsBarRoot = _styledComponents["default"].div.withConfig({
  displayName: "BreadcrumbsBar__BreadcrumbsBarRoot",
  componentId: "sc-1yf3xco-0"
})(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
    isDisabled = _ref2.isDisabled;
  return [{
    "position": "relative",
    "display": "flex",
    "width": "100%"
  }, {
    "alignItems": "center"
  }, {
    "position": "relative",
    "paddingTop": "0.625rem",
    "paddingBottom": "0.625rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  }, {
    "borderBottomWidth": "1px",
    "borderColor": "var(--border-body)"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    a.active {\n      ", "\n    }\n    .home-icon {\n      ", "\n    }\n    .divider {\n      ", "\n      display: inline;\n      line-height: 100%;\n    }\n    .inner-chevron-right, .divider {\n      ", "\n    }\n  "])), {
    "--tw-text-opacity": "1",
    "color": "rgb(0 194 206 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(95 255 215 / var(--tw-text-opacity))"
    }
  }, {
    "position": "relative",
    "top": "-1px"
  }, {
    "fontSize": "0.8125rem",
    "color": "var(--text-tertiary)"
  }, {
    "marginLeft": "10px",
    "marginRight": "10px"
  })];
});
var LinksRow = _styledComponents["default"].div.withConfig({
  displayName: "BreadcrumbsBar__LinksRow",
  componentId: "sc-1yf3xco-1"
})(function (_ref3) {
  (0, _objectDestructuringEmpty2["default"])(_ref3);
  return [{
    "display": "flex",
    "alignItems": "center"
  }];
});
function ChevronRight() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "5",
    height: "9",
    fill: "none",
    viewBox: "0 0 5 9",
    className: "inner-chevron-right"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#788187",
    d: "M1.086.562C.876.328.524.328.289.54c-.234.211-.234.563-.023.797l3 3.164-3 3.187c-.211.235-.211.586.023.797.235.211.586.211.797-.023l3.375-3.563a.665.665 0 00.164-.398c0-.117-.07-.258-.164-.375L1.086.562z"
  }));
}
var _StyledSpan = (0, _styledComponents["default"])("span").withConfig({
  displayName: "BreadcrumbsBar___StyledSpan",
  componentId: "sc-1yf3xco-2"
})({
  "display": "flex",
  "alignItems": "center"
});