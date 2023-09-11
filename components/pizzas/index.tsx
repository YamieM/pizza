import { useEffect, useCallback } from "react";
import { PizzaContainer } from "../pizza";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  selectPizzas,
  selectPizzasLoading,
  selectSortBy,
  selectCategory,
  selectPage,
} from "./selectors";
import { PizzaDTO } from "@/global-types";
import { Skeleton } from "../pizza/components/Skeleton";
import { Pagination } from "../pagination";
// import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { setActivePage } from "@/util/@reduxjs/filterSlice";
import { fetchData } from "./slice";
import qs from "qs";
import { useRouter } from "next/router";

// type pizzasProps = {
//   pizzas: PizzaDTO[];
// };

export const Pizzas = () => {
  const dispatch = useDispatch();


  const isLoading = useSelector(selectPizzasLoading);
  const pizzas = useSelector(selectPizzas);

  const params = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchData({
        ...params,
        category: params?.category === "0" ? "" : params?.category,
      })
    );
    window.scrollTo(0, 0);
  }, [params]);

  const onChangePage = useCallback(
    (number: number) => {
      dispatch(setActivePage(number));
    },
    [setActivePage]
  );

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     sort: params.sortBy,
  //     category: params.category,
  //     page: params.page,
  //   });
  //   // console.log(queryString);
  // }, [selectSortBy, selectCategory, selectPage]);

  return (
    <>
      <div className="content__items">
        {isLoading ? (
          [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : pizzas?.length ? (
          pizzas.map((item: PizzaDTO) => (
            <PizzaContainer key={item.id} pizza={item} />
          ))
        ) : (
          <h2>Ничего не найдено</h2>
        )}
      </div>
      {params.category === "0" && params.search === "" && (
        <Pagination onChangePage={onChangePage} />
      )}
    </>
  );
};
