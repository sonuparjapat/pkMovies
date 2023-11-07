import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getsingle } from '../Redux/GetSingle/Action';
import { apikey } from '../Redux/ApiRelated/Api';
import './Single.css'; // Import the CSS file

export default function Single() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.getsinglereducer);
  const { isLoading, isError, single } = data;

  // handling single data details
  useEffect(() => {
    dispatch(getsingle({ i: id, apiKey: apikey }));
  }, []);

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
    <div  className="single-container" >
      {single ? (
        <div >
          <img className="single-image" src={single.Poster} alt={single.Title} />
          <h2 className="single-title">{single.Title}</h2>
          <p className="single-year">{single.Year}</p>
          <span className="genre-badge">{single.Genre}</span>
          <p className="single-plot">{single.Plot}</p>
        </div>
      ) : (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
