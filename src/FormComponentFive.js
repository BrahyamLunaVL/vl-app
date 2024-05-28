import { useEffect} from 'react';
import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';

import {APIFIVE} from './formFiveAPI'

const validateIsNotSelect = (text) => !text.includes('Select')

const validateFileSize = (file, maxSizeInBytes) => file.size <= maxSizeInBytes;
const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponentFive() {
    const [inputs, setInputs] = useState({
        'english-test-link': {value: APIFIVE.englishTestLink, valid: APIFIVE.englishTestLink==""?false:true},
        'english-test-score': {value: APIFIVE.englishTestScore, valid: APIFIVE.englishTestScore==""?false:true},
        'other-languages': {value: APIFIVE.otherLanguages, valid: APIFIVE.otherLanguages=="Select"?false:true},
        'personality-test': {value: APIFIVE.personalityTest, valid: APIFIVE.personalityTest==""?false:true}
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
        <InputComponent
            inputClass="message"
            inputId="english-test-link"
            inputLabel="Your EF SET English Test Score & Certification Link*"
            type="text"
            inputPlaceHolder="Enter your English test link"
            inputValue={APIFIVE.englishTestLink}
            message="No Special Characters Allowed"
            validator={validateNotEmpty}
            onChange={handleInputChange}
        />
        <div className='double-input'>
            <InputComponent
              inputClass=""
              inputId="english-test-score"
              inputLabel="Small Talk/or any verbal test score*"
              type="text"
              inputPlaceHolder="Enter your English test score"
              inputValue={APIFIVE.englishTestScore}
              message=""
              validator={validateNotEmpty}
              onChange={handleInputChange}
            />
            <SelectComponent
              selectClass="message"
              selectId="other-languages"
              selectLabel="Other language skills?*"
              selectName="other-languages"
              value={[
                <OptionComponent key={1} option='Select'/>,
                <OptionComponent key={2} option='Spanish'/>,
                <OptionComponent key={3} option='German'/>,
                <OptionComponent key={4} option='France'/>,
                <OptionComponent key={5} option='Portuguese'/>,
                <OptionComponent key={6} option='Italian'/>
              ]}
              selectValue={APIFIVE.otherLanguages}
              message=""
              validator={validateIsNotSelect}
              onChange={handleInputChange}
            />
          </div>
            <InputFileComponent
              inputClass="message"
              inputId="internet"
              inputLabel="Upload Internet Speed Screenshot*"
              inputValue=''
              message="Please go to Speedtest.net to complete this test. Here's an illustrative screenshot example"
            />
            <InputComponent
                inputClass=""
                inputId="personality-test"
                inputLabel="Personality test*"
                type="Text"
                inputPlaceHolder="Enter your personality test link"
                inputValue={APIFIVE.personalityTest}
                message=""
                validator={validateNotEmpty}
                onChange={handleInputChange}
            />
      <button className='medium-button primary-button' type="submit" disabled={!allValid}>Submit</button>
    </form>
  );
}

export {FormComponentFive};