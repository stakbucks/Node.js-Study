import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { IUser, signupUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vh;
  gap: 10px;
`;
function SignupForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IUser>();
  const onValid = async ({ name, username, password, email }: IUser) => {
    await signupUser(name, username, password, email)
      .catch((error) => {
        alert(error.response.data);
      })
      .then(() => navigate("success"));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <div>
          <label>이름</label>
          <input {...register("name", { required: true })} type="text" />
        </div>
        <div>
          <label>아이디</label>
          <input {...register("username", { required: true })} type="text" />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            {...register("password", { required: true })}
            type="password"
          />
        </div>
        <div>
          <label>이메일</label>
          <input {...register("email", { required: true })} type="text" />
        </div>
        <button>회원가입</button>
      </Form>
    </Wrapper>
  );
}

export default SignupForm;
