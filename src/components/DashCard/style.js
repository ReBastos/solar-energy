import styled from 'styled-components';

export const DashCardDiv = styled.div`

    width: 230px;
    height: 100px;
    border: solid 1px #cfd0d9;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        border-color: #3751ff;

        h3{
            color: #3751ff;
        }

        p{
            color: #3751ff
        }
    }

    h3{
        color: #cfd0d9;
        margin: 0;
        font-weight: 500;

    }

    p{
        font-weight: bold;
        font-size: 24px;
        margin: 0;
        color: #2e303b;

    }
`