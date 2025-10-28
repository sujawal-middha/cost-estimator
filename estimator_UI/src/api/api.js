import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories`);
  return res.data;
};

export const getFeaturesByCategory = async (id) => {
  const res = await axios.get(`${BASE_URL}/categories/${id}/features`);
  return res.data;
};
