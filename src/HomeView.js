import './HomeView.css'
import {useState} from 'react';
import {AsideComponent} from './AsideComponent';
import {ListComponent} from './ListComponent';
import {FormComponent} from './FormComponent';
import {FormComponentTwo} from './FormComponentTwo';
import {FormComponentThree} from './FormComponentThree';
import {FormComponentFour} from "./FormComponentFour";
import {FormComponentFive} from "./FormComponentFive"
import {AsideLinksComponents} from './AsideLinksComponent'

import {APIFORMSTATE} from './formStateAPI'


function HomeView(){
  const [visibleForm, setVisibleForm]=useState('form1')
  const [formStates, setFormStates] = useState(APIFORMSTATE);
  
  const handleFormComplete = (form) => {
    setFormStates((prev) => ({
      ...prev,
      [form]: 'completed'
    }));
    if(form=="form1"){
      setVisibleForm('form2');
    }
    else if(form=="form2"){
      setVisibleForm('form3');
    }
    else if(form=="form3"){
      setVisibleForm('form4');
    }
    else if(form=="form4"){
      setVisibleForm('form5');
    }
    else if(form=="form5"){
      setVisibleForm('form6');
    }
    
  };

  const renderFormComponent=()=>{
    if (visibleForm==='form1'){
      return (
        <FormComponent
          onSubmit={()=>handleFormComplete('form1')}
          show='show'
          formName='Ready to tell us more about you?'
        />
      )
    }
    else if (visibleForm === 'form2') {
      return (
          <FormComponentTwo
            onSubmit={()=>handleFormComplete('form2')}
            show='show'
            formName='Provide details about your current job!'
          />
      )
    }
    else if (visibleForm === 'form3') {
      return (
        <FormComponentThree
          onSubmit={()=>handleFormComplete('form3')}
          show='show'
          formName='Fill in the blanks about your educational journey!'
        />
      )
    }
    else if (visibleForm === 'form4') {
      return (
        <FormComponentFour
          onSubmit={()=>handleFormComplete('form4')}
          show='show'
          formName='Last call for any additional info! Feel free to drop us a line or two.'
        />
      )
    }
    else if (visibleForm === 'form5') {
      return (
        <FormComponentFive
          onSubmit={()=>handleFormComplete('form5')}
          show='show'
          formName='Fill in the blanks about your educational journey!'
        />
      )
    }
    return null;
  }

  return(
    <div className='main-div'>
      <AsideComponent
        title="Take the first step towards your dream remote job"
        list={
          <ListComponent
            listItems={[
              {step: 1, text: 'General Information', state: formStates.form1, form:'form1'},
              {step: 2, text: 'Current Work Status', state: formStates.form2, form:'form2'},
              {step: 3, text: 'Education and Work History', state: formStates.form3, form:'form3'},
              {step: 4, text: 'English Skills & Acknowledgment From Assesment', state: formStates.form4, form:'form4'},
              {step: 5, text: 'Final Questions', state: formStates.form5, form:'form5'},
              {step: 6, text: 'Disclaimer', state: formStates.form6, form:'form6'}
            ]}
            onItemClick={(form)=>setVisibleForm(form)}
          />
        }
        links={[<AsideLinksComponents/>]}
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
        {renderFormComponent()}
      </main>
    </div>
  )
}

export {HomeView}