import axios from "axios";
export const BASE_URL = "http://localhost:4000";

export interface IPost {
  _id: string;
  title: string;
  text: string;
  views: number;
}

export const getTrending = () =>
  axios.get(`${BASE_URL}/`).then((res) => res.data);

export const getPostInfo = (id: string) =>
  axios.get(`${BASE_URL}/board/${id}`).then((res) => res.data);

export const editPost = (id: string, newTitle: string, newText: string) =>
  axios
    .post(`${BASE_URL}/board/${id}/edit`, { newTitle, newText })
    .then((res) => res.data);

export const uploadPost = (title: string, text: string) =>
  axios
    .post(`${BASE_URL}/board/upload`, {
      title,
      text,
    })
    .catch((err) => console.log(err))
    .then((res) => console.log(res));

export const deletePost = (id: string) =>
  axios.post(`${BASE_URL}/board/${id}/delete`).then((res) => res.data);
