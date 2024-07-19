import axios from "axios";
import url from './Config'



export const BASE_URL = url + "/public"
export const BASE_URL_SELLER = url + '/seller'
export const BASE_URL_USERS = url + '/users'
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});
const AxiosInstanceFormData = axios.create({
  baseURL: BASE_URL,
  // timeout: 100000,
  headers: {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
    'Content-Type': 'multipart/form-data'
  }
})

const AxiosSeller = async (url, options = { method: 'GET' }, file = false) => {
  const token = localStorage.getItem('lybas-seller-token')

  if (file) {

    const response = await axios({
      url,
      baseURL: BASE_URL_SELLER,
      // timeout: 100000,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token ? `Bearer ${token}` : "",
      },
      ...options,
    });
    return response;
  }
  const response = await axios({
    url,
    baseURL: BASE_URL_SELLER,
    // timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      'Authorization': token ? `Bearer ${token}` : "",
    },
    ...options,
  });
  return response;
};

const AxiosUser = async (url, options = { method: 'GET' }, file = false) => {
  const token = localStorage.getItem('lybas-user-token')
  if (file) {
    const response = await axios({
      url,
      baseURL: BASE_URL_USERS,
      // timeout: 100000,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token ? `Bearer ${token}` : "",
      },
      ...options,
    });
    return response;
  }
  const response = await axios({
    url,
    baseURL: BASE_URL_USERS,
    // timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      'Authorization': token ? `Bearer ${token}` : "",
    },
    ...options,
  });
  return response;
};

const AxiosCustom = async (url, options = { method: 'GET' }, file = false) => {
  const token = localStorage.getItem('lybas-user-token')
  if (file) {
    const response = await axios({
      url,
      baseURL: BASE_URL,
      // timeout: 100000,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token ? `Bearer ${token}` : "",
      },
      ...options,
    });
    return response;
  }
  const response = await axios({
    url,
    baseURL: BASE_URL,
    // timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      'Authorization': token ? `Bearer ${token}` : "",
    },
    ...options,
  });
  return response;
};
export { AxiosCustom, AxiosSeller, AxiosUser }
export { AxiosInstance };
export { AxiosInstanceFormData };