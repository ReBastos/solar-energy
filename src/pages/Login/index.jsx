import loginImage from '../../images/imgLogin.png'
import logo from '../../images/logo.png'
import './index.css'
import { LoginInputs } from '../../components/Inputs/styles'
import { BiggerLogo } from '../../components/Logos/styles'
import { LoginButton } from '../../components/Buttons/styles'

const Login = () => {

    return(
        <>
        <div className="loginContainer">

        <img src={loginImage} alt="" className="imgDiv" />


        <div className="loginDiv">

            
            <BiggerLogo src={logo}/>

            <LoginInputs/>

            <LoginInputs/>

            <LoginButton>Entrar</LoginButton>

        </div>
        </div>

        </>
    )

}

export default Login