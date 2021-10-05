import styled from 'styled-components'
import {THEME} from '../../utils/Colors.jsx'
export const ContainerCard = styled.div`
  text-align: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25),
    -2px -2px 2px 1px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  border-top: solid 4px;
  border-color: #50eb12ac;
`
export const HeaderCard = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-content: center;
  font-size: 15px;
  padding: .5em 0;
  svg {
    font-size: 1.4rem;
    fill: #23394d;
  }
`
export const BodyCard = styled.div`
  text-align:left;
  display: flex;
  flex-direction: column;
`
export const Text = styled.h3`
  font-size: 15px;
  color: #110707da;
  margin-left: .5em;
`
export const FadedText = styled(Text)`
  font-size: 15px;
  color: #110707ba;
  margin: .5em .5em;
`
export const BlueText = styled(Text)`
  color: #0b0b7edf;
  margin: .5em .5em;
`
