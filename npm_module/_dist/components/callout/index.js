"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.CalloutWarning = exports.CalloutTip = exports.CalloutSuccess = exports.CalloutNote = exports.CalloutInfo = exports.CalloutDanger = exports.CalloutBug = exports.Callout = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));
var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));
var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));
var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/notifications/InfoIcon"));
var _TipIcon = _interopRequireDefault(require("../../assets/svgs/notifications/TipIcon"));
var _BugIcon = _interopRequireDefault(require("../../assets/svgs/notifications/BugIcon"));
var _NoteIcon = _interopRequireDefault(require("../../assets/svgs/notifications/NoteIcon"));
var _templateObject, _templateObject2;
var _excluded = ["title", "text"],
  _excluded2 = ["title", "text"],
  _excluded3 = ["title", "text"],
  _excluded4 = ["title", "text"],
  _excluded5 = ["title", "text"],
  _excluded6 = ["title", "text"],
  _excluded7 = ["title", "text"],
  _excluded8 = ["title", "text"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Callout = function Callout(_ref) {
  var title = _ref.title,
    text = _ref.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(RootDefault, props, /*#__PURE__*/_react["default"].createElement(HeaderDefault, null, title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.Callout = Callout;
var CalloutSuccess = function CalloutSuccess(_ref2) {
  var title = _ref2.title,
    text = _ref2.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(RootSuccess, props, /*#__PURE__*/_react["default"].createElement(HeaderSuccess, null, /*#__PURE__*/_react["default"].createElement(_CheckIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutSuccess = CalloutSuccess;
var CalloutInfo = function CalloutInfo(_ref3) {
  var title = _ref3.title,
    text = _ref3.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(RootInfo, props, /*#__PURE__*/_react["default"].createElement(HeaderInfo, null, /*#__PURE__*/_react["default"].createElement(_InfoIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutInfo = CalloutInfo;
var CalloutWarning = function CalloutWarning(_ref4) {
  var title = _ref4.title,
    text = _ref4.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(RootWarning, props, /*#__PURE__*/_react["default"].createElement(HeaderWarning, null, /*#__PURE__*/_react["default"].createElement(_WarningIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutWarning = CalloutWarning;
var CalloutDanger = function CalloutDanger(_ref5) {
  var title = _ref5.title,
    text = _ref5.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded5);
  return /*#__PURE__*/_react["default"].createElement(RootDanger, props, /*#__PURE__*/_react["default"].createElement(HeaderDanger, null, /*#__PURE__*/_react["default"].createElement(_ErrorIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutDanger = CalloutDanger;
var CalloutTip = function CalloutTip(_ref6) {
  var title = _ref6.title,
    text = _ref6.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref6, _excluded6);
  return /*#__PURE__*/_react["default"].createElement(RootTip, props, /*#__PURE__*/_react["default"].createElement(HeaderTip, null, /*#__PURE__*/_react["default"].createElement(_TipIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutTip = CalloutTip;
var CalloutBug = function CalloutBug(_ref7) {
  var title = _ref7.title,
    text = _ref7.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref7, _excluded7);
  return /*#__PURE__*/_react["default"].createElement(RootBug, props, /*#__PURE__*/_react["default"].createElement(HeaderBug, null, /*#__PURE__*/_react["default"].createElement(_BugIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutBug = CalloutBug;
var CalloutNote = function CalloutNote(_ref8) {
  var title = _ref8.title,
    text = _ref8.text,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref8, _excluded8);
  return /*#__PURE__*/_react["default"].createElement(RootNote, props, /*#__PURE__*/_react["default"].createElement(HeaderNote, null, /*#__PURE__*/_react["default"].createElement(_NoteIcon["default"], null), " ", title), /*#__PURE__*/_react["default"].createElement(Text, {
    className: "text"
  }, text));
};
exports.CalloutNote = CalloutNote;
var Root = _styledComponents["default"].div.withConfig({
  displayName: "callout__Root",
  componentId: "sc-19ipjvn-0"
})(function (_ref9) {
  var type = _ref9.type;
  return [{
    "borderRadius": "0.25rem",
    "borderLeftWidth": "8px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderTopWidth": "1px",
    "borderStyle": "solid"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    svg {\n      margin-right: 10px;\n    }\n  "])))];
});
var RootDefault = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootDefault",
  componentId: "sc-19ipjvn-1"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(241 243 243 / var(--tw-bg-opacity))"
  }, {
    ".dark &": {
      "backgroundColor": "rgb(250 250 250 / 0.05)"
    }
  }];
});
var RootSuccess = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootSuccess",
  componentId: "sc-19ipjvn-2"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(176 236 240 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(176 236 240 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(84 214 222 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(0 194 206 / 0.1)"
    }
  }];
});
var RootInfo = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootInfo",
  componentId: "sc-19ipjvn-3"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(191 220 255 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(191 220 255 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(117 179 255 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(117 179 255 / 0.1)"
    }
  }];
});
var RootDanger = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootDanger",
  componentId: "sc-19ipjvn-4"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(249 203 203 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(249 203 203 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(242 142 142 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(242 142 142 / 0.1)"
    }
  }];
});
var RootWarning = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootWarning",
  componentId: "sc-19ipjvn-5"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(250 218 188 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(250 218 188 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(245 175 110 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(245 175 110 / 0.1)"
    }
  }];
});
var RootTip = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootTip",
  componentId: "sc-19ipjvn-6"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(206 176 250 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(206 176 250 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(150 84 244 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(150 84 244 / 0.1)"
    }
  }];
});
var RootBug = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootBug",
  componentId: "sc-19ipjvn-7"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(250 218 188 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(250 218 188 / 0.2)"
  }, {
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgb(245 175 110 / var(--tw-border-opacity))",
      "backgroundColor": "rgb(245 175 110 / 0.1)"
    }
  }];
});
var RootNote = (0, _styledComponents["default"])(Root).withConfig({
  displayName: "callout__RootNote",
  componentId: "sc-19ipjvn-8"
})(function () {
  return [{
    "--tw-border-opacity": "1",
    "borderColor": "rgb(223 225 226 / var(--tw-border-opacity))",
    "backgroundColor": "rgb(223 225 226 / 0.2)"
  }, {
    ".dark &": {
      "backgroundColor": "rgb(250 250 250 / 0.05)"
    }
  }];
});
var Header = _styledComponents["default"].div.withConfig({
  displayName: "callout__Header",
  componentId: "sc-19ipjvn-9"
})(function (_ref10) {
  var type = _ref10.type;
  return [{
    "display": "flex",
    "alignItems": "center",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "1rem",
    "fontSize": "1.125rem",
    "fontWeight": "500"
  }];
});
var HeaderDefault = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderDefault",
  componentId: "sc-19ipjvn-10"
})(function (_ref11) {
  var type = _ref11.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(21 24 25 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(201 205 207 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderSuccess = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderSuccess",
  componentId: "sc-19ipjvn-11"
})(function (_ref12) {
  var type = _ref12.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(0 194 206 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(51 206 216 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderInfo = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderInfo",
  componentId: "sc-19ipjvn-12"
})(function (_ref13) {
  var type = _ref13.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(49 141 255 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(117 179 255 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderDanger = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderDanger",
  componentId: "sc-19ipjvn-13"
})(function (_ref14) {
  var type = _ref14.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(235 87 87 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(239 121 121 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderWarning = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderWarning",
  componentId: "sc-19ipjvn-14"
})(function (_ref15) {
  var type = _ref15.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(243 159 82 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderTip = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderTip",
  componentId: "sc-19ipjvn-15"
})(function (_ref16) {
  var type = _ref16.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(98 0 238 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(206 176 250 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderBug = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderBug",
  componentId: "sc-19ipjvn-16"
})(function (_ref17) {
  var type = _ref17.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(240 135 39 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(243 159 82 / var(--tw-text-opacity))"
    }
  }];
});
var HeaderNote = (0, _styledComponents["default"])(Header).withConfig({
  displayName: "callout__HeaderNote",
  componentId: "sc-19ipjvn-17"
})(function (_ref18) {
  var type = _ref18.type;
  return [{
    "--tw-text-opacity": "1",
    "color": "rgb(21 24 25 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }];
});
var Text = _styledComponents["default"].div.withConfig({
  displayName: "callout__Text",
  componentId: "sc-19ipjvn-18"
})(function () {
  return [{
    "overflowWrap": "break-word",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingBottom": "1rem",
    "paddingTop": "0.5rem",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(72 77 81 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    a {\n      text-decoration: underline;\n    }\n  "])))];
});