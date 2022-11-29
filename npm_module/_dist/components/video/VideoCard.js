"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _templateObject;
var _excluded = ["videoEmbedSrc", "title", "description"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function VideoCard(_ref) {
  var videoEmbedSrc = _ref.videoEmbedSrc,
    title = _ref.title,
    description = _ref.description,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(VideoRoot, props, /*#__PURE__*/_react["default"].createElement(_StyledIframe, {
    src: videoEmbedSrc,
    title: title,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    frameBorder: "0",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true
  }), title && /*#__PURE__*/_react["default"].createElement(HeaderSection, null, /*#__PURE__*/_react["default"].createElement(Header, {
    isBold: true
  }, title)), description && /*#__PURE__*/_react["default"].createElement(Description, null, description));
}
var _default = VideoCard;
exports["default"] = _default;
var VideoRoot = _styledComponents["default"].div.withConfig({
  displayName: "VideoCard__VideoRoot",
  componentId: "sc-1fox1hc-0"
})(function () {
  return [{
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
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
    }
  }, {
    "borderRadius": "8px",
    "padding": "8px",
    "@media (min-width: 1024px)": {
      "padding": "16px"
    },
    "@media (min-width: 1280px)": {
      "padding": "24px"
    }
  }];
});
var HeaderSection = _styledComponents["default"].div.withConfig({
  displayName: "VideoCard__HeaderSection",
  componentId: "sc-1fox1hc-1"
})(function () {
  return [{
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "paddingTop": "16px"
  }];
});
var Header = (0, _styledComponents["default"])(_typography.H6).withConfig({
  displayName: "VideoCard__Header",
  componentId: "sc-1fox1hc-2"
})(function () {
  return [{
    "lineHeight": "1"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    color: inherit;\n  "])))];
});
var Description = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "VideoCard__Description",
  componentId: "sc-1fox1hc-3"
})(function () {
  return [{
    "paddingTop": "16px",
    "lineHeight": "1.25",
    "color": "var(--text-secondary)"
  }];
});
var _StyledIframe = (0, _styledComponents["default"])("iframe").withConfig({
  displayName: "VideoCard___StyledIframe",
  componentId: "sc-1fox1hc-4"
})({
  "aspectRatio": "16 / 9",
  "width": "100%",
  "borderRadius": "0.25rem"
});