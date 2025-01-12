import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v4';

export const getLaunches = async () => {
  const response = await axios.get(`${BASE_URL}/launches`);
  return response.data;
};

export const getLaunchById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/launches/${id}`);
  return response.data;
};

export const getMissions = async () => {
  const response = await axios.get(`${BASE_URL}/missions`);
  return response.data;
};

export const getShips = async () => {
  const response = await axios.get(`${BASE_URL}/ships`);
  return response.data;
};

export const getCompanyInfo = async () => {
  const response = await axios.get(`${BASE_URL}/company`);
  return response.data;
};