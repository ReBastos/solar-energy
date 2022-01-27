import {SmallLogo} from '../Logos/styles'
import { MenuDiv } from './style'
import MenuOption from '../MenuOption'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom'

const Menu = () =>{

    return(
        <>
        <MenuDiv>
            <SmallLogo src={logo}/>
            <Link to='/dashboard'>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Dashboard'}
                />
            </Link>

            <Link to='/unidadeconsumidora'>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Unidade Consumidora'}
                />
            </Link>

            <Link to='/cadastroenergia'>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Cadastro de Energia Gerada'}
                />
            </Link>

        </MenuDiv>
        </>

    )
}

export default Menu;