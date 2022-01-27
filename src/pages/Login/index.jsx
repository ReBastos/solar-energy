import loginImage from "../../images/imgLogin.png";
import logo from "../../images/logo.png";
import "./index.css";
import { LoginInputs } from "../../components/LoginInputs/styles";
import { BiggerLogo } from "../../components/Logos/styles";
import { LoginButton } from "../../components/Buttons/styles";
import { Link } from "react-router-dom";

const Login = () => {


  const onSubmit = () =>{

    console.log('submit');

  }
  return (
    <>
      <div className="loginContainer">
        <img src={loginImage} alt="" className="imgDiv" />
      </div>

      <div className="loginContainer">
        <div className="loginDiv">
          <BiggerLogo src={logo} />

          <h3>Seja Bem-Vindo!</h3>

          <form onSubmit={onSubmit}>
          <LoginInputs />

          <LoginInputs />

            <Link to="/dashboard">
          <LoginButton type="submit">Entrar</LoginButton>
          </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
