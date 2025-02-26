import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "../config";
import Reviews from '../components/Reviews';
import '../styles/movieDetail.css';

export default function MoviePage(){
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [trailerKey, setTrailerKey] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovie() {
            const movieData = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
            setMovie(movieData.data);

            const trailers = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
            const trailer = trailers.data.results.find((video) => video.type === 'Trailer');
            setTrailerKey(trailer?.key || '');
        }

        fetchMovie();
    }, [id]);

    // if(loading) {
    //     return <div className="movie-page-loading">Loading...</div>;
    // }

    return (
        <div className="movie-page">
          <div
            className="movie-page-banner"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
          >
            <div className="movie-page-overlay">
              <h1 className="movie-page-title">{movie.title || movie.original_title}</h1>
              <p className="movie-page-overview">{movie.overview}</p>
              <p className="movie-page-details">
                <span>Release Date:</span> {movie.release_date}
                <span> | Rating:</span> {movie.vote_average} ⭐
              </p>
              <div className="movie-page-buttons">
                <a
                  href={`https://www.youtube.com/watch?v=${trailerKey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="watch-now-button">Watch Now</button>
                </a>
                <button className="add-to-list-button">+ Add to List</button>
              </div>
            </div>
          </div>
        </div>
      );
    };