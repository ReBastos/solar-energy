import styled from 'styled-components';
import { LoginInputs } from '../LoginInputs/styles';

export const RegisterInput = styled(LoginInputs)`

border-radius: 3px;
border: solid 1px #5d6166;
height: 30px;
width: ${(props) => props.short ? '200px' : '300px'};

`
