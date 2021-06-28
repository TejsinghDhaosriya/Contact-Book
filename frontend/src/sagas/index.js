import { all } from "redux-saga/effects";

import { authSagas } from "../components/Auth/sagas/";
import { contactsSagas } from "../components/ContactBook/sagas/index";

export default function* rootSaga() {
  yield all([...authSagas, ...contactsSagas]);
}
