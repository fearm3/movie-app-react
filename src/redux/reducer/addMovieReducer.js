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
        return [...state, action.payload];
      }

    case GET_MOVIE:
      return action.payload;
    case REMOVE_MOVIE:
      return state.filter((item) => item.id !== action.payload);

    default: {
      return state;
    }
  }
};

// [...state, action.payload];
