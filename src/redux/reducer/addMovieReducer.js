import { ADD_MOVIE } from "../types/addFavoriteTypes";

const initialState = {
  counter: 0,
  list: [
    {
      id: 0,
      text: "Add Todo",
      completed: false,
    },
  ],
};

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
    
};

export default addMovieReducer;
