import { Outlet } from "react-router-dom";
import { Title } from "../../styles/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Signup() {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Outlet />
    </Wrapper>
  );
}
export default Signup;
