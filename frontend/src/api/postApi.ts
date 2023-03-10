import axios from "axios";
export const BASE_URL = "http://localhost:4000";

export const getAll = () =>
  axios.get(`${BASE_URL}/`, { withCredentials: true }).then((res) => res.data);

export const getPostInfo = (id: string) =>
  axios
    .get(`${BASE_URL}/board/${id}`, { withCredentials: true })
    .then((res) => res.data);

export const editPost = (id: string, newTitle: string, newText: string) =>
  axios
    .post(
      `${BASE_URL}/board/${id}/edit`,
      { newTitle, newText },
      { withCredentials: true }
    )
    .then((res) => res.data);

export const uploadPost = (title: string, text: string, createdBy: string) =>
  axios.post(
    `${BASE_URL}/board/upload`,
    {
      title,
      text,
      createdBy,
    },
    { withCredentials: true }
  );

export const deletePost = (id: string) =>
  axios
    .post(`${BASE_URL}/board/${id}/delete`, { withCredentials: true })
    .then((res) => res.data);

export const searchPost = (text: string) =>
  axios.get(`${BASE_URL}/board/search`, {
    params: { text: text },
    withCredentials: true,
  });
