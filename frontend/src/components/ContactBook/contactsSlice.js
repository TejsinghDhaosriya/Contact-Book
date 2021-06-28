import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    contactsLoading: true,
    contact: {},
    contactLoading: false,
    drawer: false,
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setContactsLoading: (state, action) => {
      state.contactsLoading = !!action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setContactLoading: (state, action) => {
      state.contactLoading = !!action.payload;
    },
    setDrawer: (state, action) => {
      state.drawer = !!action.payload;
    },
  },
});
export const {
  setContact,
  setContacts,
  setContactLoading,
  setContactsLoading,
  setDrawer,
} = contactsSlice.actions;

export const selectContacts = (state) => get(state, "contacts.contacts");
export const selectContactsLoading = (state) =>
  get(state, "contacts.contactsLoading");
export const selectContact = (state) => get(state, "contacts.contact");
export const selectContactLoading = (state) =>
  get(state, "contacts.contactLoading");
export const selectDrawer = (state) => get(state, "contacts.drawer");
export default contactsSlice.reducer;
