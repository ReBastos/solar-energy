import styled from 'styled-components';

export const MenuButton = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 200px;
    height: 50px;
    background: none;
    border: none;
    border-radius: 7px;
    color: #a098ae;
    font-size: 16px;
    text-align: left;
    padding-left: 3px;
    text-decoration: none;

    &:hover {
        background-color: #4cbc9a;
        color: white;
    }

    img{
        width: 26px;
        height: 26px;
    }
`