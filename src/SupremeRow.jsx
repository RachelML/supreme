import React, { Component } from 'react';
import SupremePost from './SupremePost';

class SupremeRow extends Component {

  render() {
    return (
      <div  onClick={this.props.onDetailsClick}>
        <div>
        <h1>{this.props.justice.title}</h1>
        
        <SupremePost justice={this.props.justice} />

        </div>

      </div>
    )
  }
}

export default SupremeRow