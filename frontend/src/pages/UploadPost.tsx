import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "react-query";
import { uploadPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";
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
  const { mutate } = useMutation(() => uploadPost(title, text));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    // navigate("/");
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
          type="text"
        />
        <textarea
          cols={50}
          wrap="hard"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.currentTarget.value)
          }
        />
        <button>제출</button>
      </Form>
    </Wrapper>
  );
}

export default UploadPost;
