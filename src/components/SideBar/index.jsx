import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import {Container, ProfileContainer, Avatar, Wrapper, Menu, MenuItem, TitleItem} from './elements';
import Profile from './resources/profile.jpg'
const SideBar = () => {
    return (
          <Container> 
              <Wrapper>
              <ProfileContainer>
              <Avatar url = {Profile}/>
              </ProfileContainer>
                <Menu>
                <NavLink to = {"/...."}>
                <MenuItem>
                    <AiOutlineHome/>
                    <TitleItem>Inicio</TitleItem>
                </MenuItem>
                </NavLink>
                </Menu>

              </Wrapper>
            
          </Container>  
    )
}
export default SideBar;
