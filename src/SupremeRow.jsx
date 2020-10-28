import React, { Component } from 'react';
import SupremePost from './SupremePost';

class SupremeRow extends Component {

  render() {
    return (
      <div className="sup-row" onClick={this.props.onDetailsClick}>
            
        <SupremePost justice={this.props.justice} />
        <div className="sup-summary">

        <h1>{this.props.justice.title}</h1>
        <p>{this.props.justice.release_date}</p>


        </div>
       

      </div>
    )
  }
}

export default SupremeRow