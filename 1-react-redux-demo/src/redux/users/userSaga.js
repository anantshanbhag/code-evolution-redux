import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

import { FETCH_USERS_REQUEST } from "./userTypes";
import { fetchUserSuccess, fetchUserFailure } from "./userActions";

const fetchUsers = function* () {
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
    const users = res.data;

    yield put(fetchUserSuccess(users));
  } catch (error) {
    const errorMessage = error.message;
    yield put(fetchUserFailure(errorMessage));
  }
};

export const fetchUsersSaga = function* () {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
};
