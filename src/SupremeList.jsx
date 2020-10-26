import React, { Component } from 'react';
import SupremeRow from './SupremeRow.jsx';


class SupremeList extends Component {

   

  render() {


    const allJustices = this.props.justices.map((justice) => {


      return (
        
   
          <SupremeRow 
          justice={justice}
          key={justice.id} 
          onDetailsClick={() => this.props.onDetailsClick(justice)}

           />
   
      )
  
})

return(
    <div className="sup-list">
        <h1 className="section-title">Justices</h1>
        {allJustices}
    </div>
)
  }
}

export default SupremeList