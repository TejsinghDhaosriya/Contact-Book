import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";

import { enqueueSnackbar } from "../../../actions/snackbar";

import {
  setContacts,
  setContactsLoading,
  setContact,
  setContactLoading,
  setDrawer,
} from "../contactsSlice";
import {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
} from "../api";
import { getContacts as getContactsAction } from "../actions";

export function* getContactsSaga(params) {
  try {
    const { data } = params;
    if (data.name === undefined) data.name = "";
    yield put(setContactsLoading(true));
    const { data: result } = yield call(getContacts, data);
    yield put(setContacts(result));
    yield put(setContactsLoading(false));
  } catch (e) {
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}

export function* getContactSaga(params) {
  try {
    const id = params?.data;
    yield put(setContactLoading(true));
    const { data: result } = yield call(getContact, id);
    yield put(setContact(result));
    yield put(setContactLoading(false));
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}

export function* postContactSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    setSubmitting(true);
    yield call(postContact, values);

    yield put(getContactsAction({ offset: 0, limit: 5, name: "" }));
    yield put(
      enqueueSnackbar({
        message: "Contact created successfully!",
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
    yield put(setDrawer(false));
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }

  setSubmitting(false);
}

export function* putContactSaga(params) {
  const {
    data: { id, values, setSubmitting },
  } = params;
  try {
    yield call(putContact, id, values);
    yield put(getContactsAction({ offset: 0, limit: 5, name: "" }));
    setSubmitting(true);
    yield put(
      enqueueSnackbar({
        message: "Contact updated successfully!",
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
    yield put(setDrawer(false));
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
  setSubmitting(false);
}

export function* deleteContactSaga(params) {
  try {
    const { data: id } = params;
    yield call(deleteContact, id);
    yield put(getContactsAction({ offset: 0, limit: 5, name: "" }));
    yield put(
      enqueueSnackbar({
        message: "Contact deleted successfully!",
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}
