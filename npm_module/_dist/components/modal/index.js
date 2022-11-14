"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _typography = require("../../elements/typography");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(_ref) {
  var content = _ref.content,
    path = _ref.path,
    closeFunction = _ref.closeFunction;
  return /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, /*#__PURE__*/_react["default"].createElement(_StyledDiv3, null, path && /*#__PURE__*/_react["default"].createElement(_StyledPSmall, {
    isMedium: true
  }, path), /*#__PURE__*/_react["default"].createElement(_StyledCloseIcon, {
    onClick: function onClick() {
      return closeFunction();
    }
  })), content));
}
var _default = Modal;
exports["default"] = _default;
function CloseIcon(_ref2) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref2), _ref2));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#C9CDCF",
    d: "M14.844 14.875a.53.53 0 000-.719L10.688 10l4.156-4.125a.53.53 0 000-.719.53.53 0 00-.719 0L10 9.313 5.844 5.155a.53.53 0 00-.719 0 .53.53 0 000 .719L9.281 10l-4.156 4.156a.53.53 0 000 .719.53.53 0 00.719 0L10 10.719l4.125 4.156a.53.53 0 00.719 0z"
  }));
}
var _StyledCloseIcon = (0, _styledComponents["default"])(CloseIcon).withConfig({
  displayName: "modal___StyledCloseIcon",
  componentId: "sc-8tkzsr-0"
})({
  "cursor": "pointer"
});
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv",
  componentId: "sc-8tkzsr-1"
})({
  "position": "fixed",
  "top": "0px",
  "left": "0px",
  "zIndex": "50",
  "display": "flex",
  "height": "100%",
  "width": "100%",
  "alignItems": "center",
  "justifyContent": "center",
  "backgroundColor": "rgb(0 0 0 / 0.8)"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv2",
  componentId: "sc-8tkzsr-2"
})({
  "position": "relative",
  "width": "33.333333%",
  "backgroundColor": "var(--bg-body)",
  "padding": "24px"
});
var _StyledDiv3 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv3",
  componentId: "sc-8tkzsr-3"
})({
  "display": "flex",
  "justifyContent": "space-between"
});
var _StyledPSmall = (0, _styledComponents["default"])(_typography.PSmall).withConfig({
  displayName: "modal___StyledPSmall",
  componentId: "sc-8tkzsr-4"
})({
  "marginBottom": "24px"
});