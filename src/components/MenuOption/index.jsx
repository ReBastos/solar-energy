import { MenuButton } from "./styles"


const MenuOption = ({icon, title, selected}) => {

    if (selected){
        return(
            <>
            <MenuButton selected>
            <img src={icon}/>
            {title}
            </MenuButton>
            </>
        )
    } else{
    return(
        <>
        <MenuButton>
        <img src={icon}/>
        {title}
        </MenuButton>
        </>
    )
    }
}

export default MenuOption;