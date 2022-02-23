
import axios from 'axios';

const path = 'http://localhost:3000/posts';

export const getCustomer = async () => {
  const res = await axios.get(path);
  return res.data;
}

export const createCustomer = async (data) => {
  const res = await axios.post(path, data);
  return res.data;
};

export const updateCustomer = async (data) => {
  const res = await axios.put(path, data);
  return res.data;
};

export const deleteCustomer = async (data) => {
  const res = await axios.delete(path, data);
  return res.data;
};