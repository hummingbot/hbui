"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.TextInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var TextInput = _styledComponents["default"].input.withConfig({
  displayName: "input__TextInput",
  componentId: "sc-qq93g1-0"
})(function (_ref) {
  var isValid = _ref.isValid,
    isInvalid = _ref.isInvalid,
    isWarning = _ref.isWarning;
  return [{
    "display": "flex",
    "width": "100%"
  }, {
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "borderRadius": "4px",
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "fontWeight": "400"
  }, {
    "borderColor": "var(--border-input)",
    "backgroundColor": "var(--bg-input)",
    "color": "var(--text-input)"
  }, {
    "borderWidth": "2px",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(49 141 255 / var(--tw-border-opacity))"
    }
  }, isValid && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))"
    }
  }], isInvalid && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(235 87 87 / var(--tw-border-opacity))"
    }
  }], isWarning && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))",
    ":focus": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(240 135 39 / var(--tw-border-opacity))"
    }
  }]];
});
exports.TextInput = TextInput;