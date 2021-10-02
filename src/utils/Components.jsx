import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
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
  color: #fff;
  background: ${({backgroundColor})=>backgroundColor};
  box-shadow: 0px 5px 0px 0px ${({shadowColor})=>shadowColor};;
  padding: 7px 20px;
  white-space: nowrap;
  border-radius: 100px;
  margin: 10px 5px;
  transition: all 0.2s ease-in-out;
`
