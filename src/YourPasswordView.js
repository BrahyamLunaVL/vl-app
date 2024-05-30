import './HomeView.css';
import logo from './logo.svg'
import {useState} from 'react';
import {AsideComponent} from'./AsideComponent'
import {InputComponent} from './InputComponent';

function YourPasswordView({changeView}){

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
    changeView('home');
  };

  const handleChangePassword = (event) => {
      changeView('forgot-password');
  };

  return(
    <div className='main-div'>
      <AsideComponent/>
      <main>
        <form className='login-form-container'>
          <img className='logo' src={logo} alt='Virtual Latinos Logo'/>
          <h2>This is your password</h2>
          <InputComponent
            inputClass="message"
            inputId="generated-password"
            inputLabel="Generated Password"
            type="text"
            inputPlaceHolder="This is your Generated password"
            inputValue='J48vmuw92xyy38YRC2'
            message="Please, enter your Email"
            validator={validateNotEmpty}
            onChange={handleInputChange}
          />
          <button className='medium-button primary-button' type="submit" onClick={handleSubmit}>Continue</button>
        </form>
      </main>
    </div>
  )
}

export {YourPasswordView}