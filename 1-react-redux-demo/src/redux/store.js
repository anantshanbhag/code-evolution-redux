import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import { fetchUsersSaga } from "./users/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
);

sagaMiddleware.run(fetchUsersSaga);

export default store;
