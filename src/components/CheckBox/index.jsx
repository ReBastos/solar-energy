import { InputLabel } from "../PageDiv/style"

const FormCheckbox = ({value, setValue}) => {


    const handleOnChange = (evt) => {
        
        if(!value){
            setValue(true)
        } else {
            setValue(false)
        }

        
    }

    return(
        <>
        <label>

        
        <input type={'checkbox'} onChange={handleOnChange}/>
        <InputLabel>Ativo</InputLabel>

        </label>

        </>

    )
}

export default FormCheckbox;