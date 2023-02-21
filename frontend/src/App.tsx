import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import { useCookies } from "react-cookie";
import { isLoggedIn } from "./api/userApi";
import { useRecoilState } from "recoil";
import { IUserLoggedIn } from "./interfaces/User";
import { userLoggedIn } from "./recoil/atoms/userAtom";

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  width: 1150px;
  height: auto;
  min-height: 100vh;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-left: 1px solid tomato;
  border-right: 1px solid tomato;
  @media screen and (max-width: 1150px) {
    background-color: pink;
  }
`;

function App() {
  const [loggedIn, setLoggedIn] = useRecoilState<IUserLoggedIn>(userLoggedIn);
  useEffect(() => {
    isLoggedIn().then((res) => setLoggedIn(res.data));
  }, []);
  return (
    <Body>
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
}

export default App;
