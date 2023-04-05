"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Pagination(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 7 : _ref$count,
    _ref$defaultPage = _ref.defaultPage,
    defaultPage = _ref$defaultPage === void 0 ? 2 : _ref$defaultPage,
    onPageChange = _ref.onPageChange;
  var _useState = (0, _react.useState)(defaultPage !== null && defaultPage !== void 0 ? defaultPage : 1),
    currentPage = _useState[0],
    setCurrentPage = _useState[1];
  return /*#__PURE__*/_react["default"].createElement(PaginationRoot, null, renderItems({
    count: count,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    onPageChange: onPageChange
  }));
}
function renderItems(_ref2) {
  var count = _ref2.count,
    currentPage = _ref2.currentPage,
    setCurrentPage = _ref2.setCurrentPage,
    onPageChange = _ref2.onPageChange;
  var totalPages = count;
  var handlePrevClick = function handlePrevClick() {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(currentPage - 1);
  };
  var handleNextClick = function handleNextClick() {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(currentPage + 1);
  };
  function renderPageNumbers() {
    var maxPages = 7;
    var pages = [];
    var startPage = Math.max(1, currentPage - 2);
    var endPage = Math.min(totalPages, currentPage + 2);
    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= Math.ceil(maxPages / 2) - 1) {
      startPage = 1;
      endPage = maxPages - 2;
    } else if (currentPage >= totalPages - Math.floor(maxPages / 2) + 1) {
      startPage = totalPages - maxPages + 3;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor((maxPages - 4) / 2);
      endPage = currentPage + Math.floor((maxPages - 4) / 2);
    }
    if (startPage > 1) {
      pages.push( /*#__PURE__*/_react["default"].createElement(PaginationItem, {
        key: 1,
        onClick: function onClick() {
          setCurrentPage(1);
          onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(1);
        },
        active: currentPage === 1
      }, "1"));
      if (startPage > 2) {
        pages.push( /*#__PURE__*/_react["default"].createElement(PaginationItem, {
          key: "ellipsis-start",
          onClick: function onClick() {
            setCurrentPage(startPage - 1);
            onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(startPage - 1);
          },
          active: undefined
        }, "..."));
      }
    }
    var _loop = function _loop(i) {
      var active = i === currentPage;
      pages.push( /*#__PURE__*/_react["default"].createElement(PaginationItem, {
        key: i,
        onClick: function onClick() {
          setCurrentPage(i);
          onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(i);
        },
        active: active
      }, i));
    };
    for (var i = startPage; i <= endPage; i++) {
      _loop(i);
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push( /*#__PURE__*/_react["default"].createElement(PaginationItem, {
          key: "ellipsis-end",
          onClick: function onClick() {
            setCurrentPage(endPage + 1);
            onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(endPage + 1);
          },
          active: undefined
        }, "..."));
      }
      pages.push( /*#__PURE__*/_react["default"].createElement(PaginationItem, {
        key: totalPages,
        onClick: function onClick() {
          setCurrentPage(totalPages);
          onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(totalPages);
        },
        active: currentPage === totalPages
      }, totalPages));
    }
    return pages;
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(PaginationItem, {
    onClick: function onClick() {
      return handlePrevClick();
    },
    dimmed: currentPage === 1
  }, /*#__PURE__*/_react["default"].createElement(ChevronLeftIcon, null)), renderPageNumbers(), /*#__PURE__*/_react["default"].createElement(PaginationItem, {
    onClick: function onClick() {
      return handleNextClick();
    },
    dimmed: currentPage === totalPages
  }, /*#__PURE__*/_react["default"].createElement(ChevronRightIcon, null)));
}
var PaginationRoot = _styledComponents["default"].div.withConfig({
  displayName: "pagination__PaginationRoot",
  componentId: "sc-1khf6za-0"
})(function () {
  return [{
    "display": "flex",
    "backgroundColor": "var(--bg-window)"
  }, {
    "width": "fit-content"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n    height: 47px;\n    border-radius: 3px;\n  "])))];
});
var PaginationItem = _styledComponents["default"].li.withConfig({
  displayName: "pagination__PaginationItem",
  componentId: "sc-1khf6za-1"
})(function (_ref3) {
  var active = _ref3.active,
    dimmed = _ref3.dimmed;
  return [{
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }, {
    "height": "100%",
    "width": "100%",
    "paddingLeft": "1.25rem",
    "paddingRight": "1.25rem"
  }, {
    "color": "var(--text-tertiary)",
    ":hover": {
      "color": "var(--text-primary)"
    }
  }, {
    "fill": "#788187",
    ":hover": {
      "fill": "#000000"
    },
    ".dark &:hover": {
      "fill": "#FFFFFF"
    }
  }, {
    "fontWeight": "700"
  }, dimmed && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2["default"])(["\n      opacity: 20%;\n    "]))), active && {
    "--tw-text-opacity": "1",
    "color": "rgb(0 194 206 / var(--tw-text-opacity))"
  }, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2["default"])(["\n    user-select: none;\n\n    cursor: pointer;\n    width: 50px;\n\n    :first-child {\n      padding-right: 12px;\n      margin-right: 12px;\n    }\n\n    :last-child {\n      padding-left: 12px;\n      margin-left: 12px;\n    }\n  "])))];
});
function ChevronRightIcon(_ref4) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref4), _ref4));
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: "14",
    height: "12",
    viewBox: "0 0 14 12"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.97013 10.3581L10.6344 6.96628L0.955904 6.96628C0.398293 6.96628 4.77989e-07 6.53244 5.22813e-07 6.01972C5.71084e-07 5.46756 0.398294 5.07316 0.955904 5.07316L10.6344 5.07316L6.97013 1.64188C6.77098 1.44468 6.69132 1.20804 6.69132 0.971404C6.69132 0.734765 6.77098 0.498125 6.9303 0.300925C7.28876 -0.0934747 7.8862 -0.0934747 8.2845 0.261485L13.7013 5.3098C14.0996 5.66476 14.0996 6.33524 13.7013 6.6902L8.2845 11.7385C7.8862 12.0935 7.28876 12.0935 6.9303 11.6991C6.57184 11.3047 6.57184 10.7131 6.97013 10.3581Z"
  }));
}
function ChevronLeftIcon(_ref5) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref5), _ref5));
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: "14",
    height: "12",
    viewBox: "0 0 14 12"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.02987 1.64188L3.36558 5.03372L13.0441 5.03372C13.6017 5.03372 14 5.46756 14 5.98028C14 6.53244 13.6017 6.92684 13.0441 6.92684L3.36558 6.92684L7.02987 10.3581C7.22902 10.5553 7.30868 10.792 7.30868 11.0286C7.30868 11.2652 7.22902 11.5019 7.0697 11.6991C6.71124 12.0935 6.1138 12.0935 5.7155 11.7385L0.298719 6.6902C-0.0995746 6.33524 -0.0995746 5.66476 0.298719 5.3098L5.7155 0.261484C6.1138 -0.0934759 6.71124 -0.0934759 7.0697 0.300924C7.42816 0.695324 7.42816 1.28692 7.02987 1.64188Z"
  }));
}
var _default = Pagination;
exports["default"] = _default;