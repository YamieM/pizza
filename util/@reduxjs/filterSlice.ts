import { PizzasDTORequestParams } from "@/components/pizzas/types";
import { useActions } from "@/hooks/use-actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PizzasDTORequestParams = {
  category: "0",
  sortBy: "rating",
  order: "asc",
  page: "1",
  limit: "8",
  search: "",
};
export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.category = action.payload;
    },
    setActiveSort(state, action) {
      state.sortBy = action.payload[0];
      state.order = action.payload[1];
    },
    setSearchParameter(state, action) {
      state.search = action.payload;
    },
    setActivePage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { actions, reducer, name } = filterSlice;
export const {
  setActiveCategory,
  setActivePage,
  setActiveSort,
  setLimit,
  setSearchParameter,
} = actions;
export const useDispatchAction = () => useActions(actions);
