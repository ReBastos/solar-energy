import { RegisterInput } from "./styles"
import { InputLabel } from "../PageDiv/style"


const FormInput = ({label, value, setValue}) => {


    const handleOnChange = (evt) => {
        setValue(evt.target.value);
        
    }

    return(
        <>
        <InputLabel>{label}</InputLabel>
        <RegisterInput  value={value} onChange={handleOnChange}/>
        </>

    )
}

export default FormInput;