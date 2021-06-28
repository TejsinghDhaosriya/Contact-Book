import { takeEvery } from "redux-saga/effects";

import { SAGA_SIGN_IN, SAGA_SIGN_UP, SAGA_SIGN_OUT } from "../actions";
import { authSignInSaga, authSignUpSaga, authSignOutSaga } from "./sagas";

export const authSagas = [
  takeEvery(SAGA_SIGN_IN, authSignInSaga),
  takeEvery(SAGA_SIGN_UP, authSignUpSaga),
  takeEvery(SAGA_SIGN_OUT, authSignOutSaga),
];
