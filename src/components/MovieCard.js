import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = (movie) => {
  const { title, poster_path, overview, vote_average } = movie;
  return (
    <div className="movie">
      <img
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt={title}
      />
      <div className="movie-info">
        <h3>Title</h3>
        <span>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
