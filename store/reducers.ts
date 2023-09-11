import { combineReducers } from "@reduxjs/toolkit";
// import type { Reducer } from "@reduxjs/toolkit";
import { reducer as pizzasReducer } from "../components/pizzas/slice";

export default combineReducers({
  pizzasReducer,
});
