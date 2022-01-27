import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import {PrimaryButton} from "../../components/Buttons/styles";
import { Link } from "react-router-dom";

const UnidadeConsumidora = () =>{

    return(
        <>
        <Menu/>

        <PageDiv>
        <PageTitle>Unidade Consumidora</PageTitle>

        <Link to='/cadastrounidadeconsumidora'><PrimaryButton>Nova unidade</PrimaryButton></Link>
        </PageDiv>
        </>

    )
}

export default UnidadeConsumidora;