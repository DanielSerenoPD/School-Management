import React from 'react';
import {items} from './Data'
import {Container, ProfileContainer, Avatar, Wrapper, Menu, MenuItem, TitleItem,NavLink} from './elements';
import Profile from './resources/profile.jpg';
import {theme} from '../../utils';
const SideBar = () => {
    return (
          <Container theme = {theme}> 
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
