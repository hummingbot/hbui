"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _react = _interopRequireDefault(require("react"));
var primaryColors = {
  a: '#00858B',
  b: '#007E82',
  c: '#006E72',
  d: '#006063',
  e: '#00A8B3',
  f: '#00C2CE'
};
var bwColors = {
  a: 'rgba(0,0,0,0.35)',
  b: 'rgba(0,0,0,0.3)',
  c: 'rgba(0,0,0,0.25)',
  e: 'rgba(0,0,0,0.2)',
  d: 'rgba(0,0,0,0.1)',
  f: 'black'
};
function HummingbotLogo(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "31",
    height: "28",
    fill: "none",
    viewBox: "0 0 31 28",
    className: props.className
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.a,
    fillRule: "evenodd",
    d: "M25.306 14.932c-2.464.893-4.935.573-6.562-.645.677-2.051 2.509-3.93 4.974-4.824 2.463-.893 4.934-.572 6.561.646a6.683 6.683 0 01-.185.49c-.79 1.856-2.522 3.512-4.788 4.333z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.b,
    fillRule: "evenodd",
    d: "M24.554 18.248c-2.619-.346-4.777-1.776-5.81-3.615 1.413-1.515 3.828-2.342 6.446-1.997 2.619.345 4.777 1.776 5.81 3.614a5.492 5.492 0 01-.242.244c-1.438 1.36-3.73 2.08-6.204 1.754z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.c,
    fillRule: "evenodd",
    d: "M22.342 20.846c-2.157-1.714-3.456-4.226-3.598-6.533 1.873-.706 4.338-.222 6.495 1.492 2.156 1.715 3.456 4.225 3.598 6.533a4.564 4.564 0 01-.358.119c-1.822.522-4.116-.004-6.137-1.611z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.d,
    fillRule: "evenodd",
    d: "M20.071 21.96c-1.378-2.464-1.664-5.208-.946-7.24 2.006.273 4.125 1.833 5.502 4.297 1.378 2.464 1.663 5.208.945 7.239a5.064 5.064 0 01-.498-.093c-1.851-.442-3.74-1.942-5.003-4.203z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.e,
    fillRule: "evenodd",
    d: "M20.871 5.792c-.415 5.392-4.5 9.372-9.127 8.89a7.387 7.387 0 01-1.651-.368L19.916.302a11.134 11.134 0 01.956 5.49z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: props.bw ? bwColors.a : primaryColors.f,
    fillRule: "evenodd",
    d: "M14.188 11.706l-.074-.055c-1.156-.835-2.45-1.886-3.81-2.224-.898-.225-1.78-.05-2.518.56-.66.544-.821 1.35-1.35 1.989C5.952 12.56 0 15.405 0 15.405l.083.215s5.56-2.718 6.692-2.49c1.133.228 3.423.997 4.88 4.233 1.538 3.41 4.503 5.516 6.15 5.256l-1.602 5.06c8.247.438 5.316-7.21 2.774-11.032 1.132-.36 2.23-.902 3.244-1.493a9.266 9.266 0 001.737-1.329c1.167-1.121 2.127-2.546 2.832-4.02.948-1.98 1.79-4.374 2.047-6.619l-14.649 8.518v.002z",
    clipRule: "evenodd"
  }));
}
var _default = HummingbotLogo;
exports["default"] = _default;