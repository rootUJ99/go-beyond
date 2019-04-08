import React, { Fragment, createContext, useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Home from '../Home';
import Login from '../Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export const UserData = createContext('Guest')
const Navigation =(props)=>{
  const [userName, setUserName] = useState('');
  const getData = (value) => {
    console.log(value)
    setUserName(value.user.username);
  }
  const StyledBody = styled.div`
    padding-top: 78px;
    height: calc(100vh - 100px);
  `;
  return (
    <UserData.Provider value={userName}>
      <Router>
      <Fragment>
      <Header/>
      <StyledBody>
        <Route exact path='/' component={Home}/>
        <Route path='/login' render={()=>(<Login getData={getData}/>)}/>
      </StyledBody>
      </Fragment>
      </Router>
      </UserData.Provider>
  );
}

export default Navigation;
