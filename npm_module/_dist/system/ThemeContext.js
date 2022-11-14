"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireDefault(require("react"));
var getInitialTheme = function getInitialTheme() {
  if (typeof window !== 'undefined' && window.localStorage) {
    var storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    var userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'dark';
};
var ThemeContext = /*#__PURE__*/_react["default"].createContext();
exports.ThemeContext = ThemeContext;
var ThemeProvider = function ThemeProvider(_ref) {
  var initialTheme = _ref.initialTheme,
    children = _ref.children;
  var _React$useState = _react["default"].useState(getInitialTheme),
    theme = _React$useState[0],
    setTheme = _React$useState[1];
  var rawSetTheme = function rawSetTheme(theme) {
    var root = window.document.documentElement;
    var isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  };
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }
  _react["default"].useEffect(function () {
    rawSetTheme(theme);
  }, [theme]);
  return /*#__PURE__*/_react["default"].createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, children);
};
exports.ThemeProvider = ThemeProvider;