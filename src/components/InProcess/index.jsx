import React from 'react';
import {Container} from '../utils/Elements.jsx';
import {ContainerSwitch} from './Elements.jsx';
import ToogleSwitch from './ToogleSwitch';
import Card from './Card';

export default function InProcess(){
    return(
       <Container>
        <ContainerSwitch>
        <ToogleSwitch options={["Currently Enrolled","School Timetable"]}/>
        </ContainerSwitch>
        <Card/>
       </Container>
    );
}