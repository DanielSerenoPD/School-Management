import styled from 'styled-components';
import {THEME} from '../../utils/Colors.jsx'
export const StyledTable = styled.table`
  display: block;
  width: 93%;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.25),
    -3px -3px 3px 2px rgba(0, 0, 0, 0.22);
`;

export const THead = styled.thead`
 display: block;
 background-color: ${THEME};
 height: 30px;
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
    display: block;
    height: 30rem;
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
    cursor: pointer;
    &::-webkit-scrollbar {
    width: 10px;
    }

    &::-webkit-scrollbar-thumb {
    background: ${THEME};
    border-radius: 0.25rem;
    border: 1px solid rgba(12, 2, 12, 0.6);
    }
`;

export const TR = styled.tr`
  // custom css goes here
`;

export const TH = styled.th`
background-color: ${THEME};
width: 195px;
`;

export const TD = styled.td`
  // custom css goes here
`;