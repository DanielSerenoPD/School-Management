import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
  position: relative;
  width: 100%;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 15px;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &::after {
  text-align: center;
  content: 'Currently Enrolled';
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 1.4em;
  width: 160px;
  height: 30px;
  margin: 3px;
  background-color:${({theme})=>theme};
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  &:checked + ${CheckBoxLabel} {
    &::after {
      content: 'School Timetable';
      align-items: center;
      justify-content:center;
      border-radius: 1.4em;
      height: 30px;
      margin-left: 46%;
      transition: 0.2s;
    }
  }
`
export const Titles = styled.div`
  display: flex;
  margin: auto;
  padding-top:3%;
  width: 97%;
  justify-content: space-between;
`
export const Title = styled.span`
  font-size: 1em;
  color: black;
`
