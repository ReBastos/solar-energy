import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import Select from "../../components/Select";
import { useContext, useState } from "react";
import { UnidadeConsumidoraContext } from "../../contexts/UnidadeConsumidora/index.js";


const CadastroEnergiaGerada = () => {

    const energiaGerada = useContext(UnidadeConsumidoraContext);
    console.log(energiaGerada.unidades);

    return(
        <>
        <Menu
        selected3={true}
        />

        <PageDiv>
        <PageTitle>Lançamento de Geração Mensal</PageTitle>

        <form>
        <Select
        placeholder={'Selecione uma opção:'}
        opcoes={energiaGerada.unidades}
        />

        </form>

        </PageDiv>
        </>
    )
}

export default CadastroEnergiaGerada;