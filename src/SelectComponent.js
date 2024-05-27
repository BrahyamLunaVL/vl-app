import './SelectComponent.css'
import React, { useState } from 'react';

function SelectComponent({selectClass, selectId, selectLabel, selectName, value, selectValue, message, validator, onChange}){
  const [selectedValue, setSelectedValue] = useState(selectValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    const valid = validator(newValue);
    setIsValid(valid);
    onChange(selectId, newValue, valid);
  };
  
  let classes = `select-container ${selectClass}`;
    return(
      <div className={classes}>
        <label className='form-label' htmlFor={selectId}>{selectLabel}</label>
        <div className='select-dropdown'>
            <select  className={`form-select ${isValid ? '' : 'invalid'}`} name={selectName} id={selectId} value={selectedValue} onChange={handleChange}>
              {value}
            </select>
            <i className="select-icon fa-solid fa-chevron-down"></i>
        </div>
        <div className='select-messages'>
            <i className='fa-solid fa-triangle-exclamation alert'></i>
            <i className="fa-solid fa-check check"></i>
            {!isValid && <p>{message}</p>}
        </div>
      </div>
    );
}

export {SelectComponent}