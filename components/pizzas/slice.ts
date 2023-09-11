import { PizzaDTO } from "@/global-types";
import { createSlice } from "@reduxjs/toolkit";
import { sliceKey as name } from "./utils";
import { ContainerState, PizzasDTORequestParams } from "./types";
import { useActions } from "@/hooks/use-actions";
import {
  fetchDataInitialState,
  fetchDataReducers,
} from "@/util/@reduxjs/fetchData";
import { HYDRATE } from "next-redux-wrapper";

export const initialState: ContainerState = {
  data: [],
  ...fetchDataInitialState,
};

const pizzasSlice = createSlice({
  name,
  initialState,
  reducers: {
    ...fetchDataReducers<PizzaDTO[], PizzasDTORequestParams>(initialState),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...action.payload.pizzasReducer,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = pizzasSlice;
export const { fetchData, fetchDataSuccess, fetchDataError } = actions;
export const useDispatchAction = () => useActions(actions);
