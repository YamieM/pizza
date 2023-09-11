import { PizzaDTO } from "@/global-types";
import { FetchDataState } from "@/util/@reduxjs/fetchData";
import { type } from "os";

export interface PizzasContainerState extends FetchDataState {
  data: PizzaDTO[];
}

export type PizzasDTORequestParams = {
  category?: "" | "0" | "1" | "2" | "3" | "4" | "5";
  sortBy?: "rating" | "price" | "name";
  order?: "asc" | "desc";
  page?: string;
  limit?: string;
  search?: string;
};

export type PizzaData = {
  pizzas: PizzaDTO[];
};

export interface FilterContainerState extends PizzasDTORequestParams {}

export type ContainerState = PizzasContainerState;
