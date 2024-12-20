import React, { useState } from "react";
import './Review.css';
import { FaStar } from 'react-icons/fa';

// Sample Reviews
const sampleReviews = [
  { name: "Ashini", profilePic: "/assets/Ellipse 9.png", rating: 4, review: "Great experience, highly recommend this place for everyone!" },
  { name: "Lakshika", profilePic: "/assets/Ellipse 10.png", rating: 5, review: "Absolutely loved it! The service was top-notch, would definitely come back." },
  { name: "Vindya", profilePic: "/assets/Ellipse 11.png", rating: 3, review: "It was okay. Could use some improvements, but overall decent." },
  { name: "Tharini", profilePic: "/assets/Ellipse 12.png", rating: 4, review: "Beautiful experience, the place is fantastic but a little crowded." },
  { name: "Nishan", profilePic: "/assets/Ellipse 13.png", rating: 2, review: "Not as expected, disappointing experience with some aspects." },
  { name: "Kavya", profilePic: "/assets/Ellipse 14.png", rating: 5, review: "A wonderful visit, highly recommend the service and views!" },
];

const Review = () => {
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(sampleReviews);

  const handleReviewChange = (e) => setNewReview(e.target.value);
  const handleRatingChange = (value) => setRating(value);

  const handleSubmitReview = () => {
    const newReviewObj = { name: "New User", profilePic: "/assets/Ellipse 9.png", rating, review: newReview };
    setReviews([...reviews, newReviewObj]);
    setNewReview(""); // Reset the review input
    setRating(0); // Reset the rating
  };

  return (
    <div className="review-container">
      {/* Background Image */}
      <div className="background-image">
        <img src="/assets/background.png" alt="background" className="blurred-background" />
      </div>

      <div className="review-header">
        <h2>Reviews and Ratings</h2>
        <img src="/assets/Frame 24.png" alt="Reviews Topic" className="topic-image" />
      </div>

      {/* Reviews Section */}
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img src={review.profilePic} alt="Profile" className="profile-icon" />
              <div className="review-author">
                <span>{review.name}</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "filled" : ""} />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              {review.review.length > 100 ? review.review.slice(0, 100) + "... <span className='see-more'>See more</span>" : review.review}
            </p>
          </div>
        ))}
      </div>

      {/* Write a Review Section */}
      <div className="write-review">
        <textarea
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
          className="review-input"
        />
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "filled" : ""}
              onClick={() => handleRatingChange(i + 1)}
            />
          ))}
        </div>
        <button className="submit-review" onClick={handleSubmitReview}>
          <img src="/assets/review.png" alt="Submit Review" className="submit-icon" />
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Review;
