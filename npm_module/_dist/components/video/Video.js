"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["videoEmbedSrc"];
function Video(_ref) {
  var videoEmbedSrc = _ref.videoEmbedSrc,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_StyledIframe, Object.assign({
    title: props.title
  }, props, {
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
var _StyledIframe = (0, _styledComponents["default"])("iframe").withConfig({
  displayName: "Video___StyledIframe",
  componentId: "sc-1qzaspb-0"
})({
  "aspectRatio": "16 / 9",
  "width": "100%",
  "borderRadius": "4px"
});