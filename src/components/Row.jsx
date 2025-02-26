import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import '../styles/row.css';

export default function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                            src={`https://image.tmdb.org/t/p/original${
                                isLargeRow ? movie.poster_path : movie.poster_path || movie.backdrop_path
                                }`}
                                alt={movie.name || movie.title}
                        />
                     </Link>
                ))}
            </div>
        </div>
    );
};