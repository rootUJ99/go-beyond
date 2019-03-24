import React, { Fragment, createContext, useState } from 'react';
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
  return (
    <UserData.Provider value={userName}>
      <Router>
      <Fragment>
      <Header/>
        <Route exact path='/' component={Home}/>
          <Route path='/login' render={()=>(<Login getData={getData}/>)}/>
      </Fragment>
      </Router>
      </UserData.Provider>
  );
}

export default Navigation;
