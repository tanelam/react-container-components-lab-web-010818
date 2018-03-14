// Code MovieReviews Here

import React from "react"

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => <Review
      headline={review.headline}
      byline={review.byline}
      link={review.link}
      summaryShort={review.summary_short} />)}
    </div>
  )

const Review = ({headline, byline, link, summaryShort}) => {
  return(
    <div className="review">
      <h4>{headline}</h4>
      <h4>By: {byline}</h4>
      <a href={link.url}>See Review</a>
      <h5>{summaryShort}</h5>
    </div>
  )
}


MovieReviews.defaultProps = {
 reviews: []
}

export default MovieReviews;
