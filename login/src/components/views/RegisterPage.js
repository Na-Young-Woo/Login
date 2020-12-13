import React from "react";

import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const RegisterBlock = styled.div`
  background: #dbe4ff;
  // color: #fff;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: crenter;
  align-content: center;

  height: 100vh;
`;

function RegisterPage(props) {
  const [Email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [name, setName] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPassWordHandler = (e) => {
    setpassWord(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onconfirmPassWordHandler = (e) => {
    setConfirmPassWord(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.prventDefault();
  };

  return (
    <RegisterBlock>
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input value={name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={passWord} onChange={onPassWordHandler} />

        <label>confirmPassWord</label>
        <input
          type="password"
          value={confirmPassWord}
          onChange={onconfirmPassWordHandler}
        />

        <button type="submit">회원가입</button>
      </form>
    </RegisterBlock>
  );
}

export default withRouter(RegisterPage);
