import axios from "axios";

const DOMAIN = "https://localhost:9000";
axios.defaults.withCredentials = true;
// 쿠키 데이터를 전송받기 위해 axios.default.withCredentials를 true로 지정해주고
//request를 export 시켜서 *어디서든* import해서 사용할수 있도록 모듈화를 진행하였다.

export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
