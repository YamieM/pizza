export const pickSortParam = (sortBy: string, order: string) => {
  if (sortBy === "rating") {
    return " по популярности ";
  }
  if (sortBy === "prices" && order === "asc") {
    return "сначала дешевые";
  }
  if (sortBy === "prices" && order === "desc") {
    return "сначала дорогие";
  } else {
    return "по алфавиту";
  }
};
