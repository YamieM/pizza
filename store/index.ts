import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { reducer as pizzasReducer } from "@/components/pizzas/slice";
import { reducer as filterReducer } from "@/util/@reduxjs/filterSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { pizzasSaga } from "@/components/pizzas/saga";

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       pizzasReducer: reducer,
//     },
//   });
// };

// export const store = makeStore();

// export type RootStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<RootStore["getState"]>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pizzasReducer,
    filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
sagaMiddleware.run(pizzasSaga);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
