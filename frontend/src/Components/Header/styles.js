import styled from 'styled-components';
export const NavBar = styled.header`
a, a:active, a:hover, a:visited {
  text-decoration: none;
}

ol, ul {
  list-style: none;
  padding: 0;
}
  top: 0;
  left: 0;
  z-index: 7;
  color: #444;
  border-bottom: 1px solid #eee;
  background: #fff;
  background-color: rgba(255, 255, 255, 0.98);
  position: fixed;
  width: 100%;

  
`;

export const NavLogo = styled.svg`
  width: 63px;
  fill: #444;
`;
export const NavLinkStyled = styled.li`
  margin: 0 14px;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 49px;
  padding: 14px;
  transition: height 0.42s ease-in-out;
  @media (max-width: 767px) {
    height: 63px;
    padding: 0 14px;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const NavSectionHalf = styled(NavSection)`
  width: 50%;
`;

export const NavSectionLeft = styled(NavSectionHalf)`
  justify-content: flex-start;
`;
export const NavSectionRight = styled(NavSectionHalf)`
  justify-content: flex-end;
`;

export const NavLinkList = styled.ul`
  display: flex;
`;