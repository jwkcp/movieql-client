import React from 'react'
import { Query } from 'react-apollo'
import { HOME_PAGE } from './queries'
import './Home.css'
import Movie from './Movie'

const Home = () => {
  return (
    <Query query={HOME_PAGE}>
      {
        ({ loading, data, error }) => {
          if (loading) return (
            <div className="loading d-flex justify-content-center mt-5">
              <h5 className="text-muted">Loading...</h5>
            </div>
          )
          if (error) return "something happend"
          

          return (
            <div className="d-flex justify-content-start flex-wrap flex-row">
              {data.movies.map(movie => (
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
          )
        }
      }
    </Query>
  )
}

export default Home