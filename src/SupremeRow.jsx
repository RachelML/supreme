import React, { Component } from 'react';
import SupremePost from './SupremePost';

class SupremeRow extends Component {

  render() {
    return (
      <div>
        <div>
        <h1>{this.props.justice.title}</h1>

        
          {/* <h1>John G. Roberts, Jr., Chief Justice of the United States,</h1>
          <h1>Clarence Thomas, Associate Justice,</h1>
          <h1>Stephen G. Breyer, Associate Justice,</h1>
          <h1>Samuel A. Alito, Jr., Associate Justice</h1>
          <h1>Sonia Sotomayor, Associate Justice,</h1>
          <h1>Elena Kagan, Associate Justice,</h1>
          <h1>Neil M. Gorsuch, Associate Justice</h1>
          <h1>Brett M. Kavanaugh, Associate Justice</h1> */}
        <SupremePost/>

        </div>

      </div>
    )
  }
}

export default SupremeRow