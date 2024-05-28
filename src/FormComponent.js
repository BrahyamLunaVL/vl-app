import React, { useState } from 'react';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {CheckboxComponent} from './CheckboxComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';

import {APIONE} from './formOneAPI'

const validateSpacialCharacters = (text) => !text.includes('ñ')
const validatePhoneNumber = (text) => text.includes('+')
const validateLength = (text) => text.length > 6;
const validateIsNotSelect = (text) => !text.includes('Select')
const validatePointSymbol= (text) => text.includes('.')
const validateNotEmpty = (text) => text.trim().length > 0;

function FormComponent() {
    const [inputs, setInputs] = useState({
        'full-legal-name': {value: APIONE.fullLegalName, valid: APIONE.fullLegalName==""?false:true},
        'cell-phone-number': {value: APIONE.cellPhoneNumber, valid: APIONE.cellPhoneNumber==""?false:true},
        'country': {value: APIONE.country, valid: APIONE.country=="Select"?false:true},
        'city': {value: APIONE.city, valid: APIONE.city==""?false:true},
        'migrant': {value: APIONE.migrant, valid: APIONE.migrant=="Select"?false:true},
        'gender': {value: APIONE.gender, valid: APIONE.gender=="Select"?false:true},
        'birth': {value: APIONE.birth, valid: APIONE.birth==""?false:true},
        'where-did-you-hear': {value: APIONE.whereDidYouHear, valid: APIONE.whereDidYouHear=="Select"?false:true},
        'download-internet': {value: APIONE.downloadInternet, valid: APIONE.downloadInternet==""?false:true},
        'upload-internet': {value: APIONE.uploadInternet, valid: APIONE.uploadInternet==""?false:true},
        'work-place': {value: APIONE.workPlace, valid: APIONE.workPlace=="Select"?false:true}
    });
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleInputChange = (id, value, valid) => {
        setInputs(prev => ({
          ...prev,
          [id]: { value, valid }
        }));
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!selectedFile) {
        alert('Please select a file first!');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData
        });
  
        if (response.ok) {
          setMessage('File uploaded successfully');
        } else {
          setMessage('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setMessage('Error uploading file');
      }
    }

  const allValid = Object.values(inputs).every(input => input.valid);

  return (
    <form onSubmit={handleSubmit}>
        <InputComponent
            inputClass="message"
            inputId="full-legal-name"
            inputLabel="Full legal name"
            type="text"
            inputPlaceHolder="Full legal name"
            inputValue={APIONE.fullLegalName}
            message="No Special Characters Allowed"
            validator={validateSpacialCharacters}
            onChange={handleInputChange}
        />
        <InputComponent
            inputClass="error"
            inputId="cell-phone-number"
            inputLabel="Cell Phone Number*"
            type="text"
            inputPlaceHolder='+57 777 777 7777'
            inputValue={APIONE.cellPhoneNumber}
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
              selectValue={APIONE.country}
              message=""
              validator={validateIsNotSelect}
              onChange={handleInputChange}
            />
            <InputComponent
                inputClass=""
                inputId="city"
                inputLabel="City you live in*"
                type="text"
                inputPlaceHolder="Enter the city you live in"
                inputValue={APIONE.city}
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
            selectValue={APIONE.migrant}
            message=""
            validator={validateIsNotSelect}
            onChange={handleInputChange}
          />
          <div className='double-input'>
            <InputComponent
                inputClass=""
                inputId="birth"
                inputLabel="Birth"
                type="date"
                inputPlaceHolder="MM/DD/YYYY"
                inputValue={APIONE.birth}
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
                selectValue={APIONE.gender}
                message=""
                validator={validateIsNotSelect}
                onChange={handleInputChange}
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
              selectValue={APIONE.whereDidYouHear}
              message=""
              validator={validateIsNotSelect}
              onChange={handleInputChange}
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
              selectValue={APIONE.workPlace}
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
      {selectedFile && (
        <div className="file-list">
          <div className='file'>
            <div className='file-description'>
              <div className='file-details'>
                <i className="fa-regular fa-file"></i>
                <div className='file-properties'>
                  <p>{selectedFile.name}</p>
                  <p>{(selectedFile.size / 1024).toFixed(2)} kb</p>
                </div>
              </div>
              <i className="fa-regular fa-trash-can" onClick={() => setSelectedFile(null)}></i>
            </div>
            <div className='file-progress'>
              <progress id="file" max="100" value="100">100%</progress>
              <p>100%</p>
            </div>
          </div>
        </div>)}
          <div className='double-input'>
            <InputComponent
                inputClass=""
                inputId="download-internet"
                inputLabel="Download Internet Speed"
                type="Text"
                inputPlaceHolder="E.g. 13.95 Mbps"
                inputValue={APIONE.downloadInternet}
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
                inputValue={APIONE.uploadInternet}
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