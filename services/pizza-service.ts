import { PizzasDTORequestParams } from "@/components/pizzas/types";
import { PizzaDTO } from "@/global-types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6456c2152e41ccf169246e45.mockapi.io/Items";

export async function getInitialData(params: PizzasDTORequestParams) {
  return axios.get(API_URL, { params });
}

// export const fetchPizzas = createAsyncThunk(
//   "pizzas/fetchPizzas",
//   async (params) => {
//     const response = await axios.get(API_URL, { params });
//     return response.data;
//   }
// );
