"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _solid = require("@heroicons/react/solid");
var _excluded = ["ariaHidden"],
  _excluded2 = ["ariaHidden"],
  _excluded3 = ["ariaHidden"],
  _excluded4 = ["active", "ariaHidden"],
  _excluded5 = ["active", "ariaHidden"],
  _excluded6 = ["active", "ariaHidden"],
  _excluded7 = ["active", "ariaHidden"],
  _excluded8 = ["active", "ariaHidden"],
  _excluded9 = ["ariaHidden"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var IconsDropdown = {
  ChevronUp: function ChevronUp(_ref) {
    var _ref$ariaHidden = _ref.ariaHidden,
      ariaHidden = _ref$ariaHidden === void 0 ? true : _ref$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_solid.ChevronUpIcon, Object.assign({
      "aria-hidden": ariaHidden
    }, rest));
  },
  ChevronDown: function ChevronDown(_ref2) {
    var _ref2$ariaHidden = _ref2.ariaHidden,
      ariaHidden = _ref2$ariaHidden === void 0 ? true : _ref2$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded2);
    return /*#__PURE__*/_react["default"].createElement(_StyledChevronDownIcon, Object.assign({
      "aria-hidden": ariaHidden
    }, rest));
  },
  ChevronRight: function ChevronRight(_ref3) {
    var _ref3$ariaHidden = _ref3.ariaHidden,
      ariaHidden = _ref3$ariaHidden === void 0 ? true : _ref3$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded3);
    return /*#__PURE__*/_react["default"].createElement(_StyledChevronRightIcon, Object.assign({
      "aria-hidden": ariaHidden
    }, rest));
  },
  Edit: function Edit(_ref4) {
    var active = _ref4.active,
      _ref4$ariaHidden = _ref4.ariaHidden,
      ariaHidden = _ref4$ariaHidden === void 0 ? true : _ref4$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded4);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M4 13V16H7L16 7L13 4L4 13Z",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }));
  },
  Duplicate: function Duplicate(_ref5) {
    var active = _ref5.active,
      _ref5$ariaHidden = _ref5.ariaHidden,
      ariaHidden = _ref5$ariaHidden === void 0 ? true : _ref5$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded5);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M4 4H12V12H4V4Z",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 8H16V16H8V8Z",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }));
  },
  Archive: function Archive(_ref6) {
    var active = _ref6.active,
      _ref6$ariaHidden = _ref6.ariaHidden,
      ariaHidden = _ref6$ariaHidden === void 0 ? true : _ref6$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref6, _excluded6);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /*#__PURE__*/_react["default"].createElement("rect", {
      x: "5",
      y: "8",
      width: "10",
      height: "8",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("rect", {
      x: "4",
      y: "4",
      width: "12",
      height: "4",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 12H12",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }));
  },
  Move: function Move(_ref7) {
    var active = _ref7.active,
      _ref7$ariaHidden = _ref7.ariaHidden,
      ariaHidden = _ref7$ariaHidden === void 0 ? true : _ref7$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref7, _excluded7);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M10 4H16V10",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M16 4L8 12",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 6H4V16H14V12",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }));
  },
  Delete: function Delete(_ref8) {
    var active = _ref8.active,
      _ref8$ariaHidden = _ref8.ariaHidden,
      ariaHidden = _ref8$ariaHidden === void 0 ? true : _ref8$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref8, _excluded8);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /*#__PURE__*/_react["default"].createElement("rect", {
      x: "5",
      y: "6",
      width: "10",
      height: "10",
      fill: active ? '#8B5CF6' : '#EDE9FE',
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M3 6H17",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 6V4H12V6",
      stroke: active ? '#C4B5FD' : '#A78BFA',
      strokeWidth: "2"
    }));
  },
  CheckRounded: function CheckRounded(_ref9) {
    var _ref9$ariaHidden = _ref9.ariaHidden,
      ariaHidden = _ref9$ariaHidden === void 0 ? true : _ref9$ariaHidden,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref9, _excluded9);
    return /*#__PURE__*/_react["default"].createElement("svg", Object.assign({}, rest, {
      "aria-hidden": ariaHidden,
      viewBox: "0 0 24 24",
      fill: "none"
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      cx: 12,
      cy: 12,
      r: 12,
      fill: "#fff",
      opacity: "0.2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M7 13l3 3 7-7",
      stroke: "#fff",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
};
var IconsSelect = {
  CheckIcon: _solid.CheckIcon,
  SelectorIcon: _solid.SelectorIcon
};
var Icons = Object.assign({}, IconsDropdown, IconsSelect);
var _default = Icons;
exports["default"] = _default;
var _StyledChevronDownIcon = (0, _styledComponents["default"])(_solid.ChevronDownIcon).withConfig({
  displayName: "HeroIcons___StyledChevronDownIcon",
  componentId: "sc-pxutor-0"
})({
  "marginLeft": "0.5rem",
  "marginRight": "-0.25rem",
  "height": "1.25rem",
  "width": "1.25rem",
  "--tw-text-opacity": "1",
  "color": "rgb(183 138 247 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    "color": "rgb(206 176 250 / var(--tw-text-opacity))"
  }
});
var _StyledChevronRightIcon = (0, _styledComponents["default"])(_solid.ChevronRightIcon).withConfig({
  displayName: "HeroIcons___StyledChevronRightIcon",
  componentId: "sc-pxutor-1"
})({
  "marginLeft": "0.25rem"
});