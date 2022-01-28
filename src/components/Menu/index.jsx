import {SmallLogo} from '../Logos/styles'
import { MenuDiv } from './style'
import MenuOption from '../MenuOption'
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom'

const Menu = ({selected1, selected2, selected3}) =>{

    return(
        <>
        <MenuDiv>
            <SmallLogo src={logo}/>
            <Link to='/dashboard' style={{textDecoration: 'none'}}>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Dashboard'}
                selected={selected1}
                />
            </Link>

            <Link to='/unidadeconsumidora' style={{textDecoration: 'none'}}>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Unidade Consumidora'}
                selected={selected2}
                />
            </Link>

            <Link to='/cadastroenergia' style={{textDecoration: 'none'}}>
                <MenuOption
                icon={'https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png'}
                title={'Cadastro de Energia Gerada'}
                selected={selected3}
                />
            </Link>

        </MenuDiv>
        </>

    )
}

export default Menu;