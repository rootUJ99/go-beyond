import React, {useState, createContext} from 'react'
import axios from 'axios';
import  {withRouter}  from 'react-router';
import SignUp from './SignUp'
import SignIn from './SignIn'
const FormValues = {
  SIGNUP: 'Sign Up',
  SIGNIN: 'Sign In'
}
const Login = (props) => {
  // const UserData = createContext('abc')
  const [renderForm, setrenderForm]=useState('');
  let form;
  let buttonvalue;
  const onSubmitSignUp = (values) =>{
    console.log(values, 'holla');
    if(values){
        axios.post('http://localhost:8000/core/user_list/', {
          ...values
        }, {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem('token', response.data.token)
          props.getData(response.data);
          props.history.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
  }
  const onSubmitSignIn = (values) =>{
    console.log(values, 'holla');
    if(values){
        axios.post('http://localhost:8000/token-auth/', {
          ...values
        }, {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem('token', response.data.token)
          props.getData(response.data);
          props.history.push('/')
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
  switch(renderForm){
    case FormValues.SIGNUP:
      form = <SignUp onSubmitSignUp={onSubmitSignUp}/>;
      buttonvalue = FormValues.SIGNIN
      break
    default :
    form = <SignIn onSubmitSignIn={onSubmitSignIn}/>;
    buttonvalue = FormValues.SIGNUP
    break;
  }
  return (
    <div>
    {form}
    or  <button onClick={()=>{
      renderForm === FormValues.SIGNUP ? setrenderForm('') : setrenderForm(FormValues.SIGNUP)
      }}>{buttonvalue}</button>
    </div>
);
}

export default withRouter(Login)