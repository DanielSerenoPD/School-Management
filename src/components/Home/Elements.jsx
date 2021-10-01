import styled from 'styled-components';

export const ContainerTitle = styled.div`
    margin-top:10%;
    padding: 2em 0;
    width: 80%;
    text-align: center;
    background-color: ${({theme})=>theme};
`;

export const Title = styled.h2`
    font-size: 2em;
    color: black;
`;
export const Text = styled.p`
    margin-top:2%;
    font-size: 1.2em;
    color: black;
`;