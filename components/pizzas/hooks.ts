import { useActions } from "@/hooks/use-actions";
import { actions } from "./slice";

export function usePizzasSlice() {
  return useActions(actions);
}
