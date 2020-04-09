import React from 'react';
import './App.css';
import Header from './layout/Header';

class App extends React.Component {
  render() {
      const {header} = this.props;
      return (
          <div className="App">
              <Header title={header} />
          </div>
      );
  };
}

export default App;
