import React from 'react';
import {Container} from '../utils/Elements.jsx';
import {ContainerSwitch} from './Elements.jsx';
import ToogleSwitch from './ToogleSwitch';
import Table from './Table';
import Card from './Card';

export default function InProcess(){
    return(
       <Container direction={["column", "center", "center"]}>
        <ContainerSwitch>
        <ToogleSwitch options={["Currently Enrolled","School Timetable"]}/>
        </ContainerSwitch>
        <Table/>
       </Container>
    );
}