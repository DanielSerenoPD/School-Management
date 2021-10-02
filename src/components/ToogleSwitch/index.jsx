import React from 'react';
import {CheckBoxWrapper, CheckBox, CheckBoxLabel,Titles, Title} from './Components.jsx';
import {THEME} from '../../utils/Colors.jsx';
export default function ToogleSwitch(){
    return(
        <CheckBoxWrapper>
            <Titles>
            <Title>Currently Enrolled</Title>
            <Title>School Timetable</Title>
            </Titles>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" theme = {THEME}/>
      </CheckBoxWrapper>
    );
}