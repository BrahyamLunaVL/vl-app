import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';

import {APITHREE} from "./formThreeAPI"

const validateIsNotSelect = (text) => !text.includes('Select')

const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponentThree({show, formName, onSubmit}) {
  const [inputs, setInputs] = useState({
    'education': { value: APITHREE.university, valid:  APITHREE.education==""?false:true},
    'university': { value: APITHREE.tellAboutYou, valid:  APITHREE.university==""?false:true},
    'degree-name': { value: APITHREE.degreeName, valid:  APITHREE.degreeName==""?false:true},
    'student': { value: APITHREE.student, valid:  APITHREE.student==""?false:true},
    'linkedin': { value: APITHREE.linkedin, valid:  APITHREE.linkedin==""?false:true},
    'portfolio': { value: APITHREE.portfolio, valid:  APITHREE.portfolio==""?false:true}
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (id, value, valid) => {
    setInputs(prev => ({
      ...prev,
      [id]: { value, valid }
    }));
  };

  const allValid = Object.values(inputs).every(input => input.valid);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
    else{
      onSubmit();
    }
  }

  return (
    <form className={show} onSubmit={handleSubmit}>
      <h2>{formName}</h2>
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
        selectValue={APITHREE.university}
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
        inputValue={APITHREE.tellAboutYou}
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
        inputValue={APITHREE.degreeName}
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
        selectValue={APITHREE.student}
        message=""
        validator={validateIsNotSelect}
        onChange={handleInputChange}
      />
      <InputFileComponent
        inputClass="message"
        inputId="internet"
        inputLabel="Upload Internet Speed Screenshot*"
        message="Please go to Speedtest.net to complete this test. Here's an illustrative screenshot example"
        onChange={handleFileChange}
      />
      <div className='double-input'>
      <InputComponent
        inputClass=""
        inputId="linkedin"
        inputLabel="LinkedIn.com Profile"
        type="Text"
        inputPlaceHolder="www.linkedin.com/in/"
        inputValue={APITHREE.linkedin}
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
        inputValue={APITHREE.portfolio}
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