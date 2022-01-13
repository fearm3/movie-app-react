import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIE } from "../types/addFavoriteTypes";

export const addMovie = (payload) => {
  return {
    type: ADD_MOVIE,
    payload,
  };
};

export const removeMovie = (payload) => {
  return {
    type: REMOVE_MOVIE,
    payload,
  };
};
export const removeMovieApi = (title) => {
  return (dispatch) => {
    dispatch(removeMovie(title));
  };
};

export const addMovieApi = (payload) => {
  return (dispatch) => {
    dispatch(addMovie(payload));
  };
};

export const getMovie = (payload) => {
  return {
    type: GET_MOVIE,
    payload,
  };
};
export const getMovieApi = (payload) => {
  return (dispatch) => {
    dispatch(getMovieApi(payload));
  };
};
// export const toggleTodo = (payload) => {
//   return {
//     type: TOGGLE_TODO,
//     payload,
//   };
// };

// export const clearTodoList = () => {
//   return {
//     type: CLEAR_TODO_LIST,
//   };
// };
