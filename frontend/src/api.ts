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

export const getVideoInfo = (id: string) =>
  axios.get(`${BASE_URL}/board/${id}`).then((res) => res.data);

export const editVideoTitle = (id: string, newTitle: string) =>
  axios
    .post(`${BASE_URL}/board/${id}/edit`, { newTitle })
    .then((res) => res.data);

export const uploadPost = (title: string, text: string) =>
  axios
    .post(`${BASE_URL}/board/upload`, {
      title,
      text,
    })
    .then((res) => res.data);
