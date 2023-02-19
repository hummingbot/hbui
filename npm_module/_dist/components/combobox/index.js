"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = ComboBox;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _solid = require("@heroicons/react/solid");
var _excluded = ["items", "selected", "setSelected", "placeholderName"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ComboBox(_ref) {
  var items = _ref.items,
    selected = _ref.selected,
    setSelected = _ref.setSelected,
    placeholderName = _ref.placeholderName,
    props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(''),
    query = _useState[0],
    setQuery = _useState[1];
  var filteredItems = query === '' ? items : items.filter(function (item) {
    return item.label.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  });
  if (!placeholderName) {
    placeholderName = props.multiple ? 'Select multiple' : 'Select one';
  }
  var getPlaceholder = function getPlaceholder() {
    if (!selected) {
      return placeholderName;
    }
    if (props.multiple) {
      if (selected.length === 0) {
        return placeholderName;
      }
      if (selected.length === 1) {
        return selected[0].label;
      }
      if (selected.length > 1) {
        return selected.map(function (item) {
          return item.label;
        });
      }
    } else {
      return selected.label;
    }
  };
  var hasSelection = function hasSelection() {
    if (props.multiple && selected && selected.length > 0) return true;
    if (!props.multiple && selected) return true;
    return false;
  };
  return /*#__PURE__*/_react["default"].createElement(_react2.Combobox, Object.assign({
    value: selected,
    onChange: setSelected
  }, props), /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, /*#__PURE__*/_react["default"].createElement(_StyledComboboxInput, {
    placeholder: getPlaceholder(),
    displayValue: function displayValue(item) {
      return !selected ? '' : props.multiple ? '' : selected.label;
    },
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react["default"].createElement(_StyledComboboxButton, null, hasSelection() && /*#__PURE__*/_react["default"].createElement(_StyledXIcon, {
    "aria-hidden": "true",
    onClick: function onClick() {
      setSelected(props.multiple ? [] : null);
      setQuery('');
    }
  }), /*#__PURE__*/_react["default"].createElement(_StyledSelectorIcon, {
    "aria-hidden": "true"
  }))), /*#__PURE__*/_react["default"].createElement(_StyledComboboxOptions, null, filteredItems.length === 0 && query !== '' ? /*#__PURE__*/_react["default"].createElement(_StyledDiv3, null, "Nothing found.") : filteredItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_StyledComboboxOption, {
      key: item.id,
      value: item
    }, function (_ref2) {
      var selected = _ref2.selected,
        active = _ref2.active;
      return /*#__PURE__*/_react["default"].createElement(_StyledSpan, null, /*#__PURE__*/_react["default"].createElement(_StyledSpan2, {
        $_css: spanStyles[active]
      }, item.label), selected ? /*#__PURE__*/_react["default"].createElement(_StyledSpan3, {
        $_css2: spanBStyles[active]
      }, /*#__PURE__*/_react["default"].createElement(_StyledCheckIcon, {
        "aria-hidden": "true"
      })) : null);
    });
  }))));
}
var comboBoxStyles = {};
comboBoxStyles[true] = {
  "position": "relative",
  "cursor": "default",
  "userSelect": "none",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-tertiary)"
};
comboBoxStyles[false] = {
  "position": "relative",
  "cursor": "default",
  "userSelect": "none",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-secondary)"
};
var spanStyles = {};
spanStyles[true] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "backgroundColor": "rgb(201 205 207 / 0.1)",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontWeight": "500",
  ":hover": {
    "cursor": "pointer"
  }
};
spanStyles[false] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontWeight": "400",
  ":hover": {
    "cursor": "pointer"
  }
};
var spanBStyles = {};
spanBStyles[true] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "--tw-text-opacity": "1",
  "color": "currentColor"
};
spanBStyles[false] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "--tw-text-opacity": "1",
  "color": "currentColor"
};
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "combobox___StyledDiv",
  componentId: "sc-1c06qzc-0"
})({
  "position": "relative"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "combobox___StyledDiv2",
  componentId: "sc-1c06qzc-1"
})({
  "position": "relative",
  "width": "100%",
  "cursor": "default",
  "overflow": "hidden",
  "borderRadius": "0.25rem",
  "textAlign": "left",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "@media (min-width: 640px)": {
    "fontSize": "0.8125rem"
  }
});
var _StyledComboboxInput = (0, _styledComponents["default"])(_react2.Combobox.Input).withConfig({
  displayName: "combobox___StyledComboboxInput",
  componentId: "sc-1c06qzc-2"
})({
  "width": "100%",
  "borderWidth": "1px",
  "borderColor": "var(--border-window)",
  "backgroundColor": "var(--bg-window)",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "0.75rem",
  "paddingRight": "2.5rem",
  "fontSize": "0.8125rem",
  "fontWeight": "500",
  "lineHeight": "1.25rem",
  "color": "var(--text-secondary)",
  "outline": "2px solid transparent",
  "outlineOffset": "2px"
});
var _StyledComboboxButton = (0, _styledComponents["default"])(_react2.Combobox.Button).withConfig({
  displayName: "combobox___StyledComboboxButton",
  componentId: "sc-1c06qzc-3"
})({
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "right": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingRight": "0.5rem"
});
var _StyledXIcon = (0, _styledComponents["default"])(_solid.XIcon).withConfig({
  displayName: "combobox___StyledXIcon",
  componentId: "sc-1c06qzc-4"
})({
  "height": "1.25rem",
  "width": "1.25rem",
  "color": "var(--text-tertiary)"
});
var _StyledSelectorIcon = (0, _styledComponents["default"])(_solid.SelectorIcon).withConfig({
  displayName: "combobox___StyledSelectorIcon",
  componentId: "sc-1c06qzc-5"
})({
  "height": "1.25rem",
  "width": "1.25rem",
  "color": "var(--text-tertiary)"
});
var _StyledComboboxOptions = (0, _styledComponents["default"])(_react2.Combobox.Options).withConfig({
  displayName: "combobox___StyledComboboxOptions",
  componentId: "sc-1c06qzc-6"
})({
  "position": "absolute",
  "zIndex": "50",
  "marginTop": "0.25rem",
  "maxHeight": "15rem",
  "width": "100%",
  "overflow": "auto",
  "borderRadius": "0.375rem",
  "borderWidth": "1px",
  "borderColor": "var(--border-window)",
  "backgroundColor": "var(--bg-window)",
  "paddingTop": "0.25rem",
  "paddingBottom": "0.25rem",
  "fontSize": "0.9375rem",
  "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "@media (min-width: 640px)": {
    "fontSize": "0.8125rem"
  }
});
var _StyledDiv3 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "combobox___StyledDiv3",
  componentId: "sc-1c06qzc-7"
})({
  "position": "relative",
  "cursor": "default",
  "userSelect": "none",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "color": "var(--text-primary)"
});
var _StyledComboboxOption = (0, _styledComponents["default"])(_react2.Combobox.Option).withConfig({
  displayName: "combobox___StyledComboboxOption",
  componentId: "sc-1c06qzc-8"
})(["", ""], function (_ref3) {
  var active = _ref3.active;
  return comboBoxStyles[active];
});
var _StyledSpan = (0, _styledComponents["default"])("span").withConfig({
  displayName: "combobox___StyledSpan",
  componentId: "sc-1c06qzc-9"
})({
  "position": "relative",
  "display": "block"
});
var _StyledSpan2 = (0, _styledComponents["default"])("span").withConfig({
  displayName: "combobox___StyledSpan2",
  componentId: "sc-1c06qzc-10"
})(["", ""], function (p) {
  return p.$_css;
});
var _StyledSpan3 = (0, _styledComponents["default"])("span").withConfig({
  displayName: "combobox___StyledSpan3",
  componentId: "sc-1c06qzc-11"
})(["", ""], function (p) {
  return p.$_css2;
});
var _StyledCheckIcon = (0, _styledComponents["default"])(_solid.CheckIcon).withConfig({
  displayName: "combobox___StyledCheckIcon",
  componentId: "sc-1c06qzc-12"
})({
  "height": "1.25rem",
  "width": "1.25rem"
});