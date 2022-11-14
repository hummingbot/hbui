"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../elements/typography");
var _excluded = ["videoEmbedSrc"];
function Video(_ref) {
  var videoEmbedSrc = _ref.videoEmbedSrc,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_StyledIframe, Object.assign({}, props, {
    src: videoEmbedSrc,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    frameBorder: "0",
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true",
    allowFullScreen: true
  }));
}
var _default = Video;
exports["default"] = _default;
var VideoRoot = _styledComponents["default"].div.withConfig({
  displayName: "Video__VideoRoot",
  componentId: "sc-1qzaspb-0"
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
    "@media (min-width: 976px)": {
      "padding": "16px"
    },
    "@media (min-width: 1440px)": {
      "padding": "24px"
    }
  }];
});
var _StyledIframe = (0, _styledComponents["default"])("iframe").withConfig({
  displayName: "Video___StyledIframe",
  componentId: "sc-1qzaspb-1"
})({
  "aspectRatio": "16 / 9",
  "width": "100%",
  "borderRadius": "4px"
});