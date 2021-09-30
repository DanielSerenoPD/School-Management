import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: fixed;
  top:10px;
  left: 10px;
  width: 300px;
  height: 96.5%;
  background-color: #23394d;
  border-radius: 6%;
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
`
export const Avatar = styled.div`
  height: 180px;
  width: 60%;
  border-radius: 6rem;
  margin-top: 7%;
  background-image: url(${({url})=>url});
  background-size: cover;
  background-position: center;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 96%;
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  list-style:none;
`;
export const MenuItem = styled.li`
  width:100%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  &:hover{
    background-color: #0503036a;
  }
  svg {
    font-size: 2.1rem;
    margin-top: 3%;
    margin-bottom: 3%;
  }
`;
export const TitleItem = styled.span`
  color: white;
  font-size: 20px;
`;