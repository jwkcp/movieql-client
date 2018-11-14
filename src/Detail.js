import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { MOVIE_DETAILS } from './queries'
import './Detail.css'
import Movie from './Movie'

const Detail = ({
  match: { 
    params: { movieId }
  } 
}) => {
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId:parseInt(movieId, 10) }}>
      {
        ({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return "Error occured"
          return (
            <div className="container">
              <div className="container-guide">
                <div className="row">
                  <div className="col-md-3">
                    <img src={data.movie.medium_cover_image} alt="Poster" className="rounded float-left" />
                  </div>
                  <div className="col-md-9">
                    <h3>{data.movie.title}</h3>
                    <p className="#">{data.movie.description_intro}</p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <Link to='/' className="btn btn-primary float-right">Back</Link>
                  </div>
                  
                </div>
              </div>
              
              
              <hr />

              <h5 className="mt-5">Suggested movies</h5>
              <div className="d-flex justify-content-start">
                {data.movies_suggestion.map(movie => (
                  <Movie 
                  key={movie.id}
                  id={movie.id}
                  title={movie.title} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                  summary={movie.summary}
                />
                ))}
              </div>
            </div>
          )
        }
      }
    </Query>
  )
}

export default Detail