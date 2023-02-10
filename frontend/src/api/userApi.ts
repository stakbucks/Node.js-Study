import axios from "axios";
export const BASE_URL = "http://localhost:4000";

export interface IUser {
  name: string;
  email: string;
  username: string;
  password: string;
}

export const signupUser = (
  name: string,
  username: string,
  password: string,
  email: string
) =>
  axios.post(`${BASE_URL}/join`, {
    name,
    email,
    username,
    password,
  });
