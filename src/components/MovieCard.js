import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addMovieApi } from "../redux/actions/addFavoriteActions";
import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = (movie) => {
  const { title, poster_path, overview, vote_average } = movie;
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const addFavoriteMovie = (e) => {
    e.preventDefault();

    dispatch(addMovieApi(movie));
  };

  return (
    <div className="movie">
      <h2 className="d-flex justify-content-end">
        <FaHeart onClick={addFavoriteMovie} />
      </h2>
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt={title}
      />
      <div className="movie-info">
        <h3>Title</h3>
        {currentUser && (
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
