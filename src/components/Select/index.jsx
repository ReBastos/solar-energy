import { InputLabel } from "../PageDiv/style"
import { List } from "./styles";

const Select = ({placeholder, opcoes}) => {


    const listOptions = opcoes.map((value) => {

        return(
            <option
                key={value.id}
                value={value.apelido}>
                {value.apelido}
              </option>
        )

    })
    return(
        <>
        <InputLabel>Unidade Geradora</InputLabel>
        
        
        <List selected=''>
            <option selected disabled value="">{placeholder}</option>
            {listOptions}
        </List>
        </>

    )
}

export default Select;