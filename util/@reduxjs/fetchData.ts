import { PizzaDTO } from "@/global-types";
import { RootState } from "@/store/root-types";
import { createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FetchDataState {
  loading: boolean;
  loadError: { message?: string | null; code?: string | number | null } | null;
  data: unknown;
}

export const fetchDataInitialState: Omit<FetchDataState, "data"> = {
  loading: false,
  loadError: null,
};

export function fetchDataReducers<TData, TPayload = void>(initialState: {
  data: TData | null;
}) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchData: (state: FetchDataState, _action: PayloadAction<TPayload>) => {
      state.loading = true;
    },
    fetchDataSuccess(
      state: FetchDataState,
      action: PayloadAction<{ data: TData }>
    ) {
      state.loading = false;
      state.loadError = null;
      state.data = action.payload;
    },
    fetchDataError(
      state: FetchDataState,
      action: PayloadAction<{ message: string; code?: string | null }>
    ) {
      state.loading = false;
      state.loadError = action.payload;
    },
  };
}

export function createFetchingStateSelector(
  selectDomain: (state: RootState) => FetchDataState
) {
  return createSelector(
    [
      (state: RootState) => selectDomain(state).loading,
      (state: RootState) => selectDomain(state).loadError,
    ],
    (loading, loadError) => ({ loading, loadError })
  );
}
