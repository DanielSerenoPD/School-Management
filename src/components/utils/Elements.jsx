import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: ${({direction})=>direction[0]};
  justify-content: ${({direction})=>direction[1]};
  align-items: ${({direction})=>direction[2]};
  margin-left: 20.7%;
  width: 79.3%;
  height: 100%;
`
export const Button = styled.button`
  text-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-decoration: none;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  display: inline-block;
  color: ${({hide})=>hide ? 'black':'white'};
  background-color: ${({backgroundColor})=>backgroundColor};
  padding: 7px 20px;
  white-space: nowrap;
  border-radius: 100px;
  margin: 10px 2px;
  transition: all 0.2s ease-in-out;
  background: ${({hide})=>hide ? 'transparent':null}
`
