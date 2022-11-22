"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _input = require("../../elements/input");
var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));
var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));
var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var _excluded = ["value", "onChange", "required", "customTopLabel", "bottomLabel", "prefix"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TextInput = function TextInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    required = _ref.required,
    customTopLabel = _ref.customTopLabel,
    bottomLabel = _ref.bottomLabel,
    prefix = _ref.prefix,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    inputFocused = _useState[0],
    setInputFocused = _useState[1];
  var stateIcon = getStateIcon(props);
  var placeholder = props.placeholder;
  var hasValue = value && value !== '' && typeof value === 'string' && value.length > 0;
  if (!placeholder) {
    console.error('TextInput Component: A placeholder value is required');
  }
  var labelValue = customTopLabel || placeholder;
  return /*#__PURE__*/_react["default"].createElement(Root, Object.assign({
    prefix: prefix,
    hasValue: hasValue,
    inputFocused: inputFocused,
    placeholder: placeholder
  }, props), labelValue && /*#__PURE__*/_react["default"].createElement(PlaceholderLabel, Object.assign({
    className: "top-label"
  }, props), labelValue, required && /*#__PURE__*/_react["default"].createElement(_StyledSpan, null, "*")), prefix && /*#__PURE__*/_react["default"].createElement(PrefixLabel, {
    className: "prefix-label"
  }, prefix), /*#__PURE__*/_react["default"].createElement(_input.TextInput, Object.assign({
    type: "text",
    className: "input-element",
    inputFocused: true,
    onFocus: function onFocus() {
      return setInputFocused(true);
    },
    onBlur: function onBlur() {
      return setInputFocused(false);
    },
    value: value,
    onChange: onChange
  }, props)), bottomLabel && /*#__PURE__*/_react["default"].createElement(BottomLabel, props, stateIcon, " ", bottomLabel));
};
var _default = TextInput;
exports["default"] = _default;
TextInput.propTypes = {
  value: _propTypes["default"].string,
  customTopLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  isValid: _propTypes["default"].bool,
  isWarning: _propTypes["default"].bool,
  isInvalid: _propTypes["default"].bool
};
TextInput.defaultProps = {
  value: '',
  customTopLabel: '',
  onChange: null,
  required: false,
  isValid: false,
  isWarning: false,
  isInvalid: false
};
var getStateIcon = function getStateIcon(props) {
  if (props.isValid) return /*#__PURE__*/_react["default"].createElement(_CheckIcon["default"], null);
  if (props.isWarning) return /*#__PURE__*/_react["default"].createElement(_WarningIcon["default"], null);
  if (props.isInvalid) return /*#__PURE__*/_react["default"].createElement(_ErrorIcon["default"], null);
  return null;
};
var Root = _styledComponents["default"].div.withConfig({
  displayName: "TextInput__Root",
  componentId: "sc-n3ri1-0"
})(function (_ref2) {
  var hasValue = _ref2.hasValue,
    isValid = _ref2.isValid,
    isInvalid = _ref2.isInvalid,
    isWarning = _ref2.isWarning,
    inputFocused = _ref2.inputFocused,
    prefix = _ref2.prefix,
    customPrefixPadding = _ref2.customPrefixPadding;
  return [{
    "position": "relative"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n      .top-label {\n        top: 0px;\n        left: 8px;\n      }\n      .prefix-label {\n        top: 8px;\n      }\n    "]))), prefix && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        input {\n          padding-left: 60px;\n        }\n      "]))), customPrefixPadding && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        input {\n          padding-left: ", ";\n        }\n      "])), customPrefixPadding), hasValue && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        .top-label {\n          opacity: 1;\n          top: -14px;\n        }\n      "]))), hasValue && inputFocused && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#318DFF"), isValid && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#00C2CE"), isInvalid && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#EB5757"), isWarning && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2["default"])(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#F08727")];
});
var PrefixLabel = _styledComponents["default"].span.withConfig({
  displayName: "TextInput__PrefixLabel",
  componentId: "sc-n3ri1-1"
})(function () {
  return [{
    "pointerEvents": "none",
    "position": "absolute",
    "left": "0.75rem",
    "fontSize": "0.9375rem",
    "fontWeight": "500",
    "color": "var(--text-tertiary)"
  }];
});
var PlaceholderLabel = _styledComponents["default"].span.withConfig({
  displayName: "TextInput__PlaceholderLabel",
  componentId: "sc-n3ri1-2"
})(function (_ref3) {
  var isValid = _ref3.isValid,
    isInvalid = _ref3.isInvalid,
    isWarning = _ref3.isWarning;
  return [{
    "pointerEvents": "none",
    "position": "absolute",
    "backgroundColor": "var(--bg-body)",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0.125rem",
    "paddingBottom": "0.125rem",
    "fontSize": "0.75rem",
    "fontWeight": "500",
    "color": "var(--text-primary)",
    "opacity": "0",
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "200ms",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(49 141 255 / var(--tw-text-opacity))",
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, isValid && [{
    "--tw-text-opacity": "1",
    "color": "rgb(0 194 206 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(0 194 206 / var(--tw-text-opacity))"
    }
  }], isInvalid && [{
    "--tw-text-opacity": "1",
    "color": "rgb(235 87 87 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(235 87 87 / var(--tw-text-opacity))"
    }
  }], isWarning && [{
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(240 135 39 / var(--tw-text-opacity))"
    }
  }]];
});
var BottomLabel = _styledComponents["default"].div.withConfig({
  displayName: "TextInput__BottomLabel",
  componentId: "sc-n3ri1-3"
})(function (_ref4) {
  var isValid = _ref4.isValid,
    isInvalid = _ref4.isInvalid,
    isWarning = _ref4.isWarning;
  return [{
    "pointerEvents": "none",
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "backgroundColor": "var(--bg-window)",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "0.8125rem",
    "fontWeight": "500",
    "color": "var(--text-tertiary)",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(49 141 255 / var(--tw-text-opacity))",
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, isValid && [{
    "borderRadius": "4px",
    "backgroundColor": "rgb(0 194 206 / 0.1)",
    "--tw-text-opacity": "1",
    "color": "rgb(0 194 206 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(0 194 206 / var(--tw-text-opacity))"
    }
  }], isInvalid && [{
    "borderRadius": "4px",
    "backgroundColor": "rgb(235 87 87 / 0.1)",
    "--tw-text-opacity": "1",
    "color": "rgb(235 87 87 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(235 87 87 / var(--tw-text-opacity))"
    }
  }], isWarning && [{
    "borderRadius": "4px",
    "backgroundColor": "rgb(240 135 39 / 0.1)",
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgb(240 135 39 / var(--tw-text-opacity))"
    }
  }], (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    svg {\n      margin-right: 6px;\n    }\n  "])))];
});
var _StyledSpan = (0, _styledComponents["default"])("span").withConfig({
  displayName: "TextInput___StyledSpan",
  componentId: "sc-n3ri1-4"
})({
  "marginLeft": "0.25rem",
  "--tw-text-opacity": "1",
  "color": "rgb(235 87 87 / var(--tw-text-opacity))"
});