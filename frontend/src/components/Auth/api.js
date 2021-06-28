import axios from "axios";


import baseURL from '../baseURL'

export const postAuthSignIn = (params) =>
  axios.post(`${baseURL}/api/rest-auth/login/`, params);
export const postAuthSignUp = (params) =>
  axios.post(`${baseURL}/api/rest-auth/registration/`, params);
export const postAuthSignOut = () => axios.post(`${baseURL}/api/rest-auth/logout/`);
