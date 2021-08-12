import axios from "./client";

export const getUsers = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return data;
};
