import styled from 'styled-components';

export const LoginInputs = styled.input`
    border: solid 1px;
    border-radius: 7px;
    width: 300px;
    height: 45px;
    font-size: 18px;

    &:focus{
        zoom: 105%;
    }

    &:hover{
        zoom: 105%;
    }
`
export const RegisterInput = styled(LoginInputs)`

border-radius: 3px;
border: solid 1px #5d6166;
height: 30px;
width: ${(props) => props.short ? '200px' : '300px'};

`
