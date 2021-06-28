import { combineReducers } from "redux";
import authReducer from "../components/Auth/authSlice";
import snackbarReducer from "./snackbar";
import contactsReducer from "../components/ContactBook/contactsSlice.js";
const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    auth: authReducer,
    contacts: contactsReducer,
  });

export default createRootReducer;
