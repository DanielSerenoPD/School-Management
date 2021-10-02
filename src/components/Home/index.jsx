import React from 'react';
import {Container} from '../utils/Elements.jsx';
import {ContainerTitle, Title, Text} from './Elements';
import {THEME_FADED} from '../utils/Colors.jsx';

const Home = () => {
    return (
        <Container>
            <ContainerTitle theme = {THEME_FADED}>
                <Title>¡Welcome To PD!</Title>
                <Text>Select an option from the sidebar to interact with the platform.</Text>
            </ContainerTitle>
        </Container>
    )
}
export default Home;
