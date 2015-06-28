import React from 'react/addons';

class Bootstrap extends React.Component {

    componentDidMount() {
      console.log('Component is mounted!');
    }

    render() {
      return (
        <div>
          <h1 id='main-title'>Isomorphic Server Side Rendering with React</h1>
          <div className='test'>This is part of the Bootstrap React Component. This content will still be rendered even if you deactivate Javascript.</div>
        </div>
      );
    }

};

export default Bootstrap;
