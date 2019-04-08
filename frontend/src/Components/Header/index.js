import React from 'react'
import * as S from './styles';
import {NavLink} from 'react-router-dom';


const  Header2 =()=> {
  return (
    <div>
      <S.NavBar>

<S.NavContainer>

  <S.NavSectionLeft>

    {/* <button class="navMobileIcon icon_wrapper icon_wrapper--clickable">
      <svg class="icon icon--nav" role="presentation" viewBox="0 0 20 14">
        <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"></path>
      </svg>
    </button> */}

    {/* <S.NavLinkList class="navLinks--main">
      <S.NavLinkStyled>
      
      </S.NavLinkStyled>
    </S.NavLinkList> */}
  </S.NavSectionLeft>

  <S.NavSection>
    <NavLink exact to="/">
        <S.NavLogo version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 10">
        <title>Brand logo</title>
        <g>
          <path d="M40,4.9l5,4.9l5-4.9L45,0L40,4.9z"/>
          <circle cx="25" cy="5" r="5"/>
          <path d="M10,0L0,10h10V0z"/>
        </g>
        </S.NavLogo>
        </NavLink>
  </S.NavSection>

  <S.NavSectionRight>
    <S.NavLinkList>
    <S.NavLinkStyled>
    <NavLink exact to="/Login">
            Login
      </NavLink>
      </S.NavLinkStyled>
    </S.NavLinkList>
  </S.NavSectionRight>
</S.NavContainer>
</S.NavBar>
    </div>
  )
}
export default Header2;