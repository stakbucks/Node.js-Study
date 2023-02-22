import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  CLIENT_ID,
  IUser,
  loginUser,
  CLIENT_SECRET,
  getGithub,
  isLoggedIn,
} from "../../api/userApi";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Title } from "../../styles/Title";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { IUserLoggedIn } from "../../interfaces/User";
import { userLoggedIn } from "../../recoil/atoms/userAtom";
const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const GithubLogin = styled.div``;
function Login() {
  const [loggedIn, setLoggedIn] = useRecoilState<IUserLoggedIn>(userLoggedIn);
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<IUser>();
  const password = watch("password");
  const username = watch("username");
  const { mutateAsync } = useMutation(["user", username], () =>
    loginUser(username, password)
  );
  const onValid = async () => {
    try {
      await mutateAsync();
      await isLoggedIn().then((res) => {
        setLoggedIn(res.data);
      });
      console.log(loggedIn);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
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
        <button>로그인</button>
      </Form>
      {/* <GithubLogin onClick={getGithub}>깃허브로 로그인하기</GithubLogin> */}
    </Wrapper>
  );
}
export default Login;
