import styled from "styled-components";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { isLoggedIn, logout } from "../api/userApi";
import { useRecoilState } from "recoil";
import { userLoggedIn } from "../recoil/atoms/userAtom";
import { IUserLoggedIn } from "../interfaces/User";
const Navigator = styled.nav`
  position: fixed;
  top: 0;
  background-color: black;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100%;
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Account = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  color: white;
`;

function Nav() {
  console.log("Nav rendered");

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState<IUserLoggedIn>(userLoggedIn);

  const location = useLocation();
  const handleClick = async () => {
    await logout();
    window.location.replace(location.pathname);
  };

  return (
    <Navigator>
      <Container>
        <Links>
          <Column>
            <Link to="/">홈</Link>
          </Column>
          <Column>
            <Link to="/show-all">전체 목록</Link>
          </Column>
          <Column>
            <Link to="board/upload">글 쓰기</Link>
          </Column>
        </Links>
        {loggedIn.isLoggedIn ? (
          <Account>
            <Column style={{ cursor: "pointer" }} onClick={handleClick}>
              로그아웃
            </Column>
          </Account>
        ) : (
          <Account>
            <Column>
              <Link to="/login">로그인</Link>
            </Column>
            <Column>
              <Link to="/signup">회원가입</Link>
            </Column>
          </Account>
        )}
      </Container>
    </Navigator>
  );
}

export default Nav;
