import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "react-query";
import { uploadPost } from "../../api/postApi";
import { useNavigate } from "react-router-dom";
import { Title } from "../../styles/Title";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    height: 300px;
  }
`;
function UploadPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { mutateAsync } = useMutation(() => uploadPost(title, text));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await mutateAsync();
      navigate(`/board/${res.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Title>글 쓰기</Title>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
          type="text"
          placeholder="제목"
        />
        <textarea
          cols={50}
          wrap="hard"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.currentTarget.value)
          }
          placeholder="내용"
        />
        <button>제출</button>
      </Form>
    </Wrapper>
  );
}

export default UploadPost;
