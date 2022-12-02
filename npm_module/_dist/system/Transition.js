"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = Transition;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@headlessui/react");
function Transition(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Transition, getProps(props));
}
Transition.Child = function TransitionChild(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, getProps(props));
};
function getProps(props) {
  return Object.assign({}, props, {
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    css: {
      '&.enter': props.enter,
      '&.enter-from': props.enterFrom,
      '&.enter-to': props.enterTo,
      '&.entered': props.entered,
      '&.leave': props.leave,
      '&.leave-from': props.leaveFrom,
      '&.leave-to': props.leaveTo
    },
    beforeEnter: function beforeEnter() {
      var _props$beforeEnter;
      return (_props$beforeEnter = props.beforeEnter) === null || _props$beforeEnter === void 0 ? void 0 : _props$beforeEnter.call(props);
    },
    afterEnter: function afterEnter() {
      var _props$afterEnter;
      return (_props$afterEnter = props.afterEnter) === null || _props$afterEnter === void 0 ? void 0 : _props$afterEnter.call(props);
    },
    beforeLeave: function beforeLeave() {
      var _props$beforeLeave;
      return (_props$beforeLeave = props.beforeLeave) === null || _props$beforeLeave === void 0 ? void 0 : _props$beforeLeave.call(props);
    },
    afterLeave: function afterLeave() {
      var _props$afterLeave;
      return (_props$afterLeave = props.afterLeave) === null || _props$afterLeave === void 0 ? void 0 : _props$afterLeave.call(props);
    }
  });
}