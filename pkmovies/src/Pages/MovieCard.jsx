import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getmovies } from '../Redux/GetMoveis/Action';
import { apikey } from '../Redux/ApiRelated/Api';
import './MovieSearch.css'; // Import the CSS file

function MovieSearch() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const moviedata = useSelector((state) => state.getmoviesreducer);
  const { isLoading, isError, data } = moviedata;

  // handling get request for movies
  useEffect(() => {
    const params = {
      s: searchParams.get('query') ? searchParams.get('query') : 'avatar',
      apiKey: apikey,
    };
    dispatch(getmovies(params));
  }, [location.search]);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="loading-message">
        <p>Loading...</p>
      </div>
    );
  } else if (isError) {
    return (
      <div className="error-message">
        <p>Something went wrong...</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {data &&
        data.length >= 1 &&
        data.map((movie) => (
          <Link to={`/details/${movie.imdbID}`} key={movie.imdbID}>
            <div className="movie-card">
              <img className="movie-image" src={movie.Poster} alt={movie.Title} />
              <div className="movie-title">{movie.Title}</div>
              <div className="movie-year">{movie.Year}</div>
            </div>
          </Link>
        ))}
      {data.length === 0 && (
        <div className="no-data">
          <p>No Data Found!!</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default MovieSearch;
