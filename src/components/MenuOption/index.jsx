import { MenuButton } from "./styles"


const MenuOption = ({icon, title}) => {

    return(
        <>
        
        <MenuButton>
        <img src={icon}/>
        {title}
        </MenuButton>
        </>
    )
}

export default MenuOption;