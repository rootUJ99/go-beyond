import React, {useState} from 'react';
import styled from 'styled-components';
// import * as S from './styles';

export const ButtonWapper = styled.button`
flex: 1 1 auto;
  margin: 10px;
  font-weight: 400;
  padding: 10px 30px;
  text-align: center;
  text-transform: capitalize;
  transition: 0.5s;
  background-size: 200% auto;
  color: #ffffff;
  box-shadow: 0 13px 13px -12px rgba(0,0,0,.36);
  :hover {
    box-shadow: 0 16px 13px -12px rgba(0,0,0,0);
  }
  :focus {
    outline:0;
  }
  :active{
    box-shadow: 0 0 20px #eee;
  };
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  border: none;
  /* box-shadow: 0 0 20px #eee; */
  border-radius:5px;
  background-image: linear-gradient(135deg, #25a7df 0%, #a1c4fd 51%, #a1c4fd 100%);
`;

const Button = (props) => {
  const [input, setInput] = useState(0);
  return (
    <ButtonWapper onClick={props.handleChange} {...props}/>
  );
}
export default Button;