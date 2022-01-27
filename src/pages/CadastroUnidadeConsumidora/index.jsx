import { PageDiv, PageTitle, SubTitle } from "../../components/PageDiv/style";
import FormInput from "../../components/Inputs";
import {PrimaryButton} from "../../components/Buttons/styles";
import Menu from "../../components/Menu";
import { useState } from "react";

const CadastroUnidadeConsumidora = () => {

    const [apelido, setApelido ] = useState('');
    const [local, setLocal ] = useState('');
    const [marca, setMarca ] = useState('');
    const [modelo, setModelo ] = useState('');
    const [ativo, setAtivo] = useState(false);

    
    return(
        <>
        <Menu/>

        <PageDiv>
        <PageTitle>Unidade Consumidora</PageTitle>
        <SubTitle>Cadastro de Unidade Consumidora</SubTitle>

        <FormInput
        label={'Apelido'}
        value={apelido}
        setValue={setApelido}
        />

        <FormInput
        label={'Local'}
        value={local}
        setValue={setLocal}
        />

        <FormInput
        label={'Marca'}
        value={marca}
        setValue={setMarca}
        />

        <FormInput
        label={'Modelo'}
        value={modelo}
        setValue={setModelo}
        />

        <input type={'checkbox'}></input>

        <PrimaryButton>Salvar</PrimaryButton>

        </PageDiv>
        </>

    )
}

export default CadastroUnidadeConsumidora;