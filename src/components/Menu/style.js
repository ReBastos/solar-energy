import styled from 'styled-components';

export const MenuButton = styled.button`

    width: 200px;
    height: 50px;
    background: none;
    border: none;
    border-radius: 7px;
    color: #a098ae;
    font-size: 18px;

    &:hover {
        background-color: #4cbc9a;
        color: white;
    }

`

export const MenuDiv = styled.div`

    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    padding-top: 20px;

`