import styled from 'styled-components'
import {THEME} from '../../utils/Colors.jsx'
export const ContainerCard = styled.div`
  text-align: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25),
    -2px -2px 2px 1px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  border-top: solid 4px;
  border-color: ${THEME};
`
export const HeaderCard = styled.div`
  font-size: 15px;
  background-color: red;
  padding: .5em 1em;
  svg {
    font-size: 2.4rem;
    
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
  margin: .5em .5em;
`
export const FadedText = styled(Text)`
  font-size: 15px;
  color: #110707ba;
`
export const BlueText = styled(Text)`
  color: #0b0b7edf;
`
