import React, {useContext} from 'react'
import {UserData} from './Navigation';
export default function Home(props) {
  const value = useContext(UserData);
  console.log('contextValue',value)
  return (
    <div>
      im home holla
      <button onClick={()=>{localStorage.removeItem('token')}}> LogOut</button>

    </div>
  )
}
