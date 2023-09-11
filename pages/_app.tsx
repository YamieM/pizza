import type { AppProps } from "next/app";
import { wrapper } from "@/store";
import { Provider } from "react-redux";
import { getInitialData } from "@/services/pizza-service";
import { actions } from "@/components/pizzas/slice";
import "@/styles/globals.css";
import "@/styles/main.scss";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

App.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      try {
        const { data } = await getInitialData({});
        dispatch(actions.fetchDataSuccess(data));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(actions.fetchDataError(error));
        }
      }
    }
);
export default App;
