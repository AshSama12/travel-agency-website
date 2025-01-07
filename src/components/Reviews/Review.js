import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import './Review.css';
import { FaStar } from 'react-icons/fa';

// Import profile images
import profilePic1 from '../../assets/Ellipse 9.png';
import profilePic2 from '../../assets/Ellipse 10.png';
import profilePic3 from '../../assets/Ellipse 11.png';
import profilePic4 from '../../assets/Ellipse 12.png';
import profilePic5 from '../../assets/Ellipse 13.png';
import profilePic6 from '../../assets/Ellipse 14.png';

const lorem = new LoremIpsum({
  sentencesPerParagraph: { min: 1, max: 3 },
  wordsPerSentence: { min: 4, max: 12 },
});

// Generate sample reviews with Lorem Ipsum
const generateSampleReviews = () => {
  const profilePics = [profilePic1, profilePic2, profilePic3, profilePic4, profilePic5, profilePic6];
  const names = ["Ashini", "Lakshika", "Vindya", "Tharini", "Nishan", "Kavya"];
  const reviews = [];

  for (let i = 0; i < 10; i++) {
    reviews.push({
      name: names[i % names.length],
      profilePic: profilePics[i % profilePics.length],
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
      review: lorem.generateSentences(2), // Generate 2 sentences of Lorem Ipsum
    });
  }
  return reviews;
};

const Review = () => {
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(generateSampleReviews());

  const handleReviewChange = (e) => setNewReview(e.target.value);
  const handleRatingChange = (value) => setRating(value);

  const handleSubmitReview = () => {
    const newReviewObj = { name: "New User", profilePic: profilePic1, rating, review: newReview };
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
              <div className="review-details">
                <span className="review-author">{review.name}</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "filled" : ""} />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
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
