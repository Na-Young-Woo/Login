import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

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
function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <LoginBlock>
      <form></form>
    </LoginBlock>
  );
}

export default withRouter(LoginPage);
