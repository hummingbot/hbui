"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.Window = exports.SeparatorWindow = exports.SeparatorBase = exports.Separator = exports.Section = exports.SBLRootSidebar = exports.SBLRootContent = exports.SBLRoot = exports.PageRoot = exports.PaddingBox = exports.ItemsRow = exports.ContainerRow = exports.Container = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Section = _styledComponents["default"].div.withConfig({
  displayName: "layout__Section",
  componentId: "sc-12wnft2-0"
})(function () {
  return [(0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: flex;\n    flex-direction: column;\n  "]))), {
    "width": "100%"
  }];
});
exports.Section = Section;
var containerVariants = {
  "short": {
    "width": "calc(100% - 40px)",
    "maxWidth": "1022px",
    "@media (min-width: 768px)": {
      "width": "91.666667%"
    }
  },
  large: {
    "width": "calc(100% - 40px)",
    "@media (min-width: 768px)": {
      "width": "80%"
    },
    "@media (min-width: 1280px)": {
      "width": "70%"
    },
    "@media (min-width: 1536px)": {
      "width": "60%",
      "maxWidth": "1440px"
    }
  },
  full: {
    "width": "calc(100% - 40px)",
    "@media (min-width: 768px)": {
      "width": "91.666667%"
    },
    "@media (min-width: 1280px)": {
      "width": "83.333333%"
    },
    "@media (min-width: 1536px)": {
      "width": "calc(100% - 60px)"
    }
  }
};
var Container = _styledComponents["default"].div.withConfig({
  displayName: "layout__Container",
  componentId: "sc-12wnft2-1"
})(function () {
  return [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    align-self: center;\n  "]))), function (_ref) {
    var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'large' : _ref$variant;
    return containerVariants[variant];
  }];
});
exports.Container = Container;
var ContainerRow = (0, _styledComponents["default"])(Container).withConfig({
  displayName: "layout__ContainerRow",
  componentId: "sc-12wnft2-2"
})(["display:flex;"]);
exports.ContainerRow = ContainerRow;
var PaddingBox = _styledComponents["default"].div.withConfig({
  displayName: "layout__PaddingBox",
  componentId: "sc-12wnft2-3"
})(function () {
  return [{
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "@media (min-width: 768px)": {
      "paddingTop": "2rem",
      "paddingBottom": "2rem"
    },
    "@media (min-width: 1024px)": {
      "paddingTop": "3rem",
      "paddingBottom": "3rem"
    },
    "@media (min-width: 1280px)": {
      "paddingTop": "5rem",
      "paddingBottom": "5rem"
    }
  }];
});
exports.PaddingBox = PaddingBox;
var PageRoot = (0, _styledComponents["default"])(Section).withConfig({
  displayName: "layout__PageRoot",
  componentId: "sc-12wnft2-4"
})(function () {
  return [(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    min-height: 100vh;\n  "])))];
});

// sidebar layout
exports.PageRoot = PageRoot;
var SBLRoot = _styledComponents["default"].div.withConfig({
  displayName: "layout__SBLRoot",
  componentId: "sc-12wnft2-5"
})(function () {
  return [(0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    overflow: hidden;\n  "])))];
});
exports.SBLRoot = SBLRoot;
var SBLRootContent = _styledComponents["default"].div.withConfig({
  displayName: "layout__SBLRootContent",
  componentId: "sc-12wnft2-6"
})(function () {
  return [(0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 100vh;\n    overflow-y: scroll;\n  "]))), {
    "width": "100%",
    "backgroundColor": "var(--bg-body)"
  }];
});
exports.SBLRootContent = SBLRootContent;
var SBLRootSidebar = _styledComponents["default"].div.withConfig({
  displayName: "layout__SBLRootSidebar",
  componentId: "sc-12wnft2-7"
})(function () {
  return [{
    "width": "0",
    "backgroundColor": "var(--bg-window)",
    "@media (min-width: 768px)": {
      "width": "270px"
    }
  }, (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 100vh;\n  "])))];
});
exports.SBLRootSidebar = SBLRootSidebar;
var ItemsRow = _styledComponents["default"].div.withConfig({
  displayName: "layout__ItemsRow",
  componentId: "sc-12wnft2-8"
})(function () {
  return [{
    "display": "flex",
    "flexWrap": "wrap"
  }, (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    > * {\n      ", "\n    }\n    > *:last-child {\n      ", "\n    }\n  "])), {
    "marginRight": "0.5rem"
  }, {
    "marginRight": "0px"
  })];
});
exports.ItemsRow = ItemsRow;
var SeparatorBase = _styledComponents["default"].div.withConfig({
  displayName: "layout__SeparatorBase",
  componentId: "sc-12wnft2-9"
})(function (props) {
  return [(0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 1px;\n    width: 100%;\n    margin-top: 20px;\n    border-bottom-width: 1px;\n  "])))];
});
exports.SeparatorBase = SeparatorBase;
var Separator = (0, _styledComponents["default"])(SeparatorBase).withConfig({
  displayName: "layout__Separator",
  componentId: "sc-12wnft2-10"
})(function (props) {
  return [{
    "borderColor": "var(--border-body)"
  }];
});
exports.Separator = Separator;
var SeparatorWindow = (0, _styledComponents["default"])(SeparatorBase).withConfig({
  displayName: "layout__SeparatorWindow",
  componentId: "sc-12wnft2-11"
})(function (props) {
  return [{
    "borderColor": "var(--border-window)"
  }];
});
exports.SeparatorWindow = SeparatorWindow;
var Window = _styledComponents["default"].div.withConfig({
  displayName: "layout__Window",
  componentId: "sc-12wnft2-12"
})(function () {
  return [{
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)",
    "backgroundColor": "var(--bg-window)",
    "paddingTop": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "@media (min-width: 768px)": {
      "paddingTop": "16px",
      "paddingBottom": "16px",
      "paddingLeft": "24px",
      "paddingRight": "24px"
    },
    "@media (min-width: 1024px)": {
      "borderRadius": "0.25rem",
      "paddingTop": "24px",
      "paddingBottom": "24px",
      "paddingLeft": "32px",
      "paddingRight": "32px"
    }
  }];
});
exports.Window = Window;