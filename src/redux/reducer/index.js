import { combineReducers } from "redux";
import { addMovieReducer } from "./addMovieReducer";

const rootReducer = combineReducers({
  addMovieReducer,
});
export default rootReducer;
