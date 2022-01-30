import { RegisterInput } from "./styles";
import { InputLabel } from "../PageDiv/style";

const FormInput = ({ label, value, setValue, type }) => {
  const handleOnChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <RegisterInput
        required
        value={value}
        onChange={handleOnChange}
        type={type}
      />
    </>
  );
};

export default FormInput;
