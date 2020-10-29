import React, { Component } from 'react';

class SupremeDetails extends Component {
  render() {
    const {current} = this.props


    if (!current.id) {
        const background = ' https://cdn.cnn.com/cnnnext/dam/assets/161206091607-01-scotus-building-file.jpg'
    return (
        <div className="sup-details">
        <h1 className="section-title">DETAILS</h1>
      <div className="sup-detail">
          <img  src={background} />
      <p>
        <span>No justice selected</span>
      </p>
    </div>
    </div>
    )
  }
  const backdropUrl = `https://cdn.cnn.com${this.props.current.backdrop_path}`

  const posterUrl = `https://www.supremecourt.gov/about/justice_pictures${this.props.current.poster_path}`
   
  return  (
    <div className="sup-details">

    <div className="sup-detail is-hydrated">
    <figure className="sup-backdrop">
      <img src={backdropUrl} alt="" />
      <h1 className="sup-title">{this.props.current.title}</h1>
    </figure>
  
    <div className="sup-meta">
      <h2 className="sup-tagline">{this.props.current.tagline}</h2>
      <p className="sup-detail-overview">
        <img src={posterUrl} className="sup-detail-poster" alt={this.props.current.title} />
        {this.props.current.overview}
      </p>
    </div>
  </div>
  </div>
  )
}
}

export default SupremeDetails