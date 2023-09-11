import { selectCategory, selectFilters } from "@/components/pizzas/selectors";
import { actions } from "@/util/@reduxjs/filterSlice";
import { actions as fetchActions } from "@/components/pizzas/slice";
import { useDispatch, useSelector } from "react-redux";
import { StyledCategories } from "../styled";
import { useCallback } from "react";
import { getInitialData } from "@/services/pizza-service";
export const Categories = () => {
  
  const params = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onHandleClickCategory = (index: number) => {
    dispatch(actions.setActiveCategory(String(index)));
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Микс",
  ];

  return (
    <StyledCategories>
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            className={params.category === String(index) ? "active" : ""}
            onClick={() => onHandleClickCategory(index)}>
            {category}
          </li>
        ))}
      </ul>
    </StyledCategories>
  );
};
