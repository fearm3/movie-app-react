import { ADD_MOVIE } from "../types/addFavoriteTypes";

export const addMovie = () => {
  return {
    type: ADD_MOVIE,
  };
};

// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload: payload,
//   };
// };

// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

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
