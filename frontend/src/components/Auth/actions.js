// ACTION TYPES
export const SAGA_SIGN_IN = "auth/SAGA_SIGN_IN";
export const SAGA_SIGN_UP = "auth/SAGA_SIGN_UP";
export const SAGA_SIGN_OUT = "auth/SAGA_SIGN_OUT";

// ACTION CREATORS
export const authSignIn = (data) => ({
  type: SAGA_SIGN_IN,
  data,
});

export const authSignUp = (data) => ({
  type: SAGA_SIGN_UP,
  data,
});

export const authSignOut = () => ({
  type: SAGA_SIGN_OUT,
});
