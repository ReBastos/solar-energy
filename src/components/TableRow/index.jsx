import {EditButton} from '../EditButton/styles';
import {RemoveButton} from '../RemoveButton/styles';
import { useContext, useState } from "react";
import {UnidadeConsumidoraContext} from '../../contexts/UnidadeConsumidora/index.js'
import { useNavigate } from 'react-router-dom';

const Row = ({id, apelido, local, marca, modelo}) => {

    const rowContext = useContext(UnidadeConsumidoraContext);

    const redirectEdit = useNavigate();

    const deleteJson = async (evt) => {

        evt.preventDefault();

        try{
            await fetch('http://localhost:3333/unidades/'+id,
            {
                method: 'DELETE',
                body: JSON.stringify({
                    apelido: apelido,
                    local: local,
                    marca: marca,
                    modelo: modelo,
                    ativo: ''
                }),
                headers: {'Content-Type': 'application/json'},
            },
            )
        } catch (error) {
           

        }

        rowContext.atualizar();
    }

    const handleEdit = () =>{

        rowContext.editUnidade(id);
        redirectEdit('/editarunidadeconsumidora');

    }
    
    return (
        
        <tr>
        <td>{id}</td>

        <td>{apelido}</td>

        <td>{local}</td>

        <td>{marca}</td>

        <td>{modelo}W</td>

        <td><EditButton onClick={handleEdit}>Editar</EditButton></td>

        <td><RemoveButton onClick={deleteJson}>Remover</RemoveButton></td>
        </tr>

    )
}

export default Row;