import React, { Component } from 'react';
import SupremeList from './SupremeList.jsx';
import SupremeDetails from './SupremeDetails.jsx';
import JusticeInfo from './JusticeInfo.jsx';


class App extends Component {

  constructor(props) {
    super(props)

    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)

    this.state = {
        justices: JusticeInfo.justices,
        faves: [],
        current: {}
    }
  }

  handleFaveToggle(justice) {
    const faves = this.state.faves.slice()
    const justiceIndex = faves.indexOf(justice)
    
    if ( justiceIndex > -1 ) {
      console.log("Removing " + justice.title + " from faves")
      faves.splice(justiceIndex, 1)
    } else {
      console.log("Adding " + justice.title + " to faves")
      faves.push(justice)
    }

    this.setState({faves})
  }

   handleDetailsClick(justice) {
    console.log(justice)
    https://www.supremecourt.gov/about/justice_pictures
    this.setState({current: justice})
    // console.log(this.state.justice)
  }


  render() {
    return (
      <div className="sup-library">
        <SupremeList justices={this.state.justices} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} />
        <SupremeDetails justices={this.state.justices} current={this.state.current} />
      </div>
    )
  }
}

export default App
