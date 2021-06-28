import axios from "axios";
import baseURL from "../baseURL";

export const postContact = (data) => axios.post(`${baseURL}/api/apps/`, data);
export const putContact = (id, data) =>
  axios.put(`${baseURL}/api/apps/${id}/`, data);
export const getContact = (id, params) =>
  axios.get(`${baseURL}/api/apps/${id}/`, params);

export const getContacts = (params) =>
  axios.get(`${baseURL}/api/apps/?limit=${params.limit}&offset=${params.offset}&name=${params.name}`,);

export const deleteContact = (id) => axios.delete(`${baseURL}/api/apps/${id}/`);
