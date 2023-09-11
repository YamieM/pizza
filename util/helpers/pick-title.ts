import { PizzasDTORequestParams } from "@/components/pizzas/types";

export const pickPizzasTitle = (
  category: PizzasDTORequestParams["category"]
) => {
  let title = "Все пиццы";

  if (category === "1") {
    title = "Мясные пиццы";
  }
  if (category === "2") {
    title = "Вегетарианские пиццы";
  }
  if (category === "3") {
    title = "Пиццы гриль";
  }
  if (category === "4") {
    title = "Острые пиццы";
  }
  if (category === "5") {
    title = "Микс пиццы";
  }
  return title;
};
