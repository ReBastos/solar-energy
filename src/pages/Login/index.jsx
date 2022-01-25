import loginImage from "../../images/imgLogin.png";
import logo from "../../images/logo.png";
import "./index.css";
import { LoginInputs } from "../../components/Inputs/styles";
import { BiggerLogo } from "../../components/Logos/styles";
import { LoginButton } from "../../components/Buttons/styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <img src={loginImage} alt="" className="imgDiv" />
      </div>

      <div className="loginContainer">
        <div className="loginDiv">
          <BiggerLogo src={logo} />

          <h3>Seja Bem-Vindo!</h3>

          <LoginInputs />

          <LoginInputs />

            <Link>
          <LoginButton>Entrar</LoginButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
