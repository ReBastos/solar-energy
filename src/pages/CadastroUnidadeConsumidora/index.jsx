import { PageDiv, PageTitle, SubTitle } from "../../components/PageDiv/style";
import FormCheckbox from "../../components/CheckBox";
import FormInput from "../../components/Inputs";
import {PrimaryButton} from "../../components/Buttons/styles";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {UnidadeConsumidoraContext} from '../../contexts/UnidadeConsumidora/index.js'

const CadastroUnidadeConsumidora = () => {

    const cadastroContext = useContext(UnidadeConsumidoraContext);

    const [apelido, setApelido ] = useState('');
    const [local, setLocal ] = useState('');
    const [marca, setMarca ] = useState('');
    const [modelo, setModelo ] = useState('');
    const [ativo, setAtivo] = useState(false);

    const retorno = useNavigate();
    
    const handleSubmit = async (evt) =>{

        evt.preventDefault();

        try{
            await fetch('http://localhost:3333/unidades',
            {
                method: 'POST',
                body: JSON.stringify({
                    apelido: apelido,
                    local: local,
                    marca: marca,
                    modelo: modelo,
                    ativo: ativo
                }),
                headers: {'Content-Type': 'application/json'},
            },
            )
        } catch (error) {
            

        }

        cadastroContext.atualizar();
    
    retorno('/unidadeconsumidora');
    }

    
    return(
        <>
        <PageDiv>
        <PageTitle>Unidade Consumidora</PageTitle>
        <SubTitle>Cadastro de Unidade Consumidora</SubTitle>

        <form onSubmit={handleSubmit}>
        <FormInput
        label={'Apelido'}
        value={apelido}
        setValue={setApelido}
        type={'text'}
        />

        <FormInput
        label={'Local'}
        value={local}
        setValue={setLocal}
        type={'text'}
        />

        <FormInput
        label={'Marca'}
        value={marca}
        setValue={setMarca}
        type={'text'}
        />

        <FormInput
        label={'Modelo'}
        value={modelo}
        setValue={setModelo}
        type={'number'}
        />

        <FormCheckbox
        value={ativo}
        setValue={setAtivo}
        />

        <PrimaryButton type={'submit'}>Salvar</PrimaryButton>

        </form>

        

        </PageDiv>
        </>

    )
}

export default CadastroUnidadeConsumidora;