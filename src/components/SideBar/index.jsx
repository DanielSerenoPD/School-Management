import React from 'react';
import {NavLink} from 'react-router-dom';
import {items} from './Data'
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
                {
                    items&&items.map(item=>
                        <NavLink to = {item.path}>
                <MenuItem>
                    {<item.icon/>}
                    <TitleItem>{item.title}</TitleItem>
                </MenuItem>
                </NavLink>
                        )
                }
                </Menu>

                
                
              </Wrapper>
            
          </Container>  
    )
}
export default SideBar;
