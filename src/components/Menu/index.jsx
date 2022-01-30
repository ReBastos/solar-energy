import { SmallLogo } from "../Logos/styles";
import { MenuDiv } from "./style";
import MenuOption from "../MenuOption";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './index.css'

const Menu = () => {
  
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  
  
  return (
    <>
      <MenuDiv>
        <SmallLogo src={logo} />

        
          <MenuOption
            icon={
              "https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-bar-infographic-elements-soft-fill-soft-fill-juicy-fish-2.png"
            }
            title={"Dashboard"}
            selected={select1}
            setFalse1={setSelect2}
            setFalse2={setSelect3}
            setTrue={setSelect1}
            navigate={'/dashboard'}
          />
        

          
          <MenuOption
            icon={
              "https://img.icons8.com/cotton/64/000000/idea.png"
            }
            title={"Unidade Consumidora"}
            selected={select2}
            setFalse1={setSelect1}
            setFalse2={setSelect3}
            setTrue={setSelect2}
            navigate={'/unidadeconsumidora'}
          />
        

        
          <MenuOption
            icon={
              "https://img.icons8.com/cotton/64/000000/toolbox.png"
            }
            title={"Cadastro de Energia Gerada"}
            selected={select3}
            setFalse1={setSelect2}
            setFalse2={setSelect1}
            setTrue={setSelect3}
            navigate={'/cadastroenergia'}
          />
        
      </MenuDiv>
    </>
  );
};

export default Menu;
