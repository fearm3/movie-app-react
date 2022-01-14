import React, { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieApi,
  removeMovieApi,
} from "../redux/actions/addFavoriteActions";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const FavouriteMovie = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.addMovieReducer);
  // console.log('movie', movie);
  useEffect(() => {
    dispatch(getMovieApi());
  }, [dispatch]);
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie-container">
      {movie.length === 0 ? (
        <h3 style={{ marginTop: "5rem", color: "#000" }}>No added movie</h3>
      ) : (
        movie?.map((item) => {
          const { title, poster_path, vote_average, id } = item;
          return (
            <div className="movie" key={id}>
              <h2 className="d-flex justify-content-end">
                <TiDelete
                  color="red"
                  size={30}
                  onClick={() => dispatch(removeMovieApi(id))}
                />
              </h2>
              <img src={IMG_API + poster_path} alt={title} />
              <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                  {vote_average}
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default FavouriteMovie;
