import { PageDiv, PageTitle, SubTitle } from "../../components/PageDiv/style";
import FormCheckbox from "../../components/CheckBox";
import FormInput from "../../components/Inputs";
import {PrimaryButton} from "../../components/Buttons/styles";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {UnidadeConsumidoraContext} from '../../contexts/UnidadeConsumidora/index.js'

const EditUnidadeConsumidora = () => {

    const EditContext = useContext(UnidadeConsumidoraContext);

    useEffect(async () => {


    },[]);
    
    const [editApelido, setEditApelido ] = useState('');
    const [editLocal, setEditLocal ] = useState('');
    const [editMarca, setEditMarca ] = useState('');
    const [editModelo, setEditModelo ] = useState('');
    const [editAtivo, setEditAtivo] = useState(false);

    const retorno = useNavigate();
    
    const handleEdit = async (evt) =>{

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
            console.log('error')

        }

        EditContext.atualizar();
    
    retorno('/unidadeconsumidora');
    }

    
    return(
        <>
        <Menu 
        selected2={true}
        />

        <PageDiv>
        <PageTitle>Unidade Consumidora</PageTitle>
        <SubTitle>Cadastro de Unidade Consumidora</SubTitle>

        <FormInput
        label={'Apelido'}
        value={editApelido}
        setValue={setEditApelido}
        />

        <FormInput
        label={'Local'}
        value={editLocal}
        setValue={setEditLocal}
        />

        <FormInput
        label={'Marca'}
        value={editMarca}
        setValue={setEditMarca}
        />

        <FormInput
        label={'Modelo'}
        value={editModelo  }
        setValue={setEditModelo}
        />

        <FormCheckbox
        value={editAtivo}
        setValue={setEditAtivo}
        
        />

        <PrimaryButton onClick={handleEdit}>Salvar</PrimaryButton>

        </PageDiv>
        </>

    )
}

export default EditUnidadeConsumidora;