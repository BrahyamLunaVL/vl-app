import './App.css';
import {AsideComponent} from './AsideComponent';
import {ListComponent} from './ListComponent';
import {FormComponent} from './FormComponent';
import {FormComponentTwo} from './FormComponentTwo';
import {FormComponentThree} from './FormComponentThree';
import {FormComponentFour} from "./FormComponentFour";
import {FormComponentFive} from "./FormComponentFive"

import {APIFORMSTATE} from './formStateAPI'

function App() {
  return (
    <div className='main-div'>
      <AsideComponent
        title="Take the first step towards your dream remote job"
        list={
          <ListComponent
            listItems={[
              {step: 1, text: 'General Information', state:APIFORMSTATE.form1},
              {step: 2, text: 'Current Work Status', state:APIFORMSTATE.form2},
              {step: 3, text: 'Education and Work History', state:APIFORMSTATE.form3},
              {step: 4, text: 'English Skills & Acknowledgment From Assesment', state:APIFORMSTATE.form4},
              {step: 5, text: 'Final Questions', state:APIFORMSTATE.form5},
              {step: 6, text: 'Disclaimer', state:APIFORMSTATE.form6}
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
        <FormComponentTwo/>
        <FormComponentThree/>
        <FormComponentFour/>
        <FormComponentFive/>
      </main>
    </div>
  );
}

export default App;