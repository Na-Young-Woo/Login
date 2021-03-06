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
      <form>
        <label>E-mail</label>
        <input type="email"> </input>
        <label>Password</label>
        <input type="password"></input>
        <br />
        <button type="submit">Login</button>
      </form>
    </LoginBlock>
  );
}

export default withRouter(LoginPage);
