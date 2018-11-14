import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

const Movie = ({id, poster, title, summary, genres, rating}) => {
  return (
    <Link to={`/details/${id}/`}>
      <div id={id} className="card">
        <img className="card-img-top" src={poster} alt="Poster" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{summary}</p> */}
          <p>
            {genres.map((genre, index) => (
              <span key={genre} className="badge badge-primary mr-1">{genre} </span>
            ))}
          </p>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  )
}

export default Movie