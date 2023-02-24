import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { deletePost, editPost, getPostInfo } from "../../api/postApi";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IPost } from "../../interfaces/Post";

const Form = styled.form`
  width: 30vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  padding: 30px;
`;
const Title = styled.input``;
const Text = styled.textarea`
  height: 300px;
`;
const Btns = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  bottom: 50px;
  right: 20px;
`;
const SubmitBtn = styled.button`
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  cursor: pointer;
`;

function EditPost() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id + "";
  const {
    data: post,
    isLoading,
    isFetching,
  } = useQuery<IPost>(["post", id], () => getPostInfo(id), {
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
            <Title
              onChange={handleTitleChange}
              defaultValue={post?.title}
              type="text"
            />
            <Text
              cols={50}
              defaultValue={post?.text}
              onChange={handleTextChange}
            />
            <Btns>
              <SubmitBtn>수정</SubmitBtn>
              <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
            </Btns>
          </Form>
        </>
      )}
    </>
  );
}
export default EditPost;
