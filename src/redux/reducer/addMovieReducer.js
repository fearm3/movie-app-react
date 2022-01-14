import { ADD_MOVIE, GET_MOVIE, REMOVE_MOVIE } from "../types/addFavoriteTypes";
const initialState = {
  movie: [],
};
export const addMovieReducer = (state = initialState.movie, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      let addedItem = state.find((c) => c.title === action.payload.title);
      if (addedItem) {
        return state;
      } else {
        const newState = [...state, action.payload];
        localStorage.setItem("favouriteMovies", JSON.stringify(newState));
        return newState;
      }
    case GET_MOVIE:
      return action.payload;
    case REMOVE_MOVIE:
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("favouriteMovies", JSON.stringify(newState));
      return newState;
    default: {
      return state;
    }
  }
};
