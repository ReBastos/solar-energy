import { LoginDiv, LoginInputs } from "./styles";

const LoginLabel = ({ value, setValue, type, icon, placeholder }) => {
  const handleLoginOnChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <div>
        <LoginDiv>
          <img src={icon} />
          <LoginInputs
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleLoginOnChange}
          />
        </LoginDiv>
      </div>
    </>
  );
};

export default LoginLabel;
