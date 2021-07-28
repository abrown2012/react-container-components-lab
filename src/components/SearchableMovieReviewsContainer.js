import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
      };

    handleSubmit = event => {
        event.preventDefault()
        
        fetch(URL.concat(this.state.searchTerm))
         .then(res => res.json())
         .then(res => this.setState({ reviews: res.results }));
    }
    render() {
        return (
            <div>   
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}></input>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer; 