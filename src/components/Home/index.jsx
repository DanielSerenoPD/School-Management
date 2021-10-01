import React from 'react';
import {Container} from '../StyledComponents';
import {ContainerTitle, Title, Text} from './Elements';
import {themeFaded} from '../../utils';

const Home = () => {
    return (
        <Container>
            <ContainerTitle theme = {themeFaded}>
                <Title>Welcome To PD</Title>
                <Text>Select an option from the sidebar to interact with the platform</Text>
            </ContainerTitle>
        </Container>
    )
}
export default Home;
