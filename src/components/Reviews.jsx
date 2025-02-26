import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { BASE_URL, API_KEY } from '../config';
import '../styles/reviews.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const request = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
      setReviews(request.data.results);
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
