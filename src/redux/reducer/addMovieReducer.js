import { ADD_MOVIE, GET_MOVIE, REMOVE_MOVIE } from "../types/addFavoriteTypes";

const initialState = {
  movie: [],
};

export const addMovieReducer = (state = initialState.movie, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return state.findIndex((index) => index.title !== action.payload.title)
        ? state.push(action.payload)
        : null;

    case GET_MOVIE:
      return [...state];
    case REMOVE_MOVIE:
      return state.filter((item) => item.title !== action.payload);

    default: {
      return state;
    }
  }
};

// [...state, action.payload];
