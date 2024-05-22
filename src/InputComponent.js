import './InputComponent.css'

function InputComponent({inputClass, inputId, inputLabel, type, inputPlaceHolder, message}){
  let classes = `input-container ${inputClass}`;
  return(
    <div className={classes}> 
      <label className='form-label' for={inputId}>{inputLabel}</label>
      <input className='form-input' type={type} placeholder={inputPlaceHolder} id={inputId}/>
      <div className='input-messages'>
        <i className='fa-solid fa-triangle-exclamation alert'></i>
        <i className="fa-solid fa-check check"></i>
        <p>{message}</p>
      </div>
    </div>
  );
}

export {InputComponent}