import { InputLabel } from "../PageDiv/style"
import { DateDiv, Date } from "./styles";
const InputDate = () => {

  return(
    <div>
      <InputLabel>Mês/Ano</InputLabel>
      <DateDiv>
        <Date type={'date'}/>
      </DateDiv>
    </div>
  )
}

export default InputDate;