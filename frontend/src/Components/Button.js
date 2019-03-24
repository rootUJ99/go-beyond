import React, {useState} from 'react';
const InputText = (props) => {
  const [input, setInput] = useState(0);

  const handleChange = (e)=>{
    
  }
  return (
    <button  placeholder={props.placeholder} onClick={handleChange}></button>
  );
}
export default InputText;