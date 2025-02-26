import React, { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from '../config';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import '../styles/searchBar.css';

export default function SearchBar(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === '') return;
    
        try {
          const response = await axios.get(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
          );
          setResults(response.data.results.slice(0, 10)); // Display top 10 results
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
    
      const clearSearch = () => {
        setQuery('');
        setResults([]);
      };
    
      return (
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-icon-button">
              <FaSearch className="search-icon" />
            </button>
          </form>
    
          {results.length > 0 && (
            <div className="search-results">
              {results.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                  className="search-result-item"
                  onClick={clearSearch}
                >
                  {movie.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    };