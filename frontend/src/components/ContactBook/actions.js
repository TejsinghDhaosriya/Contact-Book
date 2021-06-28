const prefix = "contacts/";
// ACTION TYPES
export const SAGA_GET_CONTACTS = `${prefix}SAGA_GET_CONTACTS`;
export const SAGA_GET_CONTACT = `${prefix}SAGA_GET_CONTACT`;
export const SAGA_POST_CONTACT = `${prefix}SAGA_POST_CONTACT`;
export const SAGA_PUT_CONTACT = `${prefix}SAGA_PUT_CONTACT`;
export const SAGA_DELETE_CONTACT = `${prefix}SAGA_DELETE_CONTACT`;
// ACTION CREATORS

export const getContacts = (data) => ({
  type: SAGA_GET_CONTACTS,
  data,
});
export const getContact = (data) => ({
  type: SAGA_GET_CONTACT,
  data,
});

export const postContact = (data) => ({
  type: SAGA_POST_CONTACT,
  data,
});
export const putContact = (data) => ({
  type: SAGA_PUT_CONTACT,
  data,
});
export const deleteContact = (data) => ({
  type: SAGA_DELETE_CONTACT,
  data,
});
