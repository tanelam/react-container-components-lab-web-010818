// Code SearchableMovieReviewsContainer Here
import React from "react";
import 'isomorphic-fetch';

import MovieReviews from "./MovieReviews"

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component{

  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log("hello")

    fetch(URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
     // .then(response => console.log(response.results))
    .then(response => this.setState({reviews: response.results}))
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })  // console.log(event.target.value)
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit"/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}



export default SearchableMovieReviewsContainer
