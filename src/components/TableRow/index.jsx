import {EditButton} from '../EditButton/styles';
import {RemoveButton} from '../RemoveButton/styles';

const Row = ({id, apelido, local, marca, modelo}) => {

    return (
        
        <tr>
        <td>{id}</td>

        <td>{apelido}</td>

        <td>{local}</td>

        <td>{marca}</td>

        <td>{modelo}</td>

        <td><EditButton>Editar</EditButton></td>

        <td><RemoveButton>Remover</RemoveButton></td>
        </tr>

    )
}

export default Row;