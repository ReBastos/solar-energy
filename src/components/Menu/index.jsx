import {SmallLogo} from '../Logos/styles'
import { MenuButton, MenuDiv } from './style'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom'

const Menu = () =>{

    return(
        <>
        <MenuDiv>
            <SmallLogo src={logo}/>
            <Link to='/dashboard'><MenuButton>DashBoard</MenuButton></Link>
            <Link to='/unidadeconsumidora'><MenuButton>Unidade Consumidora</MenuButton></Link>
            <Link to='/cadastroenergia'><MenuButton>Cadastro de Energia Gerada</MenuButton></Link>
        </MenuDiv>
        </>

    )
}

export default Menu;