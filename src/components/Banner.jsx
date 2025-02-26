import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../config';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/banner.css';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, [movies.length]);

  const currentMovie = movies[currentIndex];

  // Handlers for arrows
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % movies.length);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {currentMovie?.title || currentMovie?.name || currentMovie?.original_name}
        </h1>
        <div className="banner_buttons">
          <Link to={`/movie/${currentMovie?.id}`} className="banner_link">
            <button className="banner_button">Play</button>
          </Link>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{currentMovie?.overview}</h1>
      </div>

      {/* Left/Right Arrows */}
      <div className="banner_arrows">
        <FaChevronLeft className="banner_arrow" onClick={handlePrev} />
        <FaChevronRight className="banner_arrow" onClick={handleNext} />
      </div>

      {/* Dots for slide indicators */}
      {/* <div className="banner_dots">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`banner_dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div> */}

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
