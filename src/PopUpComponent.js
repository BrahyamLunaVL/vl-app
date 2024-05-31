import React, { useState } from 'react';
import './PopUpComponent.css';
import { InputComponent } from './InputComponent';

const validateNotEmpty = (text) => text.trim() !== '';
const validatePasswordComplexity = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length > 10 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};
const validatePasswordsMatch = (password, confirmPassword) => password === confirmPassword;

function PopUpComponent({icon, title, description, onSubmit }) {
    const [inputs, setInputs] = useState({
        oldPassword: { value: '', valid: false },
        newPassword: { value: '', valid: false },
        confirmPassword: { value: '', valid: false },
    });

    const handleInputChange = (id, value) => {
        setInputs(prev => {
        const newState = { ...prev, [id]: { ...prev[id], value } };
        newState[id].valid = validateInput(id, newState);
        if (id === 'newPassword' || id === 'confirmPassword') {
            newState.confirmPassword.valid = validatePasswordsMatch(newState.newPassword.value, newState.confirmPassword.value);
        }
        return newState;
        });
    };

    const validateInput = (id, state) => {
        switch (id) {
        case 'oldPassword':
            return validateNotEmpty(state.oldPassword.value);
        case 'newPassword':
            return validatePasswordComplexity(state.newPassword.value);
        case 'confirmPassword':
            return validatePasswordsMatch(state.newPassword.value, state.confirmPassword.value);
        default:
            return false;
        }
    };

    const allValid = Object.values(inputs).every(input => input.valid);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (allValid) {
        onSubmit({
            oldPassword: inputs.oldPassword.value,
            newPassword: inputs.newPassword.value,
        });
        }
    };

    return (
        <div className='popup-container'>
            <div className='pop-up-header'>
                <div className='icon-container'>
                    <i class={`fa-solid 1 ${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='popup-content'>
                <form onSubmit={handleSubmit}>
                        <InputComponent
                            inputClass="error"
                            inputId="old-password"
                            inputLabel="Current Password*"
                            type="password"
                            inputPlaceHolder="Years worked remotely"
                            inputValue=''
                            message="Password entered is not valid"
                            validator={validateNotEmpty}
                            onChange={handleInputChange}
                        />
                        <InputComponent
                            inputClass="error"
                            inputId="password"
                            inputLabel="New Password*"
                            type="password"
                            inputPlaceHolder="Enter your new password"
                            inputValue=''
                            message="Password is too short"
                            validator={validateNotEmpty}
                            onChange={handleInputChange}
                        />
                            <InputComponent
                            inputClass="error"
                            inputId="repeat-password"
                            inputLabel="Confirmation New Password*"
                            type="password"
                            inputPlaceHolder="Repeat your new Password*"
                            inputValue=''
                            message="Password are not similar."
                            validator={validateNotEmpty}
                            onChange={handleInputChange}
                        />
                        <button className='small-button primary-button' type='submit' disabled={!allValid}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export { PopUpComponent };