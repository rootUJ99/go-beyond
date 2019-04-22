import React, {useState} from 'react';
import styled from 'styled-components';

const SlectWrapper = styled.select`
  width: 100px;
`;

const Select = (props) => {
  debugger;
  const [input, setInput] = useState('select option');

  const handleChange = (e)=>{
    setInput({input: e})
  }
  return (
    <SlectWrapper {...props} 
    // onChange={handleChange}
    // value={input}
    >
    {props.children}
    </SlectWrapper>
  );
}
export default Select;