import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IUser } from "../api/userApi";
const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
function Login() {
  const { register, handleSubmit } = useForm<IUser>();
  const onValid = () => {
  };
  return (
    <Wrapper>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit(onValid)}>
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
      </Form>
    </Wrapper>
  );
}
export default Login;
