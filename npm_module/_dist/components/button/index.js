"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Button = void 0;
exports.ExternalLinkButton = ExternalLinkButton;
exports.ExternalLinkIcon = ExternalLinkIcon;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _buttons = require("../../elements/buttons");
var _typography = require("../../elements/typography");
var _excluded = ["label", "iconBefore", "iconAfter"],
  _excluded2 = ["label"];
var Button = function Button(_ref) {
  var label = _ref.label,
    iconBefore = _ref.iconBefore,
    iconAfter = _ref.iconAfter,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, Object.assign({
    type: "button"
  }, props), iconBefore && /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon-before"
  }, iconBefore), label, iconAfter && /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon-after"
  }, iconAfter));
};
exports.Button = Button;
Button.propTypes = {
  // Button types
  isPrimary: _propTypes["default"].bool,
  isSecondary: _propTypes["default"].bool,
  isSmall: _propTypes["default"].bool,
  isSuccess: _propTypes["default"].bool,
  isDanger: _propTypes["default"].bool,
  isWarning: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  // Button label content
  label: _propTypes["default"].string.isRequired,
  // Click handler
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  isSmall: false,
  isSuccess: false,
  isDanger: false,
  isWarning: false,
  isDisabled: false,
  onClick: undefined
};
function ExternalLinkIcon(_ref2) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref2), _ref2));
  return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "14",
    viewBox: "0 0 13 14"
  }), /*#__PURE__*/_react["default"].createElement(_StyledPath, {
    d: "M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z"
  }));
}
var _StyledExternalLinkIcon = (0, _styledComponents["default"])(ExternalLinkIcon).withConfig({
  displayName: "button___StyledExternalLinkIcon",
  componentId: "sc-1kafyhf-0"
})({
  "marginLeft": "16px"
});
var CustomExternalLinkButton = (0, _styledComponents["default"])(_buttons.Button).withConfig({
  displayName: "button__CustomExternalLinkButton",
  componentId: "sc-1kafyhf-1"
})(function () {
  return [{
    "display": "flex",
    "justifyContent": "space-between",
    "borderRadius": "0.125rem !important",
    "borderWidth": "1px"
  }, {
    "fontSize": "0.9375rem",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-text-opacity": "1 !important",
      "color": "rgb(0 194 206 / var(--tw-text-opacity)) !important"
    },
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(95 255 215 / var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(0 194 206 / var(--tw-bg-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
      "backgroundColor": "transparent"
    },
    ":active": {
      "borderColor": "rgb(0 194 206 / 0.3)",
      "backgroundColor": "transparent"
    }
  }, {
    ".dark &": {
      "borderColor": "rgb(95 255 215 / 0)",
      "backgroundColor": "rgba(95, 255, 215, 0.10)"
    },
    ".dark &:hover": {
      "--tw-border-opacity": "1 !important",
      "borderColor": "rgb(95 255 215 / var(--tw-border-opacity)) !important",
      "backgroundColor": "transparent",
      "--tw-text-opacity": "1 !important",
      "color": "rgb(95 255 215 / var(--tw-text-opacity)) !important"
    },
    ".dark &:active": {
      "borderColor": "rgb(95 255 215 / 0.5) !important",
      "backgroundColor": "transparent"
    }
  }];
});
function ExternalLinkButton(_ref3) {
  var label = _ref3.label,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(CustomExternalLinkButton, props, label, /*#__PURE__*/_react["default"].createElement(_StyledExternalLinkIcon, null));
}
var _StyledPath = (0, _styledComponents["default"])("path").withConfig({
  displayName: "button___StyledPath",
  componentId: "sc-1kafyhf-2"
})({
  "fill": "currentColor"
});