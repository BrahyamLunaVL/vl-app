import React from 'react';

import './InputFileComponent.css'

function InputFileComponent({inputClass, inputId, inputLabel, message, onChange}){

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const fileInput = document.getElementById(inputId);
      if (fileInput) {
        const dataTransfer = new DataTransfer();
        Array.from(event.dataTransfer.files).forEach(file => {
          dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;

        const changeEvent = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(changeEvent);
        event.dataTransfer.clearData();
      }
    }
  };

  return(
    <div className={`input-file-container ${inputClass}`}>
      <label htmlFor={inputId}>{inputLabel}</label>
      <div className='input-file-drag-and-drop' onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className='drag-and-drop-message'>
          <i className="fa-solid fa-file-arrow-up"></i>
          <p>Drag and Drop</p>
          <p>or</p>
          <p><b>Click to Upload</b></p>
          <p>{`PDF or JPG (max 12Mb)`}</p>
        </div>
        <input id={inputId} type='file' onChange={onChange} multiple/>
      </div>
      <div className='input-messages'>
        <p>{message}</p>
      </div>
    </div> 
  )
}

export {InputFileComponent}