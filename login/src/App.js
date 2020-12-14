import "./App.css";
import LandingPage from "./components/views/LandingPage";
import LoginPage from "./components/views/LoginPage";
import RegisterPage from "./components/views/RegisterPage";

function App() {
  return (
    <>
      <LandingPage></LandingPage>
      <RegisterPage></RegisterPage>
      {/* <LoginPage></LoginPage> */}
    </>
  );
}

export default App;
