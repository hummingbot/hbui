"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SuccessIcon = _interopRequireDefault(require("../../assets/svgs/alerts/SuccessIcon"));
var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/alerts/WarningIcon"));
var _DangerIcon = _interopRequireDefault(require("../../assets/svgs/alerts/DangerIcon"));
var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/alerts/InfoIcon"));
var _DefaultIcon = _interopRequireDefault(require("../../assets/svgs/alerts/DefaultIcon"));
var _excluded = ["label", "type"];
var Snackbar = function Snackbar(_ref) {
  var label = _ref.label,
    type = _ref.type,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var stateIcon = getStateIcon(type);
  return /*#__PURE__*/_react["default"].createElement(Root, Object.assign({
    type: type
  }, props), /*#__PURE__*/_react["default"].createElement(IconBox, {
    type: type
  }, stateIcon), /*#__PURE__*/_react["default"].createElement(Text, null, label));
};
var _default = Snackbar;
exports["default"] = _default;
var getStateIcon = function getStateIcon(type) {
  if (type === 'success') return /*#__PURE__*/_react["default"].createElement(_SuccessIcon["default"], null);
  if (type === 'warning') return /*#__PURE__*/_react["default"].createElement(_WarningIcon["default"], null);
  if (type === 'danger') return /*#__PURE__*/_react["default"].createElement(_DangerIcon["default"], null);
  if (type === 'info') return /*#__PURE__*/_react["default"].createElement(_InfoIcon["default"], null);
  return /*#__PURE__*/_react["default"].createElement(_DefaultIcon["default"], null);
};
var Root = _styledComponents["default"].div.withConfig({
  displayName: "snackbar__Root",
  componentId: "sc-1z0imi3-0"
})(function (_ref2) {
  var type = _ref2.type;
  return [{
    "display": "inline-flex",
    "overflow": "hidden",
    "borderRadius": "4px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))",
    "--tw-shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "--tw-shadow-colored": "0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    ".dark &": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgb(40 44 47 / var(--tw-bg-opacity))",
      "--tw-shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "--tw-shadow-colored": "0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
    }
  }, {
    "marginBottom": "1rem"
  }];
});
var IconBox = _styledComponents["default"].div.withConfig({
  displayName: "snackbar__IconBox",
  componentId: "sc-1z0imi3-1"
})(function (_ref3) {
  var type = _ref3.type;
  return [{
    "display": "flex",
    "alignItems": "center",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(72 77 81 / var(--tw-bg-opacity))",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem"
  }, type === 'success' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(0 194 206 / var(--tw-bg-opacity))"
  }], type === 'info' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(49 141 255 / var(--tw-bg-opacity))"
  }], type === 'danger' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(235 87 87 / var(--tw-bg-opacity))"
  }], type === 'warning' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(240 135 39 / var(--tw-bg-opacity))"
  }]];
});
var Text = _styledComponents["default"].div.withConfig({
  displayName: "snackbar__Text",
  componentId: "sc-1z0imi3-2"
})(function (_ref4) {
  (0, _objectDestructuringEmpty2["default"])(_ref4);
  return [{
    "display": "flex",
    "alignItems": "center",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(72 77 81 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }];
});