import React, {useState} from 'react';
const InputText = (props) => {
  const [input, setInput] = useState(0);

  const handleChange = (e)=>{
    setInput({input: e})
  }
  return (
    <input {...props} 
    // onChange={handleChange}
    // value={input}
    />
  );
}
export default InputText;