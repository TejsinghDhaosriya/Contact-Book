import { takeEvery } from "redux-saga/effects";

import {
  SAGA_GET_CONTACTS,
  SAGA_GET_CONTACT,
  SAGA_POST_CONTACT,
  SAGA_PUT_CONTACT,
  SAGA_DELETE_CONTACT,
} from "../actions";
import {
  getContactsSaga,
  getContactSaga,
  postContactSaga,
  putContactSaga,
  deleteContactSaga,
} from "./sagas";

export const contactsSagas = [
  takeEvery(SAGA_GET_CONTACTS, getContactsSaga),
  takeEvery(SAGA_GET_CONTACT, getContactSaga),
  takeEvery(SAGA_POST_CONTACT, postContactSaga),
  takeEvery(SAGA_PUT_CONTACT, putContactSaga),
  takeEvery(SAGA_DELETE_CONTACT, deleteContactSaga),
];