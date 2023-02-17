import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Body = styled.body`
  display: flex;
  justify-content: center;
`;

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
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
`;

const Column = styled.div`
  color: white;
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
`;

function App() {
  return (
    <Body>
      <Navigator>
        <Container>
          <Column>홈</Column>
          <Column>전체 목록</Column>
          <Column>인기 목록</Column>
        </Container>
      </Navigator>
      <Main>
        <Outlet />
      </Main>
    </Body>
  );
}

export default App;
