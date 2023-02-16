import axios from "axios";
export const BASE_URL = "http://localhost:4000";
export const CLIENT_ID = "728569c600d401c0d345";
export const CLIENT_SECRET = "38edecbc1db0bcd8343dbe0c6063d6328731cd99";
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
  axios.post(
    `${BASE_URL}/join`,
    {
      name,
      email,
      username,
      password,
    },
    { withCredentials: true }
  );

export const loginUser = (username: string, password: string) =>
  axios
    .post(
      `${BASE_URL}/login`,
      {
        username,
        password,
      },
      { withCredentials: true }
    )
    .then((res) => res.data);

export const getGithub = () => {
  // axios
  //   .get(
  //     `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user`,
  //     { withCredentials: true }
  //   )
  //   .then((res) => console.log(res.data));
};

export const postGithub = (code: string) => {};
// axios.post(
//   `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
//   { withCredentials: true, Accept: "application / json" }
// )
