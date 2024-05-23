import React, { useState } from 'react';
import './InputComponent.css'

function InputComponent({inputClass, inputId, inputLabel, type, inputPlaceHolder, message, validator, onChange }){
  let classes = `input-container ${inputClass}`;

  const [value, setValue]=useState('');
  const [isValid, setIsValid]=useState(true);

  const handleChange=(e)=>{
    const newValue=e.target.value;
    setValue(newValue);
    const valid=validator(newValue);
    setIsValid(valid);
    onChange(inputId, newValue, valid);
  };

  return(
    <div className={classes}> 
      <label className='form-label' htmlFor={inputId}>{inputLabel}</label>
      <input className={`form-input ${isValid ? '' : 'invalid'}`} type={type} placeholder={inputPlaceHolder} id={inputId} value={value} onChange={handleChange}/>
      <div className='input-messages'>
        <i className={`fa-solid fa-triangle-exclamation alert ${isValid ? 'hidden' : ''}`}></i>
        <i className={`fa-solid fa-check check ${isValid ? '' : 'hidden'}`}></i>
        {!isValid && <p>{message}</p>}
      </div>
    </div>
  );
}

export {InputComponent}