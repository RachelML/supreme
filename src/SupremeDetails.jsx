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
  const posterUrl = `https://www.supremecourt.gov/about/justice_pictures${this.props.current.poster_path}`
   
  return  (
    <div className="film-details">

    <div className="film-detail is-hydrated">
    <figure className="film-backdrop">
      <img src={posterUrl} alt="" />
      <h1 className="film-title">{this.props.current.title}</h1>
    </figure>
  
    <div className="film-meta">
      <h2 className="film-tagline">{this.props.current.tagline}</h2>
      <p className="film-detail-overview">
        <img src={posterUrl} className="film-detail-poster" alt={this.props.current.title} />
        {this.props.current.overview}
      </p>
    </div>
  </div>
  </div>
  )
}
}

export default SupremeDetails