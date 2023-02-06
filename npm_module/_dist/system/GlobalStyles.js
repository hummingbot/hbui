"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = require("styled-components");
var _react = _interopRequireDefault(require("react"));
var _darkModeConfig = _interopRequireDefault(require("./darkModeConfig"));
var _templateObject;
var _GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["*, ::before, ::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: currentColor;\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);\n  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);\n  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);\n  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n}\n::before, ::after {\n  --tw-content: '';\n}\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  font-family: Satoshi, sans-serif;\n  font-feature-settings:  normal;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb, strong {\n  font-weight: bolder;\n}\ncode, kbd, samp, pre {\n  font-family: SF Mono, mono;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton, input, optgroup, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton, select {\n  text-transform: none;\n}\nbutton, [type='button'], [type='reset'], [type='submit'] {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n  height: auto;\n}\n[type='search'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol, ul, menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::placeholder, textarea::placeholder {\n  opacity: 1;\n  color:  #9ca3af;\n}\nbutton, [role=\"button\"] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg, svg, video, canvas, audio, iframe, embed, object {\n  display: block;\n  vertical-align: middle;\n}\nimg, video {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);\n  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);\n  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);\n  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);\n  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n}"])));
var CustomStyles = (0, _styledComponents.createGlobalStyle)({
  darkModeConfig: _darkModeConfig["default"]
});
var GlobalStyles = function GlobalStyles() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_GlobalStyles, null), /*#__PURE__*/_react["default"].createElement(CustomStyles, null));
};
var _default = GlobalStyles;
exports["default"] = _default;