import ApiCaller from "../../helpers/axios";

export const getUsers = async () => {
  const response = await ApiCaller().get(`https://dummyjson.com/users`);
  return response;
};
