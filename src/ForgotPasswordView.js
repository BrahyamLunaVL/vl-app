import './HomeView.css';
import logo from './logo.svg'
import {useState} from 'react';
import {AsideComponent} from'./AsideComponent'
import {InputComponent} from './InputComponent';


function ForgotPasswordView({changeView}){
    const validateEmail = (text) => text.includes('@')
  const validateNotEmpty = (text) => text.trim().length > 0;

  const [inputs, setInputs] = useState({
    'name': {value: '', valid: false},
    'last-name': {value: '', valid: false},
    'email': {value: '', valid: false}
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
      changeView('your-password');
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    changeView('login');
  };

  return(
    <div className='main-div'>
      <AsideComponent/>
      <main>
        <form className='login-form-container'>
          <img className='logo' src={logo} alt='Virtual Latinos Logo'/>
          <h2>Reset Password</h2>
          <InputComponent
            inputClass="message"
            inputId="name"
            inputLabel="First name"
            type="text"
            inputPlaceHolder="Enter your First name"
            inputValue=''
            message="The First Name you entered when registering"
            validator={validateNotEmpty}
            onChange={handleInputChange}
          />
          <InputComponent
            inputClass="message"
            inputId="last-name"
            inputLabel="Last name"
            type="text"
            inputPlaceHolder="Enter your Password"
            inputValue=''
            message="The Last Name you entered when registering"
            validator={validateNotEmpty}
            onChange={handleInputChange}
          />
          <InputComponent
            inputClass="message"
            inputId="email"
            inputLabel="Email"
            type="email"
            inputPlaceHolder="Enter your Email"
            inputValue=''
            message="The Email Address you entered when registering"
            validator={validateEmail}
            onChange={handleInputChange}
          />
          <button className='medium-button primary-button' type="submit" disabled={!allValid} onClick={handleSubmit}>Create</button>
          <button className='text-button' type="submit" onClick={handleLogin}>I already have an account</button>
        </form>
      </main>
    </div>
  )
}

export {ForgotPasswordView}