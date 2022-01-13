import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getMovie,
  removeMovie,
  removeMovieApi,
} from "../redux/actions/addFavoriteActions";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const FavouriteMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);
  const movie = useSelector((state) => state.addMovieReducer);
  console.log("movie", movie);
  return (
    <div className="movie-container">
      {movie?.map((item) => {
        const { title, poster_path, overview, vote_average } = item;
        return (
          <div className="movie">
            <h2 className="d-flex justify-content-end">
              <FaHeart onClick={() => dispatch(removeMovieApi(title))} />
            </h2>
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
              <h3>Title</h3>
              <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
              </span>
              )
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteMovie;
