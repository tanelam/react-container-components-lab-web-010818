import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from "./MovieReviews"

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{

  state = {
    reviews: []
  }


  fetchMovieReviews(){
    fetch(URL)
    .then(resp => resp.json())
    // .then(reviews => console.log(reviews.results))
    .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render(){
    this.fetchMovieReviews()
    return(
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
         <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
