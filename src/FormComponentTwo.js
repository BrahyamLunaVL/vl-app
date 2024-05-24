import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {OptionComponent} from './OptionComponent';
import {TextAreaComponent} from "./TextAreaComponent";

const validateIsNotSelect = (text) => !text.includes('Select')
const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponentTwo() {
  const [inputs, setInputs] = useState({
    'tell-about-you': { value: '', valid: false },
    'years-worked': { value: '', valid: false },
    'current-employment-status': { value: '', valid: false },
    'ideal-working-schedule': { value: '', valid: false },
    'kind-of-roles': { value: '', valid: false },
    'working-location': { value: '', valid: false }
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
      <TextAreaComponent
        inputClass="message"
        inputId="tell-about-you"
        inputLabel="In a few sentences, please tell us what you're currently doing for work to earn a living?*"
        inputPlaceHolder="Tell us about you"
        message="Minimum 100 characters"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <div className='double-input'>
        <InputComponent
          inputClass="error"
          inputId="years-worked"
          inputLabel="How many years have you worked remotely?*"
          type="number"
          inputPlaceHolder="Years worked remotly"
          message="Doesm't look like a valid cell phone number"
          validator={validateNotEmpty}
          onChange={handleInputChange}
        />
        <SelectComponent
          selectClass=""
          selectId="current-employment-status"
          selectLabel="What is your current employment status?*"
          selectName="current-employment-status"
          value={[
            <OptionComponent key={1} option='Select'/>,
            <OptionComponent key={2} option='Employed'/>,
            <OptionComponent key={3} option='Unemployed'/>
          ]}
          message=""
          validator={validateIsNotSelect}
          onChange={handleInputChange}
        />
      </div>
        <SelectComponent
          selectClass=""
          selectId="ideal-working-schedule"
          selectLabel="What is your ideal working schedule*:** "
          selectName="ideal-working-schedule"
          value={[
            <OptionComponent key={4} option='Select'/>,
            <OptionComponent key={5} option='Part time'/>,
            <OptionComponent key={6} option='Full time'/>
          ]}
          message=""
          validator={validateIsNotSelect}
          onChange={handleInputChange}
        />
        <SelectComponent
          selectClass=""
          selectId="kind-of-roles"
          selectLabel="What kind of roles are you interested in?*"
          selectName="kind-of-roles"
          value={[
            <OptionComponent key={7} option='Select'/>,
            <OptionComponent key={8} option='Development'/>,
            <OptionComponent key={9} option='Design'/>,
            <OptionComponent key={10} option='Business'/>,
            <OptionComponent key={11} option='Marketing'/>,
            <OptionComponent key={12} option='Data'/>
          ]}
          message=""
          validator={validateIsNotSelect}
          onChange={handleInputChange}
        />
        <SelectComponent
          selectClass=""
          selectId="working-location"
          selectLabel="What is your ideal working location?*"
          selectName="working-location"
          value={[
            <OptionComponent key={13} option='Select'/>,
            <OptionComponent key={14} option='Remote'/>,
            <OptionComponent key={15} option='On site'/>
          ]}
          message=""
          validator={validateIsNotSelect}
          onChange={handleInputChange}
        />
      <button className='medium-button primary-button' type="submit" disabled={!allValid}>Submit</button>
    </form>
  );
}

export {FormComponentTwo};