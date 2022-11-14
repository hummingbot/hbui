"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _ThemeContext = require("./ThemeContext");
var ThemeToggle = function ThemeToggle(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  var _React$useContext = _react["default"].useContext(_ThemeContext.ThemeContext),
    theme = _React$useContext.theme,
    setTheme = _React$useContext.setTheme;
  function isDark() {
    return theme === 'dark';
  }
  return /*#__PURE__*/_react["default"].createElement(_StyledButton, Object.assign({}, props, {
    className: "theme-toggle",
    onClick: function onClick() {
      return setTheme(isDark() ? 'light' : 'dark');
    }
  }), isDark() ? /*#__PURE__*/_react["default"].createElement(Moon, null) : /*#__PURE__*/_react["default"].createElement(Sun, null));
};
var Sun = function Sun() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93v-.001zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
  }));
};
var Moon = function Moon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.977 6.977 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
  }));
};
var _default = ThemeToggle;
exports["default"] = _default;
var _StyledButton = (0, _styledComponents["default"])("button").withConfig({
  displayName: "ThemeToggle___StyledButton",
  componentId: "sc-1fzyx1j-0"
})({
  "marginLeft": "25px",
  "height": "1.5rem",
  "width": "1.5rem",
  "fill": "currentColor",
  "color": "var(--text-primary)",
  ":hover": {
    "color": "var(--text-secondary)"
  },
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  }
});