import React from 'react';
import './App.css';
import Header from './layout/Header';
import Form from './content/Form';

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
