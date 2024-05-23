import logo from './logo.svg';
import './App.css';
import {AsideComponent} from './AsideComponent';
import {ListComponent} from './ListComponent';
import {FormComponent} from './FormComponent';

function App() {
  return (
    <div className='main-div'>
      <AsideComponent
        title="Take the first step towards your dream remote job"
        list={
          <ListComponent
            listItems={[
              {step: 1, text: 'General Information', state: 'active'},
              {step: 2, text: 'Current Work Status', state: 'inactive'},
              {step: 3, text: 'Education and Work History', state: 'inactive'},
              {step: 4, text: 'English Skills & Acknowledgment From Assesment', state: 'inactive'},
              {step: 5, text: 'Final Questions', state: 'inactive'},
              {step: 6, text: 'Disclaimer', state: 'inactive'}
            ]}
          />
        }
      />
      <main>
        <nav className='main-nav'>
          <a href='' className='white-button small-button'>
            <i className="fa-solid fa-lock"></i>
            <span>Change Password</span>
          </a>
          <a href='' className='primary-button small-button'>
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Log out</span>
          </a>
        </nav>
        <h2>Ready to tell us about you?</h2>
        <FormComponent/>
      </main>
    </div>
  );
}

export default App;