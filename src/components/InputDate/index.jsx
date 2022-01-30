import { InputLabel } from "../PageDiv/style";
import { DateDiv, Date } from "./styles";

const InputDate = ({ setMes, setAno }) => {
  const handleOnChangeDate = (evt) => {
    setAno(
      evt.target.value[0] +
        evt.target.value[1] +
        evt.target.value[2] +
        evt.target.value[3]
    );
    setMes(evt.target.value[5] + evt.target.value[6]);
  };

  return (
    <div>
      <InputLabel>Mês/Ano</InputLabel>
      <DateDiv>
        <Date
          type={"date"}
          onChange={handleOnChangeDate}
          min="2022-01-01"
          max="2022-12-31"
        />
      </DateDiv>
    </div>
  );
};

export default InputDate;
