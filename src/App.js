import React from 'react';
import Header from './layout/Header';
import Form from './content/Form';

import './App.css';

class App extends React.Component {
  render() {
      const { header } = this.props;

      return (
          <div className="App">
              <Header title={ header } />
              <Form />
          </div>
      );
  };
}

export default App;
