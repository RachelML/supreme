import React, { Component } from 'react';

class SupremePost extends Component {
  render() {
    const posterUrl = 'https://www.supremecourt.gov/about/justice_pictures' + this.props.justice.poster_path

    return (
         <img className="sup-headshot" src={posterUrl} />
    )
    
  }
}

export default SupremePost