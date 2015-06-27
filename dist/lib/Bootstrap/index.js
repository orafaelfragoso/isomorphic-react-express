'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var Bootstrap = _reactAddons2['default'].createClass({
  displayName: 'Bootstrap',

  componentDidMount: function componentDidMount() {
    console.log('Component is mounted!');
  },

  render: function render() {
    return _reactAddons2['default'].createElement(
      'div',
      null,
      _reactAddons2['default'].createElement(
        'h1',
        { id: 'main-title' },
        'Isomorphic Server Side Rendering with React'
      ),
      _reactAddons2['default'].createElement(
        'div',
        { className: 'test' },
        'This is part of the Bootstrap React Component. This content will still be rendered even if you deactivate Javascript.'
      )
    );
  }

});

exports['default'] = Bootstrap;
module.exports = exports['default'];
//# sourceMappingURL=../../lib/Bootstrap/index.js.map