import Layout from "@/components/Layout";
import Head from "next/head";
import { useEffect, useState, useCallback } from "react";
import { PizzaDTO } from "@/global-types";
import { actions } from "@/components/pizzas/slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
// import { wrapper } from "@/store";
import {
  selectPizzas,
  selectFilters,
  selectPizzasLoading,
  selectCategory,
} from "@/components/pizzas/selectors";
import { Pizzas } from "@/components/pizzas";
import { usePizzasSlice } from "@/components/pizzas/hooks";
import { GetServerSideProps, GetStaticProps } from "next";
// import { PizzaService } from "@/services/pizza-service";
import { FC } from "react";
import { PizzaData, PizzasDTORequestParams } from "@/components/pizzas/types";
import { wrapper } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "@/components/navbar";
import { StyledContent } from "@/components/pizzas/styled";
import { filterSlice } from "@/util/@reduxjs/filterSlice";
import { pickPizzasTitle } from "@/util/helpers/pick-title";

// export const getStaticProps: GetStaticProps<PizzaData> = async () => {
//   const pizzas = await PizzaService.getAll({});
//   return {
//     props: { pizzas },
//     revalidate: 60,
//   };
// };

const Home = () => {
  const category = useSelector(selectCategory);
  const pizzasTitle = pickPizzasTitle(category);
  return (
    <>
      <Head>
        <title>300bucks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StyledContent>
          <div className="container">
            <Navbar />
            <h2 className="content__title">{pizzasTitle}</h2>
            <main>
              <Pizzas />
            </main>
          </div>
        </StyledContent>
      </Layout>
    </>
  );
};

export default Home;
// Home.getInitialPageProps = wrapper.getInitialPageProps(() => async () => {
//   const params = useAppSelector((state) => state.filterReducer);
//   return {
//     params,
//     revalidate: 60,
//   };
// });
