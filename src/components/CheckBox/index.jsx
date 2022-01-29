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
        <div style={{display: 'flex', alignItems: 'center'}}>

        
        <input type={'checkbox'} onChange={handleOnChange}/>
        <InputLabel>Ativo</InputLabel>

        </div>

        </>

    )
}

export default FormCheckbox;