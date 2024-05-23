import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {CheckboxComponent} from './CheckboxComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';
import {ButtonComponent} from './ButtonComponent';
import {ListItemComponent} from './ListItemComponent';

const validateSpacialCharacters = (text) => !text.includes('ñ')
const validatePhoneNumber = (text) => text.includes('+')
const validateLength = (text) => text.length > 6;

const validateDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
};
const validateFileSize = (file, maxSizeInBytes) => file.size <= maxSizeInBytes;
const validateFileType = (file, allowedTypes) => allowedTypes.includes(file.type);

const validatePointSymbol= (text) => text.includes('.')
const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponent() {
    const [inputs, setInputs] = useState({
        'full-legal-name': { value: '', valid: false },
        'cell-phone-number': { value: '', valid: false },
        'city': { value: '', valid: false },
        'birth': { value: '', valid: false },
        'download-internet': { value: '', valid: false },
        'upload-internet': { value: '', valid: false },
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
            inputId="full-legal-name"
            inputLabel="Full legal name"
            type="text"
            inputPlaceHolder="Full legal name"
            message="No Special Characters Allowed"
            validator={validateSpacialCharacters}
            onChange={handleInputChange}
        />
        <InputComponent
            inputClass="error"
            inputId="cell-phone-number"
            inputLabel="Cell Phone Number*"
            type="text"
            inputPlaceHolder="+1 5555555555"
            message="Doesm't look like a valid cell phone number"
            validator={validatePhoneNumber}
            onChange={handleInputChange}
        />
        <div className='double-input'>
            <SelectComponent
              selectClass=""
              selectId="country"
              selectLabel="Country you live in*"
              selectName="country"
              value={[
                <OptionComponent key={1} option='Select'/>,
                <OptionComponent key={2} option='Argentina'/>,
                <OptionComponent key={3} option='Chile'/>,
                <OptionComponent key={4} option='Colombia'/>,
                <OptionComponent key={5} option='Ecuador'/>,
                <OptionComponent key={6} option='Guatemala'/>,
                <OptionComponent key={7} option='Honduras'/>,
                <OptionComponent key={8} option='Mexico'/>,
                <OptionComponent key={9} option='Nicaragua'/>,
                <OptionComponent key={10} option='Paraguay'/>,
                <OptionComponent key={11} option='Peru'/>,
                <OptionComponent key={12} option='Uruguay'/>,
                <OptionComponent key={13} option='Venezuela'/>
              ]}
              message=""
            />
            <InputComponent
                inputClass=""
                inputId="city"
                inputLabel="City you live in*"
                type="text"
                inputPlaceHolder="Enter the city you live in"
                message=""
                validator={validateLength}
                onChange={handleInputChange}
            />
          </div>
          <CheckboxComponent/>
          <SelectComponent
            selectClass=""
            selectId="migrant"
            selectLabel="Are you Migrating to legally study or live in the US in the next 1-2 years?*"
            selectName="migrant"
            value={[
                <OptionComponent key={14} option='Select'/>,
                <OptionComponent key={15} option='Yes'/>,
                <OptionComponent key={16} option='No'/>
            ]}
            message=""
          />
          <div className='double-input'>
            <InputComponent
                inputClass=""
                inputId="birth"
                inputLabel="Birth"
                type="date"
                inputPlaceHolder="MM/DD/YYYY"
                message=""
                validator={validateNotEmpty}
                onChange={handleInputChange}
            />
            <SelectComponent
                selectClass=""
                selectId="gender"
                selectLabel="Gender"
                selectName="gender"
                value={[
                    <OptionComponent key={17} option='Select'/>,
                    <OptionComponent key={18} option='Male'/>,
                    <OptionComponent key={19} option='Female'/>
                ]}
                message=""
            />
            </div>
            <SelectComponent
                selectClass=""
                selectId="where-did-you-hear"
                selectLabel="Where did you hear about Virtual Latinos?"
                selectName="where-did-you-hear"
                value={[
                    <OptionComponent key={20} option='Select'/>,
                    <OptionComponent key={21} option='A friend'/>,
                    <OptionComponent key={22} option='Instagram'/>,
                    <OptionComponent key={23} option='LinkedIn'/>
                ]}
                message=""
            />
            <SelectComponent
                selectClass=""
                selectId="work-place"
                selectLabel="From where do you plan to work as a virtual Assistant most of the time?"
                selectName="work-place"
                value={[
                    <OptionComponent key={24} option='Select'/>,
                    <OptionComponent key={25} option='House'/>,
                    <OptionComponent key={26} option='Office'/>
                ]}
                message=""
            />
            <InputComponent
                inputClass="message"
                inputId="internet"
                inputLabel="Upload Internet Speed Screenshot*"
                type="file"
                inputPlaceHolder=""
                message="Please go to Speedtest.net to complete this test. Here's an illustrative screenshot example"
            />
            <InputFileComponent/>
          <div className='double-input'>
            <InputComponent
                inputClass=""
                inputId="download-internet"
                inputLabel="Download Internet Speed"
                type="Text"
                inputPlaceHolder="E.g. 13.95 Mbps"
                message="You've selected Colombia"
                validator={validatePointSymbol}
                onChange={handleInputChange}
            />
            <InputComponent
                inputClass=""
                inputId="upload-internet"
                inputLabel="Upload Internet Speed"
                type="Text"
                inputPlaceHolder="E.g. 21.27 Mbps"
                message=""
                validator={validatePointSymbol}
                onChange={handleInputChange}
            />
          </div>
      <button className='medium-button primary-button' type="submit" disabled={!allValid}>Submit</button>
    </form>
  );
}

export {FormComponent};


/*
<form>

        </form> 
*/