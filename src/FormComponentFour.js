import React, { useState } from 'react';
import {TextAreaComponent} from "./TextAreaComponent";

import {APIFOUR} from "./formFourAPI"

const validateNotEmpty = (text) => text.trim().length > 10;

function FormComponentFour() {
  const [inputs, setInputs] = useState({
    'your-skills': { value: APIFOUR.yourSkills, valid:  APIFOUR.yourSkills==""||APIFOUR.yourSkills.length<10?false:true},
    'your-projects': { value: APIFOUR.yourProjects, valid:  APIFOUR.yourProjects==""||APIFOUR.yourProjects.length<10?false:true},
    'your-goals': { value: APIFOUR.yourGoals, valid:  APIFOUR.yourGoals==""||APIFOUR.yourGoals.length<10?false:true},
    'more-details': { value: APIFOUR.moreDetails, valid:  APIFOUR.moreDetails==""||APIFOUR.moreDetails.length<10?false:true},
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
        inputId="your-skills"
        inputLabel="What are your top 3 skills? and why?*"
        inputPlaceHolder="Tell us about your skills"
        inputValue={APIFOUR.yourSkills}
        message="Minimum 100 characters"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <TextAreaComponent
        inputClass="message"
        inputId="your-projects"
        inputLabel=" What awesome project have you done or worked on that you're the proudest of?*"
        inputPlaceHolder="Tell us about your projects"
        inputValue={APIFOUR.yourProjects}
        message="Minimum 100 characters"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <TextAreaComponent
        inputClass="message"
        inputId="your-goals"
        inputLabel="What are your professional short term goals (1-2 years) and your long terms goals (2-5 years)?*"
        inputPlaceHolder="Tell us about your goals"
        inputValue={APIFOUR.yourGoals}
        message="Minimum 100 characters"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <TextAreaComponent
        inputClass="message"
        inputId="more-details"
        inputLabel="Is there anything else you would like us to know, that is not covered in the previous questions?*"
        inputPlaceHolder="Tell us more about you"
        inputValue={APIFOUR.moreDetails}
        message="Minimum 100 characters"
        validator={validateNotEmpty}
        onChange={handleInputChange}
      />
      <button className='medium-button primary-button' type="submit" disabled={!allValid}>Submit</button>
    </form>
  );
}

export {FormComponentFour};