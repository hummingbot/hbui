"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.Underline = exports.Red = exports.PrimaryColor = exports.PTiny = exports.PSmall = exports.PNano = exports.PLarge = exports.P = exports.Orange = exports.Medium = exports.LabelTiny = exports.LabelSmall = exports.LabelNano = exports.Label = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Green = exports.Bold = exports.Blue = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _colors = require("../../constants/colors");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var sharedTransforms = function sharedTransforms(props) {
  return [{
    "color": "var(--text-primary)"
  }, {
    "margin": "0px",
    "fontWeight": "400"
  }, props.isSmall && {
    "fontSize": "0.8125rem"
  }, props.isUnderline && {
    "textDecorationLine": "underline"
  }, props.isUppercase && {
    "textTransform": "uppercase"
  }, props.isItalic && {
    "fontStyle": "italic"
  }, props.isLight && {
    "fontWeight": "300"
  }, props.isMedium && {
    "fontWeight": "500"
  }, props.isBold && {
    "fontWeight": "700"
  }, props.isExtraBold && {
    "fontWeight": "800"
  }, props.isHeavy && {
    "fontWeight": "900"
  }, props.isPulsing && {
    "@keyframes pulse": {
      "50%": {
        "opacity": ".5"
      }
    },
    "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, props.isCentered && {
    "textAlign": "center"
  }, props.noSelect && {
    "userSelect": "none"
  }, props.isWhite && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(255 255 255 / var(--tw-text-opacity)) !important"
  }, props.isGreen && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(0 194 206 / var(--tw-text-opacity)) !important"
  }, props.isRed && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(235 87 87 / var(--tw-text-opacity)) !important"
  }, props.isBlue && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(49 141 255 / var(--tw-text-opacity)) !important"
  }, props.isOrange && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(240 135 39 / var(--tw-text-opacity)) !important"
  }, props.isYellow && {
    "--tw-text-opacity": "1 !important",
    "color": "rgb(252 219 23 / var(--tw-text-opacity)) !important"
  }, props.leadingNone && (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n      line-height: 100% !important;\n    "]))), props.isLabel && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      user-select: none;\n      font-family: Inter !important;\n      line-height: 100% !important;\n    "]))), (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    a {\n      text-decoration: underline;\n    }\n  "])))];
};
var PNano = _styledComponents["default"].p.withConfig({
  displayName: "typography__PNano",
  componentId: "sc-9kw1vl-0"
})({}, function (props) {
  return [{
    "fontSize": "11px"
  }];
}, sharedTransforms);
exports.PNano = PNano;
var PTiny = _styledComponents["default"].p.withConfig({
  displayName: "typography__PTiny",
  componentId: "sc-9kw1vl-1"
})({}, function (props) {
  return [{
    "fontSize": "0.75rem"
  }];
}, sharedTransforms);
exports.PTiny = PTiny;
var PSmall = _styledComponents["default"].p.withConfig({
  displayName: "typography__PSmall",
  componentId: "sc-9kw1vl-2"
})({}, function (props) {
  return [{
    "fontSize": "0.8125rem"
  }];
}, sharedTransforms);
exports.PSmall = PSmall;
var P = _styledComponents["default"].p.withConfig({
  displayName: "typography__P",
  componentId: "sc-9kw1vl-3"
})({}, function (props) {
  return [{
    "fontSize": "0.9375rem",
    "@media (min-width: 1024px)": {
      "fontSize": "1.125rem"
    }
  }];
}, sharedTransforms);
exports.P = P;
var PLarge = _styledComponents["default"].p.withConfig({
  displayName: "typography__PLarge",
  componentId: "sc-9kw1vl-4"
})({}, function (props) {
  return [{
    "fontSize": "1.125rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.25rem"
    }
  }];
}, sharedTransforms);
exports.PLarge = PLarge;
var H6 = _styledComponents["default"].h6.withConfig({
  displayName: "typography__H6",
  componentId: "sc-9kw1vl-5"
})({}, function (props) {
  return [{
    "fontSize": "1.125rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.25rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "1.5rem"
    }
  }];
}, sharedTransforms);
exports.H6 = H6;
var H5 = _styledComponents["default"].h5.withConfig({
  displayName: "typography__H5",
  componentId: "sc-9kw1vl-6"
})({}, function (props) {
  return [{
    "fontSize": "1.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.5rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "1.875rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);
exports.H5 = H5;
var H4 = _styledComponents["default"].h4.withConfig({
  displayName: "typography__H4",
  componentId: "sc-9kw1vl-7"
})({}, function (props) {
  return [{
    "fontSize": "1.5rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.875rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "2.25rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);
exports.H4 = H4;
var H3 = _styledComponents["default"].h3.withConfig({
  displayName: "typography__H3",
  componentId: "sc-9kw1vl-8"
})({}, function (props) {
  return [{
    "fontSize": "1.875rem",
    "@media (min-width: 768px)": {
      "fontSize": "2.25rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "3rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);
exports.H3 = H3;
var H2 = _styledComponents["default"].h2.withConfig({
  displayName: "typography__H2",
  componentId: "sc-9kw1vl-9"
})({}, function (props) {
  return [{
    "fontSize": "2.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "3rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "3.75rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);
exports.H2 = H2;
var H1 = _styledComponents["default"].h1.withConfig({
  displayName: "typography__H1",
  componentId: "sc-9kw1vl-10"
})({}, function (props) {
  return [{
    "fontSize": "3rem",
    "@media (min-width: 768px)": {
      "fontSize": "3.75rem"
    },
    "@media (min-width: 1024px)": {
      "fontSize": "4.5rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);

// helpers
exports.H1 = H1;
var PrimaryColor = _styledComponents["default"].span.withConfig({
  displayName: "typography__PrimaryColor",
  componentId: "sc-9kw1vl-11"
})({
  color: _colors.green
});
exports.PrimaryColor = PrimaryColor;
var Bold = _styledComponents["default"].span.withConfig({
  displayName: "typography__Bold",
  componentId: "sc-9kw1vl-12"
})({
  fontWeight: 'bold'
});
exports.Bold = Bold;
var Medium = _styledComponents["default"].span.withConfig({
  displayName: "typography__Medium",
  componentId: "sc-9kw1vl-13"
})({
  fontWeight: '500'
});
exports.Medium = Medium;
var Underline = _styledComponents["default"].span.withConfig({
  displayName: "typography__Underline",
  componentId: "sc-9kw1vl-14"
})({
  textDecoration: 'underline'
});
exports.Underline = Underline;
var Red = _styledComponents["default"].span.withConfig({
  displayName: "typography__Red",
  componentId: "sc-9kw1vl-15"
})({
  color: _colors.red
});
exports.Red = Red;
var Blue = _styledComponents["default"].span.withConfig({
  displayName: "typography__Blue",
  componentId: "sc-9kw1vl-16"
})({
  color: _colors.blue
});
exports.Blue = Blue;
var Green = _styledComponents["default"].span.withConfig({
  displayName: "typography__Green",
  componentId: "sc-9kw1vl-17"
})({
  color: _colors.green
});
exports.Green = Green;
var Orange = _styledComponents["default"].span.withConfig({
  displayName: "typography__Orange",
  componentId: "sc-9kw1vl-18"
})({
  color: _colors.orange
});

// forms / dashboards
exports.Orange = Orange;
var FieldLabelNano = (0, _styledComponents["default"])(PNano).withConfig({
  displayName: "typography__FieldLabelNano",
  componentId: "sc-9kw1vl-19"
})({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelTiny = (0, _styledComponents["default"])(PTiny).withConfig({
  displayName: "typography__FieldLabelTiny",
  componentId: "sc-9kw1vl-20"
})({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelSmall = (0, _styledComponents["default"])(PSmall).withConfig({
  displayName: "typography__FieldLabelSmall",
  componentId: "sc-9kw1vl-21"
})({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabel = (0, _styledComponents["default"])(P).withConfig({
  displayName: "typography__FieldLabel",
  componentId: "sc-9kw1vl-22"
})({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var labelStyles = [{
  "color": "var(--text-tertiary)"
}, {
  "fontWeight": "500"
}, {
  "lineHeight": "1"
}];
var LabelNano = (0, _styledComponents["default"])(FieldLabelNano).withConfig({
  displayName: "typography__LabelNano",
  componentId: "sc-9kw1vl-23"
})({}, function (props) {
  return labelStyles;
});
exports.LabelNano = LabelNano;
var LabelTiny = (0, _styledComponents["default"])(FieldLabelTiny).withConfig({
  displayName: "typography__LabelTiny",
  componentId: "sc-9kw1vl-24"
})({}, function (props) {
  return labelStyles;
});
exports.LabelTiny = LabelTiny;
var LabelSmall = (0, _styledComponents["default"])(FieldLabelSmall).withConfig({
  displayName: "typography__LabelSmall",
  componentId: "sc-9kw1vl-25"
})({}, function (props) {
  return labelStyles;
});
exports.LabelSmall = LabelSmall;
var Label = (0, _styledComponents["default"])(FieldLabel).withConfig({
  displayName: "typography__Label",
  componentId: "sc-9kw1vl-26"
})({}, function (props) {
  return labelStyles;
});
exports.Label = Label;