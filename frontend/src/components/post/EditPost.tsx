import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { deletePost, editPost, getPostInfo } from "../../api/postApi";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IPost } from "../../interfaces/Post";
const Form = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    height: 300px;
  }
`;
function EditPost() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id + "";
  const {
    data: post,
    isLoading,
    isFetching,
  } = useQuery<IPost>(["video", id], () => getPostInfo(id), {
    keepPreviousData: true,
  });
  const { mutateAsync: deleting } = useMutation(() => deletePost(id));
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { mutateAsync: edit } = useMutation(() => editPost(id, title, text));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await edit();
    navigate(`/board/${id}`);
  };
  const handleDelete = async () => {
    await deleting();
    navigate(`/`);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.currentTarget.value);

  useEffect(() => {
    setTitle(`${post?.title}`);
    setText(`${post?.text}`);
  }, []);

  return (
    <>
      {isFetching ? null : (
        <>
          <Form onSubmit={handleSubmit}>
            <input
              onChange={handleTitleChange}
              defaultValue={post?.title}
              type="text"
            />
            <textarea
              cols={50}
              defaultValue={post?.text}
              onChange={handleTextChange}
            />
            <button>수정</button>
          </Form>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </>
  );
}
export default EditPost;
