import React, { Component } from 'react';

class SupremeDetails extends Component {
  render() {
    const {current} = this.props


    if (!current.id) {
    return (
      <div>
      <h1>DETAILS</h1>
      <span>No Justice selected</span>

    </div>
    )
  }
  return (
      <div>
          <h1>image of justice</h1>
          <h1>bio</h1>
      </div>
  )
}
}

export default SupremeDetails