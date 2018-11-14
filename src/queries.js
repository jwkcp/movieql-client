import gql from 'graphql-tag'

export const HOME_PAGE = gql`
  query {
    movies(limit: 30, rating: 8) {
      id
      title
      rating
      genres
      medium_cover_image
      summary
    }
  }
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      title 
      rating
      genres
      medium_cover_image
      description_intro
    }
    movies_suggestion(id: $movieId) {
      id
      title
      rating
      genres
      medium_cover_image
    }
  }
`