
import { call, put, takeEvery, takeLatest } from "typed-redux-saga";
import { actions } from "./slice";
import { apiGetPizzas } from "./api";

export function* fetchPizzasWorker(
  action: ReturnType<typeof actions.fetchData>
) {
  try {
    const { data } = yield call(apiGetPizzas, action.payload);
    yield put(actions.fetchDataSuccess( data ));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(actions.fetchDataError({ message }));
      console.log("error");
    }
  }
}

export function* pizzasSaga() {
  yield takeEvery(actions.fetchData, fetchPizzasWorker);
}
