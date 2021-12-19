import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gradebooksReducer from "./gradebooks/slice";
import authReducer from "./auth/slice";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    gradebooks: gradebooksReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (const saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;