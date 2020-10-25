import React, { Component } from 'react';
import SupremeList from './SupremeList.jsx';
import SupremeDetails from './SupremeDetails.jsx';

class App extends Component {

 

  render() {
    return (
      <div>
        <SupremeList/>
        <SupremeDetails />
      </div>
    )
  }
}

export default App
