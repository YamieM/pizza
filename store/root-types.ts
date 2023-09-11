import {
  FilterContainerState,
  PizzasContainerState,
} from "@/components/pizzas/types";

export type RootState = {
  pizzasReducer: PizzasContainerState;
  filterReducer: FilterContainerState;
};
