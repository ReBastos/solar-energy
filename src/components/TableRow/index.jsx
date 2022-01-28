import {EditButton} from '../EditButton/styles';
import {RemoveButton} from '../RemoveButton/styles';
import { useContext, useState } from "react";
import {UnidadeConsumidoraContext} from '../../contexts/UnidadeConsumidora/index.js'

const Row = ({id, apelido, local, marca, modelo}) => {

    const rowContext = useContext(UnidadeConsumidoraContext);

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
            console.log('error')

        }

        rowContext.atualizar();
    }

    const handleEdit = () =>{


    }
    
    return (
        
        <tr>
        <td>{id}</td>

        <td>{apelido}</td>

        <td>{local}</td>

        <td>{marca}</td>

        <td>{modelo}</td>

        <td><EditButton onClick={handleEdit}>Editar</EditButton></td>

        <td><RemoveButton onClick={deleteJson}>Remover</RemoveButton></td>
        </tr>

    )
}

export default Row;