import React from "react";

import styled from "styled-components";
import { withRouter } from "react-router-dom";

const LoginBlock = styled.div`
  background: #4263eb;
  color: #fff;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: crenter;
  align-content: center;

  height: 100vh;
`;
const BtnBlock = styled.button`
  height: 100px;
`;

function LandingPage(props) {
  const onClickHandler = () => {};
  return (
    <div>
      <LoginBlock>
        <h2>시작 페이지</h2>

        <button onClick={onClickHandler}>로그아웃</button>
      </LoginBlock>
    </div>
  );
}

export default withRouter(LandingPage);
