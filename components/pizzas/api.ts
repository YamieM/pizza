import axios from "axios";
import { PizzasDTORequestParams } from "./types";
import { PizzaDTO } from "@/global-types";

export async function apiGetPizzas(params: PizzasDTORequestParams) {
  return axios.get<PizzaDTO[]>(
    "https://6456c2152e41ccf169246e45.mockapi.io/Items",
    { params }
  );
}
