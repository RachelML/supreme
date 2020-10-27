import React, { Component } from 'react';

class SupremeDetails extends Component {
  render() {
    const {current} = this.props


    if (!current.id) {
    return (
      <div className="sup-details">
      <h1 className="section-title">DETAILS</h1>
      <span>No Justice selected</span>

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