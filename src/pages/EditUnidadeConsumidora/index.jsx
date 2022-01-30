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
    console.log(EditContext)
    
    const [editApelido, setEditApelido ] = useState('');
    const [editLocal, setEditLocal ] = useState('');
    const [editMarca, setEditMarca ] = useState('');
    const [editModelo, setEditModelo ] = useState('');
    const [editAtivo, setEditAtivo] = useState(false);

    useEffect( async () => {
        setEditApelido(EditContext.editValue.apelido);
        setEditLocal(EditContext.editValue.local);
        setEditMarca(EditContext.editValue.marca);
        setEditModelo(EditContext.editValue.modelo);
        setEditAtivo(EditContext.editValue.ativo);

    },[EditContext]);


    const retorno = useNavigate();
    
    const handleEdit = async (evt) =>{

        evt.preventDefault();

        try{
            await fetch('http://localhost:3333/unidades/' + EditContext.editValue.id,
            {
                method: 'PUT',
                body: JSON.stringify({
                    apelido: editApelido,
                    local: editLocal,
                    marca: editMarca,
                    modelo: editModelo,
                    ativo: editAtivo
                }),
                headers: {'Content-Type': 'application/json'},
            },
            )
        } catch (error) {
            

        }

        EditContext.atualizar();
    
    retorno('/unidadeconsumidora');
    }

    if(EditContext.editValue === undefined) {
        return(null)
    } else{
    
    return(
        <>

        <PageDiv>
        <PageTitle>Unidade Consumidora</PageTitle>
        <SubTitle>Cadastro de Unidade Consumidora</SubTitle>

        <form onSubmit={handleEdit}>
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
        value={editModelo}
        setValue={setEditModelo}
        />

        <FormCheckbox
        value={editAtivo}
        setValue={setEditAtivo}
        
        />

        <PrimaryButton type={'submit'}>Salvar</PrimaryButton>

        </form>
        </PageDiv>
        </>

    )
}}

export default EditUnidadeConsumidora;