import './SelectComponent.css'
import {OptionComponent} from './OptionComponent';

function SelectComponent({selectClass, selectId, selectLabel, selectName, value, message}){
    let classes = `select-container ${selectClass}`;
    return(
      <div className={classes}>
        <label className='form-label' for={selectId}>{selectLabel}</label>
        <div className='select-dropdown'>
            <select  className='form-select' name={selectName} id={selectId}>
              {value}
            </select>
            <i className="select-icon fa-solid fa-chevron-down"></i>
        </div>
        <div className='select-messages'>
            <i className='fa-solid fa-triangle-exclamation alert'></i>
            <i className="fa-solid fa-check check"></i>
            <p>{message}</p>
        </div>
      </div>
    );
}

export {SelectComponent}