"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _typography = require("../../elements/typography");
var _buttons = require("../../elements/buttons");
var _layout = require("../../elements/layout");
var _HummingbotLogo = _interopRequireDefault(require("../../assets/svgs/logos/HummingbotLogo"));
var _CoinAlphaLogo = _interopRequireDefault(require("../../assets/svgs/logos/CoinAlphaLogo"));
var _TriangleDown = _interopRequireDefault(require("../../assets/svgs/arrows/TriangleDown"));
var _ThemeToggle = _interopRequireDefault(require("../../system/ThemeToggle"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var _excluded = ["siteNameA", "siteNameB", "linksLeft", "linksRight", "userData", "showThemeToggle", "linkCTA", "bgColor", "linkClass", "customLogoSVG", "logo", "position", "containerVariant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function NavBar(_ref) {
  var siteNameA = _ref.siteNameA,
    siteNameB = _ref.siteNameB,
    linksLeft = _ref.linksLeft,
    linksRight = _ref.linksRight,
    userData = _ref.userData,
    showThemeToggle = _ref.showThemeToggle,
    linkCTA = _ref.linkCTA,
    bgColor = _ref.bgColor,
    linkClass = _ref.linkClass,
    customLogoSVG = _ref.customLogoSVG,
    logo = _ref.logo,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'fixed' : _ref$position,
    _ref$containerVariant = _ref.containerVariant,
    containerVariant = _ref$containerVariant === void 0 ? 'regular' : _ref$containerVariant,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    mobileOpen = _useState[0],
    setMobileOpen = _useState[1];
  var LinkClass = linkClass;
  var processLink = function processLink(link) {
    if (!link.subLinks) {
      return /*#__PURE__*/_react["default"].createElement(FirstLevelItem, {
        key: link.url + link.label
      }, /*#__PURE__*/_react["default"].createElement(NavItem, null, /*#__PURE__*/_react["default"].createElement(LinkClass, {
        to: link.url
      }, /*#__PURE__*/_react["default"].createElement(NavP, null, link.label))));
    }
    // following code executes if link has property "subLinks"
    return /*#__PURE__*/_react["default"].createElement(FirstLevelItem, {
      key: link.url + link.label
    }, /*#__PURE__*/_react["default"].createElement(LinkGroup, null, /*#__PURE__*/_react["default"].createElement(_StyledNavP, null, link.label), /*#__PURE__*/_react["default"].createElement(Links, {
      className: "links"
    }, link.subLinks.map(function (subLink) {
      var ItemClass = subLink.external ? NavA : LinkClass;
      return /*#__PURE__*/_react["default"].createElement(NavItem, {
        key: subLink.label
      }, /*#__PURE__*/_react["default"].createElement(ItemClass, {
        to: subLink.url,
        href: subLink.url,
        target: "_blank",
        rel: "noreferrer"
      }, /*#__PURE__*/_react["default"].createElement(NavP, null, subLink.label), subLink.external && /*#__PURE__*/_react["default"].createElement(ExternalLinkIcon, null)));
    }))));
  };
  var processMobileLink = function processMobileLink(link) {
    // following code executes if link has property "subLinks"
    return /*#__PURE__*/_react["default"].createElement(FirstLevelItem, {
      key: link.url + link.label
    }, !link.subLinks ? /*#__PURE__*/_react["default"].createElement(LinkClass, {
      to: link.url
    }, /*#__PURE__*/_react["default"].createElement(NavMobileH4, {
      onClick: function onClick() {
        return setMobileOpen(false);
      }
    }, link.label)) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StyledNavMobileH, null, link.label), /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, link.subLinks.map(function (subLink) {
      var ItemClass = subLink.external ? NavA : LinkClass;
      return /*#__PURE__*/_react["default"].createElement(ItemClass, {
        key: subLink.url + subLink.label,
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        to: subLink.url,
        href: subLink.url,
        target: "_blank",
        rel: "noreferrer",
        onClick: function onClick() {
          return setMobileOpen(false);
        }
      }, /*#__PURE__*/_react["default"].createElement(NavMobileH4, null, subLink.label), subLink.external && /*#__PURE__*/_react["default"].createElement(ExternalLinkIcon, null));
    }))));
  };
  var processCTA = function processCTA(linkCTA) {
    if (!linkCTA) return null;
    var CTALinkClass = linkCTA.external ? NavA : LinkClass;
    return /*#__PURE__*/_react["default"].createElement(CTALinkClass, {
      to: linkCTA.url,
      href: linkCTA.url,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/_react["default"].createElement(_StyledButton, {
      variant: linkCTA && linkCTA.buttonVariant ? linkCTA.buttonVariant : 'success'
    }, linkCTA.label));
  };
  var processLogo = function processLogo() {
    if (customLogoSVG) {
      return customLogoSVG;
    }
    if (logo && logo === 'hummingbot') {
      return /*#__PURE__*/_react["default"].createElement(_HummingbotLogo["default"], null);
    }
    if (logo && logo === 'coinalpha') {
      return /*#__PURE__*/_react["default"].createElement(_CoinAlphaLogo["default"], null);
    }
    // fallback to Hummingbot logo
    return /*#__PURE__*/_react["default"].createElement(_HummingbotLogo["default"], null);
  };
  var showMobileNav = function showMobileNav() {
    return /*#__PURE__*/_react["default"].createElement(MobileNavRoot, {
      style: {
        zIndex: '99999'
      }
    }, /*#__PURE__*/_react["default"].createElement(_StyledCloseIcon, {
      onClick: function onClick() {
        return setMobileOpen(false);
      }
    }), /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, processLogo(), /*#__PURE__*/_react["default"].createElement(_StyledNavMobileH2, null, siteNameA, " ", /*#__PURE__*/_react["default"].createElement(_StyledSpan, null, siteNameB))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), linksRight && linksRight.map(function (link) {
      return processMobileLink(link);
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(NavBarRoot, {
    style: {
      backgroundColor: bgColor || 'transparent',
      position: position
    }
  }, /*#__PURE__*/_react["default"].createElement(_StyledContainer, {
    variant: containerVariant
  }, /*#__PURE__*/_react["default"].createElement(LeftSide, null, /*#__PURE__*/_react["default"].createElement(LinkClass, {
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement(LogoContainer, null, processLogo(), /*#__PURE__*/_react["default"].createElement(_typography.Body, null, /*#__PURE__*/_react["default"].createElement(_typography.Bold, null, siteNameA), " ", siteNameB))), /*#__PURE__*/_react["default"].createElement(LinksLeft, null, linksLeft && linksLeft.map(function (link) {
    return processLink(link);
  }))), /*#__PURE__*/_react["default"].createElement(RightSide, null, showThemeToggle && /*#__PURE__*/_react["default"].createElement(_ThemeToggle["default"], {
    style: {
      position: 'relative',
      top: '-2px'
    }
  }), linksRight && /*#__PURE__*/_react["default"].createElement(_StyledDiv3, null, linksRight.map(function (link) {
    return processLink(link);
  })), userData && /*#__PURE__*/_react["default"].createElement(Menu, null, userData.profileImage ? /*#__PURE__*/_react["default"].createElement("img", {
    src: userData.profileImage,
    alt: userData.name
  }) : /*#__PURE__*/_react["default"].createElement(ProfileIcon, null), /*#__PURE__*/_react["default"].createElement(_typography.P, null, userData.name), /*#__PURE__*/_react["default"].createElement(_TriangleDown["default"], null)), processCTA(linkCTA)), /*#__PURE__*/_react["default"].createElement(HamburgerIcon, {
    onClick: function onClick() {
      return setMobileOpen(!mobileOpen);
    }
  }), mobileOpen && showMobileNav()));
}
var _default = NavBar;
exports["default"] = _default;
var LogoContainer = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__LogoContainer",
  componentId: "sc-1p4sd4m-0"
})(function () {
  return [{
    "marginRight": "2rem",
    "display": "flex",
    "alignItems": "center"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    svg {\n      ", ";\n    }\n    p {\n      ", ";\n    }\n  "])), {
    "marginRight": "0.5rem"
  }, {
    "marginLeft": "0.5rem",
    "userSelect": "none",
    "padding": "0px"
  })];
});
var LinkGroup = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__LinkGroup",
  componentId: "sc-1p4sd4m-1"
})(function (props) {
  return {
    position: 'relative',
    height: 'auto',
    '& .links': {
      display: 'none'
    },
    ':hover': {
      '& .links': {
        display: 'block'
      }
    },
    '& a': {
      textDecoration: 'none !important'
    }
  };
});
var Links = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__Links",
  componentId: "sc-1p4sd4m-2"
})({
  position: 'absolute',
  top: '100%',
  display: 'flex',
  flexDirection: 'column'
});
var NavA = _styledComponents["default"].a.withConfig({
  displayName: "NavBar__NavA",
  componentId: "sc-1p4sd4m-3"
})(function () {
  return [{
    "display": "flex"
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    svg {\n      margin-left: 10px;\n      position: relative;\n      top: 2px;\n    }\n  "])))];
});
var NavItem = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__NavItem",
  componentId: "sc-1p4sd4m-4"
})(function () {
  return [{
    "display": "flex",
    ":hover": {
      "borderBottomWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgb(0 194 206 / var(--tw-border-opacity))"
    }
  }, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: block;\n    padding: 0 !important;\n    user-select: none;\n    cursor: pointer;\n    border-bottom: 2px solid transparent;\n  "])))];
});
var NavP = (0, _styledComponents["default"])(_typography.PSmall).withConfig({
  displayName: "NavBar__NavP",
  componentId: "sc-1p4sd4m-5"
})(function () {
  return [{
    "fontWeight": "500"
  }, (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: block;\n    margin: 0;\n    position: relative;\n    font-size: 15px !important;\n    user-select: none;\n    cursor: pointer;\n    white-space: nowrap;\n  "])))];
});
var _StyledNavP = (0, _styledComponents["default"])(NavP).withConfig({
  displayName: "NavBar___StyledNavP",
  componentId: "sc-1p4sd4m-6"
})({
  "position": "relative",
  "top": "-1px"
});
var NavMobileH4 = (0, _styledComponents["default"])(_typography.H4).withConfig({
  displayName: "NavBar__NavMobileH4",
  componentId: "sc-1p4sd4m-7"
})(function () {
  return [{
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgb(255 255 255 / var(--tw-text-opacity))"
    }
  }, (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    display: inline-flex;\n    margin: 0;\n    position: relative;\n    font-size: 24px !important;\n    user-select: none;\n    cursor: pointer;\n    white-space: nowrap;\n  "])))];
});
var _StyledNavMobileH2 = (0, _styledComponents["default"])(NavMobileH4).withConfig({
  displayName: "NavBar___StyledNavMobileH2",
  componentId: "sc-1p4sd4m-8"
})({
  "paddingLeft": "8px",
  "fontWeight": "500",
  "lineHeight": "1"
});
var _StyledNavMobileH = (0, _styledComponents["default"])(NavMobileH4).withConfig({
  displayName: "NavBar___StyledNavMobileH",
  componentId: "sc-1p4sd4m-9"
})({
  "opacity": "0.5"
});
var FirstLevelItem = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__FirstLevelItem",
  componentId: "sc-1p4sd4m-10"
})(function () {
  return [{
    "marginRight": "1.25rem"
  }];
});
var NavBarRoot = (0, _styledComponents["default"])(_layout.Section).withConfig({
  displayName: "NavBar__NavBarRoot",
  componentId: "sc-1p4sd4m-11"
})(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
    isDisabled = _ref2.isDisabled;
  return [{
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "zIndex": "50"
  },
  // tw`z-50 fixed top-0 left-0 flex w-full`,
  // tw`py-2 px-2 md:px-4`,
  {
    "borderBottomWidth": "1px",
    "borderColor": "var(--border-body)"
  }, (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 50px;\n  "])))];
});
var Side = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__Side",
  componentId: "sc-1p4sd4m-12"
})({
  display: 'flex',
  alignItems: 'center',
  height: '50px'
});
var LinksLeft = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__LinksLeft",
  componentId: "sc-1p4sd4m-13"
})(function () {
  return [{
    "display": "none",
    "alignItems": "center",
    "@media (min-width: 976px)": {
      "display": "flex"
    }
  }];
});
var LeftSide = (0, _styledComponents["default"])(Side).withConfig({
  displayName: "NavBar__LeftSide",
  componentId: "sc-1p4sd4m-14"
})(function () {
  return [(0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    .logo {\n      top: 7px;\n      left: 10px;\n      ", ";\n    }\n  "])), {
    "position": "absolute"
  })];
});
var RightSide = (0, _styledComponents["default"])(Side).withConfig({
  displayName: "NavBar__RightSide",
  componentId: "sc-1p4sd4m-15"
})(function () {
  return [{
    "display": "none",
    "alignItems": "center",
    "@media (min-width: 976px)": {
      "display": "flex"
    }
  }, (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    img {\n      ", ";\n    }\n    svg {\n      ", ";\n    }\n  "])), {
    "marginLeft": "1rem",
    "borderRadius": "4px"
  }, {
    "marginLeft": "0.5rem"
  })];
});
var Menu = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__Menu",
  componentId: "sc-1p4sd4m-16"
})(function () {
  return [{
    "display": "flex",
    "height": "32px",
    "cursor": "pointer",
    "alignItems": "center"
  }];
});
var MobileNavRoot = _styledComponents["default"].div.withConfig({
  displayName: "NavBar__MobileNavRoot",
  componentId: "sc-1p4sd4m-17"
})(function () {
  return [{
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "var(--bg-body)"
  }, {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "zIndex": "50"
  }, {
    "height": "2000px",
    "width": "100%"
  }, {
    "paddingTop": "64px",
    "paddingBottom": "64px",
    "paddingLeft": "24px",
    "paddingRight": "24px"
  }];
});
function ProfileIcon() {
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "21",
    viewBox: "0 0 22 21"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.188.313H3.813A2.866 2.866 0 00.937 3.187v14.376a2.838 2.838 0 002.875 2.875h14.376a2.866 2.866 0 002.875-2.875V3.188A2.895 2.895 0 0018.188.312zM11 4.625c1.752 0 3.234 1.482 3.234 3.234 0 1.797-1.482 3.235-3.234 3.235a3.221 3.221 0 01-3.234-3.235c0-1.752 1.437-3.234 3.234-3.234zM4.576 17.563c.36-2.426 2.426-4.313 4.987-4.313h2.874c2.516 0 4.583 1.887 4.942 4.313H4.576z"
  }));
}
function ExternalLinkIcon() {
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg2, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "14",
    viewBox: "0 0 13 14"
  }, /*#__PURE__*/_react["default"].createElement(_StyledPath, {
    d: "M12.62.625L8.48.65a.347.347 0 00-.355.356v.838c0 .203.152.38.355.38l1.88-.076.05.051-7.084 7.084a.385.385 0 00-.101.203c0 .076.05.178.101.229l.584.584c.05.05.152.101.229.101.05 0 .152-.05.203-.101l7.084-7.084.05.05-.076 1.88c0 .203.178.355.381.355h.838a.347.347 0 00.356-.355L13 1.005a.39.39 0 00-.38-.38zm-1.651 7.313h-.406a.418.418 0 00-.407.406v3.91c0 .101-.076.152-.152.152H1.37c-.101 0-.152-.05-.152-.152V3.62c0-.076.05-.152.152-.152h3.91a.418.418 0 00.407-.406v-.407a.437.437 0 00-.407-.406H1.22C.533 2.25 0 2.809 0 3.469v8.937c0 .686.533 1.219 1.219 1.219h8.937c.66 0 1.219-.533 1.219-1.219V8.344a.437.437 0 00-.406-.406z"
  }));
}
function HamburgerIcon(_ref3) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref3), _ref3));
  return /*#__PURE__*/_react["default"].createElement(_StyledDiv4, props, /*#__PURE__*/_react["default"].createElement(_StyledDiv5, null), /*#__PURE__*/_react["default"].createElement(_StyledDiv6, null), /*#__PURE__*/_react["default"].createElement(_StyledDiv7, null));
}
function CloseIcon(_ref4) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref4), _ref4));
  return /*#__PURE__*/_react["default"].createElement(_StyledSvg3, Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    fill: "none",
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillOpacity: "0.01",
    d: "M0 0H30V30H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.777 7H28.888999999999996V9.514H8.777z",
    transform: "rotate(45 8.777 7)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.001 21.222H27.113V23.736H7.001z",
    transform: "rotate(-45 7.001 21.222)"
  }));
}
var _StyledCloseIcon = (0, _styledComponents["default"])(CloseIcon).withConfig({
  displayName: "NavBar___StyledCloseIcon",
  componentId: "sc-1p4sd4m-18"
})({
  "position": "absolute",
  "top": "10px",
  "right": "12px",
  "cursor": "pointer"
});
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv",
  componentId: "sc-1p4sd4m-19"
})({
  "paddingLeft": "16px"
});
var _StyledButton = (0, _styledComponents["default"])(_buttons.Button).withConfig({
  displayName: "NavBar___StyledButton",
  componentId: "sc-1p4sd4m-20"
})({
  "marginLeft": "24px"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv2",
  componentId: "sc-1p4sd4m-21"
})({
  "display": "flex",
  "alignItems": "center"
});
var _StyledSpan = (0, _styledComponents["default"])("span").withConfig({
  displayName: "NavBar___StyledSpan",
  componentId: "sc-1p4sd4m-22"
})({
  "marginLeft": "4px",
  "fontWeight": "100"
});
var _StyledContainer = (0, _styledComponents["default"])(_layout.Container).withConfig({
  displayName: "NavBar___StyledContainer",
  componentId: "sc-1p4sd4m-23"
})({
  "display": "flex",
  "flexDirection": "row",
  "alignItems": "center",
  "justifyContent": "space-between"
});
var _StyledDiv3 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv3",
  componentId: "sc-1p4sd4m-24"
})({
  "marginLeft": "16px",
  "display": "flex",
  "alignItems": "center"
});
var _StyledSvg = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "NavBar___StyledSvg",
  componentId: "sc-1p4sd4m-25"
})({
  "fill": "currentColor",
  "color": "var(--text-secondary)"
});
var _StyledSvg2 = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "NavBar___StyledSvg2",
  componentId: "sc-1p4sd4m-26"
})({
  "marginLeft": "16px"
});
var _StyledPath = (0, _styledComponents["default"])("path").withConfig({
  displayName: "NavBar___StyledPath",
  componentId: "sc-1p4sd4m-27"
})({
  "fill": "currentColor"
});
var _StyledDiv4 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv4",
  componentId: "sc-1p4sd4m-28"
})({
  "display": "block",
  "cursor": "pointer",
  "@media (min-width: 976px)": {
    "display": "none"
  }
});
var _StyledDiv5 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv5",
  componentId: "sc-1p4sd4m-29"
})({
  "marginBottom": "3px",
  "height": "2px",
  "width": "16px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
  ".dark &": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
});
var _StyledDiv6 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv6",
  componentId: "sc-1p4sd4m-30"
})({
  "marginBottom": "3px",
  "height": "2px",
  "width": "16px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
  ".dark &": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
});
var _StyledDiv7 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "NavBar___StyledDiv7",
  componentId: "sc-1p4sd4m-31"
})({
  "height": "2px",
  "width": "16px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
  ".dark &": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity))"
  }
});
var _StyledSvg3 = (0, _styledComponents["default"])("svg").withConfig({
  displayName: "NavBar___StyledSvg3",
  componentId: "sc-1p4sd4m-32"
})({
  "fill": "currentColor"
});