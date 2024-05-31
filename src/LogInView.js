import './HomeView.css';
import logo from './logo.svg'
import {useState} from 'react';
import {AsideComponent} from'./AsideComponent'
import {InputComponent} from './InputComponent';

function LogInView({changeView}){

  const validateEmail = (text) => text.includes('@')
  const validateNotEmpty = (text) => text.trim().length > 0;

  const [inputs, setInputs] = useState({
    'email': {value: '', valid: false},
    'password': {value: '', valid: false},
  });


  const handleInputChange = (id, value, valid) => {
    setInputs(prev => ({
      ...prev,
      [id]: { value, valid }
    }));
  };
  const allValid = Object.values(inputs).every(input => input.valid);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (allValid) {
      changeView('home');
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleChangePassword = (event) => {
      changeView('forgot-password');
  };

  return(
    <div className='main-div'>
      <AsideComponent/>
      <main>
        <div className='login-form-container'>
          <img className='logo' src={logo} alt='Virtual Latinos Logo'/>
          <h2 className='title'>Welcome Back to Virtual Latinos 👋</h2>
          <p className='view-description'>Ready to Dive Back In? Enter Your Credentials Below</p>
          <InputComponent
            inputClass="error"
            inputId="email"
            inputLabel="Email"
            type="email"
            inputPlaceHolder="Enter your Email"
            inputValue=''
            message="Please, enter your Email"
            validator={validateEmail}
            onChange={handleInputChange}
          />
          <div className='password-container'>
            <InputComponent
              inputClass="error"
              inputId="password"
              inputLabel="Password"
              type="password"
              inputPlaceHolder="Enter your Password"
              inputValue=''
              message="Please, enter your Password"
              validator={validateNotEmpty}
              onChange={handleInputChange}
            />
            <button className='input-link-button text-button' type="submit" onClick={handleChangePassword}>Forgot password?</button>
          </div>
          <button className='medium-button primary-button' type="submit" disabled={!allValid} onClick={handleSubmit}>Submit</button>
        </div>
      </main>
    </div>
  )
}

export {LogInView}