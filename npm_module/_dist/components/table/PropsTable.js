"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _typography = require("../../../hbui/elements/typography");
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

var PropsTableRowElement = _styledComponents["default"].span.withConfig({
  displayName: "PropsTable__PropsTableRowElement",
  componentId: "sc-1lfobs4-0"
})(function () {
  return [{
    "display": "grid",
    "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
    "gap": "1rem"
  }];
});
var _StyledPropsTableRowElement2 = (0, _styledComponents["default"])(PropsTableRowElement).withConfig({
  displayName: "PropsTable___StyledPropsTableRowElement2",
  componentId: "sc-1lfobs4-1"
})({
  "marginBottom": "1rem"
});
var _StyledPropsTableRowElement = (0, _styledComponents["default"])(PropsTableRowElement).withConfig({
  displayName: "PropsTable___StyledPropsTableRowElement",
  componentId: "sc-1lfobs4-2"
})({
  "marginBottom": "2rem",
  "borderBottomWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))",
  "paddingBottom": "0.5rem",
  ".dark &": {
    "--tw-border-opacity": "1",
    "borderColor": "rgb(95 255 215 / var(--tw-border-opacity))"
  }
});
var defaultStyle = [{
  "gridColumn": "span 4 / span 4"
}];
var skip1ColumnsStyle = [{
  "gridColumn": "span 6 / span 6"
}];
var skip2ColumnsStyle = [{
  "gridColumn": "span 8 / span 8"
}];
var skip3ColumnsStyle = [{
  "gridColumn": "span 10 / span 10"
}];
var lastPVariants = {
  "default": defaultStyle,
  skip1Columns: skip1ColumnsStyle,
  skip2Columns: skip2ColumnsStyle,
  skip3Columns: skip3ColumnsStyle
};
var LastP = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable__LastP",
  componentId: "sc-1lfobs4-3"
})(function () {
  return [function (_ref) {
    var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;
    return lastPVariants[variant];
  }];
});
var getLastPVariant = function getLastPVariant(skipColumn2, skipColumn3, skipColumn4) {
  var skipColumnsNum = 0;
  if (skipColumn2) skipColumnsNum++;
  if (skipColumn3) skipColumnsNum++;
  if (skipColumn4) skipColumnsNum++;
  console.log('skipColumnsNum', skipColumnsNum);
  if (skipColumnsNum === 0) return 'default';
  return "skip" + skipColumnsNum + "Columns";
};
function PropsTable(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? "Props" : _ref2$title,
    _ref2$items = _ref2.items,
    items = _ref2$items === void 0 ? null : _ref2$items,
    _ref2$omitTitle = _ref2.omitTitle,
    omitTitle = _ref2$omitTitle === void 0 ? false : _ref2$omitTitle,
    _ref2$col1Name = _ref2.col1Name,
    col1Name = _ref2$col1Name === void 0 ? "Prop Name" : _ref2$col1Name,
    _ref2$col2Name = _ref2.col2Name,
    col2Name = _ref2$col2Name === void 0 ? "Type" : _ref2$col2Name,
    _ref2$col3Name = _ref2.col3Name,
    col3Name = _ref2$col3Name === void 0 ? "Default" : _ref2$col3Name,
    _ref2$col4Name = _ref2.col4Name,
    col4Name = _ref2$col4Name === void 0 ? "Required" : _ref2$col4Name,
    _ref2$col5Name = _ref2.col5Name,
    col5Name = _ref2$col5Name === void 0 ? "Description" : _ref2$col5Name,
    _ref2$param1Name = _ref2.param1Name,
    param1Name = _ref2$param1Name === void 0 ? "propName" : _ref2$param1Name,
    _ref2$param2Name = _ref2.param2Name,
    param2Name = _ref2$param2Name === void 0 ? "type" : _ref2$param2Name,
    _ref2$param3Name = _ref2.param3Name,
    param3Name = _ref2$param3Name === void 0 ? "default" : _ref2$param3Name,
    _ref2$param4Name = _ref2.param4Name,
    param4Name = _ref2$param4Name === void 0 ? "required" : _ref2$param4Name,
    _ref2$param5Name = _ref2.param5Name,
    param5Name = _ref2$param5Name === void 0 ? "description" : _ref2$param5Name,
    _ref2$skipColumn = _ref2.skipColumn2,
    skipColumn2 = _ref2$skipColumn === void 0 ? false : _ref2$skipColumn,
    _ref2$skipColumn2 = _ref2.skipColumn3,
    skipColumn3 = _ref2$skipColumn2 === void 0 ? false : _ref2$skipColumn2,
    _ref2$skipColumn3 = _ref2.skipColumn4,
    skipColumn4 = _ref2$skipColumn3 === void 0 ? false : _ref2$skipColumn3;
  var lastPVariant = getLastPVariant(skipColumn2, skipColumn3, skipColumn4);
  return /*#__PURE__*/_react["default"].createElement("div", null, !omitTitle && /*#__PURE__*/_react["default"].createElement(_typography.H6, null, title || 'Props'), !omitTitle && /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_StyledPropsTableRowElement, null, /*#__PURE__*/_react["default"].createElement(_StyledP, {
    isBold: true
  }, col1Name), !skipColumn2 && /*#__PURE__*/_react["default"].createElement(_StyledP2, {
    isBold: true
  }, col2Name), !skipColumn3 && /*#__PURE__*/_react["default"].createElement(_StyledP3, {
    isBold: true
  }, col3Name), !skipColumn4 && /*#__PURE__*/_react["default"].createElement(_StyledP4, {
    isBold: true
  }, col4Name), /*#__PURE__*/_react["default"].createElement(LastP, {
    isBold: true,
    variant: lastPVariant
  }, col5Name)), items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_StyledPropsTableRowElement2, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_StyledP5, {
      isBold: true
    }, item[param1Name]), !skipColumn2 && /*#__PURE__*/_react["default"].createElement(_StyledP6, null, item[param2Name]), !skipColumn3 && /*#__PURE__*/_react["default"].createElement(_StyledP7, null, item[param3Name]), !skipColumn4 && /*#__PURE__*/_react["default"].createElement(_StyledP8, null, item[param4Name]), /*#__PURE__*/_react["default"].createElement(LastP, {
      variant: lastPVariant
    }, item[param5Name]));
  }));
}
var _default = PropsTable;
exports["default"] = _default;
var _StyledP = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP",
  componentId: "sc-1lfobs4-4"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP2 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP2",
  componentId: "sc-1lfobs4-5"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP3 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP3",
  componentId: "sc-1lfobs4-6"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP4 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP4",
  componentId: "sc-1lfobs4-7"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP5 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP5",
  componentId: "sc-1lfobs4-8"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP6 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP6",
  componentId: "sc-1lfobs4-9"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP7 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP7",
  componentId: "sc-1lfobs4-10"
})({
  "gridColumn": "span 2 / span 2"
});
var _StyledP8 = (0, _styledComponents["default"])(_typography.P).withConfig({
  displayName: "PropsTable___StyledP8",
  componentId: "sc-1lfobs4-11"
})({
  "gridColumn": "span 2 / span 2"
});