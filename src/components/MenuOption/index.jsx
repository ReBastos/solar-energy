import { MenuButton } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuOption = ({
  icon,
  title,
  selected,
  setFalse1,
  setFalse2,
  setTrue,
  navigate,
}) => {
  const menuNavigate = useNavigate();

  const changeButtons = () => {
    setFalse1(false);
    setFalse2(false);
    setTrue(true);

    menuNavigate(navigate);
  };

  if (selected) {
    return (
      <>
        <button onClick={changeButtons}>
          <MenuButton selected>
            <img src={icon} />
            <label>{title}</label>
          </MenuButton>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={changeButtons}>
          <MenuButton>
            <img src={icon} />
            <label>{title}</label>
          </MenuButton>
        </button>
      </>
    );
  }
};

export default MenuOption;
