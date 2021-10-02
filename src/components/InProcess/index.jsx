import React from 'react';
import {Container,Button} from '../../utils/Components.jsx';
import {ContainerSwitch} from './Elements.jsx';
import {THEME} from '../../utils/Colors.jsx';
import ToogleSwitch from '../ToogleSwitch';

export default function InProcess(){
    return(
       <Container>
        <ContainerSwitch>
        <ToogleSwitch options={["Currently Enrolled","School Timetable"]}/>
        </ContainerSwitch>
       </Container>
    );
}