import styled from 'styled-components';

export const MenuButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.selected ? '#4cbc9a' : 'none'};
    border: none;
    border-radius: 7px;
    color: ${(props) => props.selected ? 'white' : '#a098ae'};
    font-size: 16px;
    text-align: left;
    padding-left: 3px;
    box-shadow: 0px 0px 6px -4px rgba(0,0,0,0.67);

    &:hover {
        background-color: #4cbc9a;
        color: white;
        zoom: 105%;
    }

    img{
        width: 26px;
        height: 26px;
    }


    @media(max-width: 800px){
        width: 80px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;

        
        label {
            display: none;
        }

        


    }

`