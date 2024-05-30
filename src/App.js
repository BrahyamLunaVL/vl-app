import './App.css'
import {useState} from 'react';
import {LogInView} from './LogInView';
import {HomeView} from './HomeView';
import {ForgotPasswordView} from './ForgotPasswordView'
import {YourPasswordView} from './YourPasswordView'

function App(){
  const [view, setView] = useState('login');

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <>
        {view === 'login' ? (
          <LogInView changeView={changeView} />
        ) : view === 'forgot-password' ? (
          <ForgotPasswordView changeView={changeView} />
        ) : view === 'your-password' ? (
          <YourPasswordView changeView={changeView} />
        ) : (
          <HomeView  changeView={changeView}/>
        )}
    </>
  )
}

export default App;