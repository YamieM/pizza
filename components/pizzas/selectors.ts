import { RootState } from "@/store/root-types";
import { initialState } from "./slice";

// const selectDomain = (state: RootState) => state.pizzasReducer || initialState;

export const selectPizzas = (state: RootState) => state.pizzasReducer.data;
export const selectPizzasLoading = (state: RootState) =>
  state.pizzasReducer.loading;
export const selectPizzasError = (state: RootState) =>
  state.pizzasReducer.loadError;

export const selectFilters = (state: RootState) => state.filterReducer;
export const selectCategory = (state: RootState) =>
  state.filterReducer.category;
export const selectSortBy = (state: RootState) => state.filterReducer.sortBy;
export const selectOrder = (state: RootState) => state.filterReducer.order;
export const selectLimit = (state: RootState) => state.filterReducer.limit;
export const selectPage = (state: RootState) => state.filterReducer.page;
export const selectSearch = (state: RootState) => state.filterReducer.search;
