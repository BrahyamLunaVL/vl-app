import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';

const validateIsNotSelect = (text) => !text.includes('Select')

const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponentThree() {
  const [inputs, setInputs] = useState({
    'education': { value: '', valid: false },
    'university': { value: '', valid: false },
    'degree-name': { value: '', valid: false },
    'student': { value: '', valid: false },
    'linkedin': { value: '', valid: false },
    'portfolio': { value: '', valid: false }
  });

  const handleInputChange = (id, value, valid) => {
    setInputs(prev => ({
      ...prev,
      [id]: { value, valid }
    }));
  };

  const allValid = Object.values(inputs).every(input => input.valid);

  return (
    <form>
      <SelectComponent
        selectClass=""
        selectId="education"
        selectLabel="Please indicate your Highest level of Education (finished degree)*"
        selectName="education"
        value={[
          <OptionComponent key={1} option='Select'/>,
          <OptionComponent key={2} option='Primary School'/>,
          <OptionComponent key={3} option='Secondary School'/>,
          <OptionComponent key={4} option='University'/>,
          <OptionComponent key={5} option='University (Master)'/>
        ]}
        message=""
        validator={validateIsNotSelect}
        onChange={handleInputChange}
      />
      <InputComponent
        inputClass="good"
        inputId="university"
        inputLabel="What university degree did you graduate with?*"
        type="Text"
        inputPlaceHolder="Enter your university"
        message="University selected"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <InputComponent
        inputClass="good"
        inputId="degree-name"
        inputLabel="What is your degree's exact name as listed in your diploma (In English)?*"
        type="Text"
        inputPlaceHolder="Enter your degree name (in English)"
        message="Degree name typed"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <SelectComponent
        selectClass=""
        selectId="student"
        selectLabel=" Are you a current student?*"
        selectName="student"
        value={[
          <OptionComponent key={24} option='Select'/>,
          <OptionComponent key={25} option='Yes'/>,
          <OptionComponent key={26} option='No'/>
        ]}
        message=""
        validator={validateIsNotSelect}
        onChange={handleInputChange}
      />
      <InputFileComponent/>
      <div className='double-input'>
      <InputComponent
        inputClass=""
        inputId="linkedin"
        inputLabel="LinkedIn.com Profile"
        type="Text"
        inputPlaceHolder="www.linkedin.com/in/"
        message="You've selected Colombia"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <InputComponent
        inputClass=""
        inputId="portfolio"
        inputLabel="Design Portfolio page, such as Behance"
        type="Text"
        inputPlaceHolder="www.yourportfolio.com"
        message=""
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      </div>
      <button className='medium-button primary-button' type="submit" disabled={!allValid}>Submit</button>
    </form>
  );
}

export {FormComponentThree};