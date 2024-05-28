import React from 'react';

import './InputFileComponent.css'

function InputFileComponent({inputClass, inputId, inputLabel, message, onChange}){
  return(
    <div className={`input-file-container ${inputClass}`}>
      <label htmlFor={inputId}>{inputLabel}</label>
      <div className='input-file-drag-and-drop'>
        <div className='drag-and-drop-message'>
          <i className="fa-solid fa-file-arrow-up"></i>
          <p>Drag and Drop</p>
          <p>or</p>
          <p><b>Click to Upload</b></p>
          <p>{`PDF or JPG (max 12Mb)`}</p>
        </div>
        <input id={inputId} type='file' onChange={onChange}/>
      </div>
      <div className='input-messages'>
        <p>{message}</p>
      </div>
    </div> 
  )
}

export {InputFileComponent}