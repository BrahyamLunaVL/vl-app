import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <InputComponent
      inputClass=""
      inputId="name"
      inputLabel="Name"
      type="text"
      inputPlaceHolder="Enter your name"
      message=""
    />
      <InputComponent
      inputClass="error"
      inputId="password"
      inputLabel="Password"
      type="password"
      inputPlaceHolder="Enter your password"
      message="The password you entered is incorrect"
    />
    <InputComponent
      inputClass="good"
      inputId="email"
      inputLabel="Email"
      type="email"
      inputPlaceHolder="Enter your email"
      message="Email is available"
    />
    </main>
  );
}

function InputComponent({inputClass, inputId, inputLabel, type, inputPlaceHolder, message}){
  return(
    <div id='input-container' className={inputClass}> 
      <label className='form-label' for={inputId}>{inputLabel}</label>
      <input className='form-input' type={type} placeholder={inputPlaceHolder} id={inputId}/>
      <div>
        <i class='fa-solid fa-triangle-exclamation alert'></i>
        <i class="fa-solid fa-check check"></i>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
