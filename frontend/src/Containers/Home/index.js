import React, {useContext, Fragment} from 'react'
import {UserData} from '../Navigation';
import Select from '../../Components/Select';
import * as S from './styles';
import Button from '../../Components/Button';
export default function Home(props) {
  const value = useContext(UserData);
  console.log('contextValue',value)
  return (
    // <div>
    //   im home holla
    //   <Button onClick={()=>{localStorage.removeItem('token')}}> LogOut</Button>
    // </div>
    <Fragment>
    <S.Top>
    <Select onChange={()=>{}}>
      <option value='Hindi'>Hindi</option>
      <option value='Marathi'>Marathi</option>
    </Select>
    </S.Top>
    <S.Mid>
      holla
    </S.Mid>
    <S.Bottom>
      yooloa
    </S.Bottom>
    </Fragment>
  )
}
