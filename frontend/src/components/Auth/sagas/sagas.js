import { put, call } from "redux-saga/effects";
import { get } from "lodash";

import { enqueueSnackbar } from "../../../actions/snackbar";

import { setUser } from "../authSlice";
import { postAuthSignIn, postAuthSignUp, postAuthSignOut } from "../api";

export function* authSignInSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    if (setSubmitting) setSubmitting(true);
    const res = yield call(postAuthSignIn, values);

    yield put(setUser(res.data));

    yield put(
      enqueueSnackbar({
        message: "Sign in successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }

  if (setSubmitting) setSubmitting(false);
}

export function* authSignUpSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    if (setSubmitting) setSubmitting(true);
    const res = yield call(postAuthSignUp, values);

    yield put(setUser(res.data));

    yield put(
      enqueueSnackbar({
        message: "Sign up successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }

  if (setSubmitting) setSubmitting(false);
}

export function* authSignOutSaga() {
  try {
    yield call(postAuthSignOut);

    yield put(setUser({}));

    yield put(
      enqueueSnackbar({
        message: "Sign out successful!",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "error",
        },
      })
    );
  }
}
