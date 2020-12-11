import React from "react";

import styled from "styled-components";
import { withRouter } from "react-router-dom";

const LoginBlock = styled.div`
  display: flex;
  height: 100px;
  background: red;
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
