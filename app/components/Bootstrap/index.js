/** @jsx React.DOM */

var React = require('react/addons');

var Bootstrap = React.createClass({

    componentDidMount: function () {
      console.log('Component is mounted');
    },

    render: function () {
      return (
        <div>
          <h1 id='main-title'>Isomorphic Server Side Rendering with React</h1>
          <div className='test'>This is part of the Bootstrap React Component. This content will still be rendered even if you deactivate Javascript.</div>
        </div>
      );
    }

});

module.exports = Bootstrap;
