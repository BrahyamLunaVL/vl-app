import React, { useState } from 'react';
import './TextAreaComponent.css'

function TextAreaComponent({inputClass, inputId, inputLabel, inputPlaceHolder, inputValue, message, validator, onChange}) {
    let classes = `input-container ${inputClass}`;
    const [value, setValue]=useState(inputValue);
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
            <textarea className={`form-textarea ${isValid ? '' : 'invalid'}`} placeholder={inputPlaceHolder} id={inputId} value={value} onChange={handleChange}/>
            <div className='input-messages'>
                <i className={`fa-solid fa-triangle-exclamation alert ${isValid ? 'hidden' : ''}`}></i>
                <i className={`fa-solid fa-check check ${isValid ? '' : 'hidden'}`}></i>
                {!isValid && <p>{message}</p>}
            </div>
        </div>
    );
}

export {TextAreaComponent}