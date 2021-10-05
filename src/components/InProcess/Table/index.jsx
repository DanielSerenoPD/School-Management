import React from 'react';
import {StyledTable, THead, TBody, TFoot, TH, TR, TD } from './Elements.jsx';
import Card from '../Card';
export default function Table(){
    const header = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
    const body = [[1,2,4,5,7],[1,2,4,6,8],[1,2,4,6,8],[1,2,4,6,8]];
    return(
<StyledTable>
    <THead>
        <TR>
            {
                header.map((day,index)=>
                    <TH key = {index}>{day}</TH>
                    )
            }
        </TR>
    </THead>
    <TBody>
        {
          body&&body.map((card, index)=>
          <TR>
              {
                  card.map((card, index)=>
                  <TD><Card/></TD>
                  )
              }
          </TR>
          )
        }
    </TBody>
</StyledTable>
    );
}