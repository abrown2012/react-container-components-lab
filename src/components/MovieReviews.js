// Code MovieReviews Here
import React from 'react'


const test = (props) => {
    return (
        <div className="review">
            {props.display_title}
        </div>
    )        
}


const MovieReviews = ({reviews})=> {
    


    return (
        <div className="review-list">
            {reviews.map(test)}
        </div>
    )
}

export default MovieReviews;