import React, {useContext} from 'react'
import {UserData} from '../Navigation';
import Button from '../../Components/Button';
export default function Home(props) {
  const value = useContext(UserData);
  console.log('contextValue',value)
  return (
    <div>
      im home holla
      <Button onClick={()=>{localStorage.removeItem('token')}}> LogOut</Button>
    </div>
  )
}
