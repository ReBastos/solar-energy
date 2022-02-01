import { InputLabel } from "../PageDiv/style";
import { List } from "./styles";

const Select = ({ placeholder, opcoes, value, setValue }) => {
  
  const handleSelectOnhcange = (evt) => {
    setValue(evt.target.value);
  };

  const listOptions = opcoes.map((value) => {
    return (
      <option key={value.id} value={value.apelido}>
        {value.apelido}
      </option>
    );
  });

  return (
    <div>
      <InputLabel>Unidade Geradora</InputLabel>

      <List required selected="" onChange={handleSelectOnhcange}>
        <option selected disabled value="">
          {placeholder}
        </option>
        {listOptions}
      </List>
    </div>
  );
};

export default Select;
