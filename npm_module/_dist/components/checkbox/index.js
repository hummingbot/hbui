"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["active", "partial", "disabled"];
function Checkbox(_ref) {
  var active = _ref.active,
    partial = _ref.partial,
    disabled = _ref.disabled,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(CheckboxRoot, Object.assign({
    active: active,
    disabled: disabled,
    className: active ? 'is-active' : 'is-off'
  }, props), active && !partial && /*#__PURE__*/_react["default"].createElement(CheckIcon, null), active && partial && /*#__PURE__*/_react["default"].createElement(MinusIcon, null));
}
var CheckboxRoot = _styledComponents["default"].div.withConfig({
  displayName: "checkbox__CheckboxRoot",
  componentId: "sc-jfcnp-0"
})(function (_ref2) {
  var active = _ref2.active,
    disabled = _ref2.disabled;
  return [{
    "position": "relative",
    "borderWidth": "2px",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
  }, {
    "display": "flex",
    "height": "16px",
    "width": "16px",
    "cursor": "pointer",
    "alignItems": "center !important",
    "justifyContent": "center !important",
    "borderRadius": "0.25rem"
  }, {
    "position": "relative",
    "borderWidth": "1px",
    "borderColor": "var(--border-body)",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))"
    }
  }, {
    "borderColor": "var(--border-checkbox-unselected-enabled)",
    "backgroundColor": "var(--bg-checkbox-unselected-enabled)"
  }, {
    ":hover": {
      "borderColor": "var(--border-checkbox-unselected-hover)",
      "backgroundColor": "var(--bg-checkbox-unselected-hover)"
    }
  }, {
    ":active": {
      "borderColor": "var(--border-checkbox-unselected-active)",
      "backgroundColor": "var(--bg-checkbox-unselected-active)"
    }
  }, active && [{
    "borderColor": "var(--border-checkbox-selected-enabled)",
    "backgroundColor": "var(--bg-checkbox-selected-enabled)"
  }, {
    ":hover": {
      "borderColor": "var(--border-checkbox-selected-hover)",
      "backgroundColor": "var(--bg-checkbox-selected-hover)"
    }
  }, {
    ":active": {
      "borderColor": "var(--border-checkbox-selected-active)",
      "backgroundColor": "var(--bg-checkbox-selected-active)"
    }
  }], disabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});
function CheckIcon(_ref3) {
  var active = _ref3.active;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "6",
    fill: "transparent",
    viewBox: "0 0 8 6"
  }, /*#__PURE__*/_react["default"].createElement(_StyledPath, {
    d: "M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
  }));
}
function MinusIcon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "2",
    fill: "transparent",
    viewBox: "0 0 10 2"
  }, /*#__PURE__*/_react["default"].createElement(_StyledPath2, {
    d: "M10 1a.627.627 0 00-.625-.625H.625a.64.64 0 00-.625.64.6.6 0 00.61.61h8.75A.64.64 0 0010 1z"
  }));
}
var _default = Checkbox;
exports["default"] = _default;
var _StyledPath = (0, _styledComponents["default"])("path").withConfig({
  displayName: "checkbox___StyledPath",
  componentId: "sc-jfcnp-1"
})({
  "fill": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ".dark &": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
});
var _StyledPath2 = (0, _styledComponents["default"])("path").withConfig({
  displayName: "checkbox___StyledPath2",
  componentId: "sc-jfcnp-2"
})({
  "fill": "currentColor",
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ".dark &": {
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))"
  }
});