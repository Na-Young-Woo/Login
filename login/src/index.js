import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import list
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thuck";

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider
      store={createStoreWidthMiddleware()
      // 리듀서 생성 후 여기에 넣어준다.

      //개발자 도구를 사용하기 위한 설정
      
      }
    > */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
