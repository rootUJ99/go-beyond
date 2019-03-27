import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import {Header} from '../StyledComponents/Header';
import {Img} from '../StyledComponents/Logo'
import {Menu, MenuItems} from '../StyledComponents/MenuItems'
import {NavLink} from 'react-router-dom'
class Header0 extends Component {
  render() {
    return (
      <Fragment>
        <Header>
        <Img src={logo} alt="logo" />
        <div/>
        <Menu>
          <MenuItems>
          <NavLink exact to="/">
            Home
            </NavLink>
          </MenuItems>
          <MenuItems>
            <NavLink exact to="/Login">
            Login
            </NavLink>
          </MenuItems>
        </Menu>
        </Header>
      </Fragment>
    );
  }
}

export default Header0;
