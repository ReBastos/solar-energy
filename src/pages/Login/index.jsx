import loginImage from "../../images/imgLogin.png";
import logo from "../../images/logo.png";
import "./index.css";
import { BiggerLogo } from "../../components/Logos/styles";
import { LoginButton } from "../../components/Buttons/styles";
import { useNavigate } from "react-router-dom";
import LoginLabel from "../../components/LoginInputs";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const accessDashboard = useNavigate();

  const onSubmit = () => {
    if (username != "" && password != "") {
      accessDashboard("/dashboard");
    } else {
      
    }
  };
  return (
    <>
      <div className="loginContainer1">
        <img src={loginImage} alt="" className="imgDiv" />
      </div>

      <div className="loginContainer2">
        <div className="loginDiv">
          <BiggerLogo src={logo} />

          <h3>Seja Bem-Vindo!</h3>

          <form onSubmit={onSubmit}>
            <LoginLabel
              value={username}
              setValue={setUsername}
              type={"text"}
              icon={
                "https://img.icons8.com/ios/50/000000/checked-user-male.png"
              }
              placeholder={"Usuário"}
            />

            <LoginLabel
              value={password}
              setValue={setPassword}
              type={"password"}
              icon={"https://img.icons8.com/ios/50/000000/key-security.png"}
              placeholder={"Senha"}
            />

            <LoginButton type="submit">Entrar</LoginButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
