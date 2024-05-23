import logo from './logo.svg';
import asideBackground from "./aside-background.png";
import './App.css';
import {InputComponent} from "./InputComponent";
import {SelectComponent} from './SelectComponent';
import {CheckboxComponent} from './CheckboxComponent';
import {OptionComponent} from './OptionComponent';
import {InputFileComponent} from './InputFileComponent';
import {ButtonComponent} from './ButtonComponent';

function App() {
  return (
    <div className='main-div'>
      <aside>
        <img src={asideBackground} alt=''/>
      </aside>
      <main>
        <h2>Ready to tell us about you?</h2>
        <form>
          <InputComponent
            inputClass="message"
            inputId="full-legal-name"
            inputLabel="Full legal name"
            type="text"
            inputPlaceHolder="Full legal name"
            message="No Special Characters Allowed"
          />
          <InputComponent
            inputClass="error"
            inputId="cell-phone-number*"
            inputLabel="Cell Phone Number"
            type="text"
            inputPlaceHolder="+1 5555555555"
            message="Doesm't look like a valid cell phone number"
          />
          <div className='double-input'>
            <SelectComponent
              selectClass=""
              selectId="country"
              selectLabel="Country you live in*"
              selectName="country"
              value={[
                <OptionComponent option='Select'/>,
                <OptionComponent option='Argentina'/>,
                <OptionComponent option='Chile'/>,
                <OptionComponent option='Colombia'/>,
                <OptionComponent option='Ecuador'/>,
                <OptionComponent option='Guatemala'/>,
                <OptionComponent option='Honduras'/>,
                <OptionComponent option='Mexico'/>,
                <OptionComponent option='Nicaragua'/>,
                <OptionComponent option='Paraguay'/>,
                <OptionComponent option='Peru'/>,
                <OptionComponent option='Uruguay'/>,
                <OptionComponent option='Venezuela'/>
              ]}
              message=""
            />
            <InputComponent
              inputClass=""
              inputId="city"
              inputLabel="City you live in*"
              type="text"
              inputPlaceHolder="Enter the city you live in"
              message=""
            />
          </div>
          <CheckboxComponent/>
          <SelectComponent
            selectClass=""
            selectId="migrant"
            selectLabel="Are you Migrating to legally study or live in the US in the next 1-2 years?*"
            selectName="migrant"
            value={[
              <OptionComponent option='Select'/>,
              <OptionComponent option='Yes'/>,
              <OptionComponent option='No'/>
            ]}
            message=""
          />
          <div className='double-input'>
            <InputComponent
              inputClass=""
              inputId="birth"
              inputLabel="Birth"
              type="date"
              inputPlaceHolder="MM/DD/YYYY"
              message=""
            />
            <SelectComponent
              selectClass=""
              selectId="gender"
              selectLabel="Gender"
              selectName="gender"
              value={[
                <OptionComponent option='Select'/>,
                <OptionComponent option='Male'/>,
                <OptionComponent option='Female'/>
              ]}
              message=""
            />
          </div>
          <SelectComponent
            selectClass=""
            selectId="where-did-you-hear"
            selectLabel="Where did you hear about Virtual Latinos?"
            selectName="where-did-you-hear"
            value={[
              <OptionComponent option='Select'/>,
              <OptionComponent option='A friend'/>,
              <OptionComponent option='Instagram'/>,
              <OptionComponent option='LinkedIn'/>
            ]}
            message=""
          />
          <SelectComponent
            selectClass=""
            selectId="work-place"
            selectLabel="From where do you plan to work as a virtual Assistant most of the time?"
            selectName="work-place"
            value={[
              <OptionComponent option='Select'/>,
              <OptionComponent option='House'/>,
              <OptionComponent option='Office'/>
            ]}
            message=""
          />
          <InputComponent
            inputClass="message"
            inputId="internet"
            inputLabel="Upload Internet Speed Screenshot*"
            type="file"
            inputPlaceHolder=""
            message="Please go to Speedtest.net to complete this test. Here's an illustrative screenshot example"
          />
          <InputFileComponent/>
          <div className='double-input'>
            <InputComponent
              inputClass=""
              inputId="download-internet"
              inputLabel="Download Internet Speed"
              type="Text"
              inputPlaceHolder="E.g. 13.95 Mbps"
              message="You've selected Colombia"
            />
            <InputComponent
              inputClass=""
              inputId="upload-internet"
              inputLabel="Upload Internet Speed"
              type="Text"
              inputPlaceHolder="E.g. 21.27 Mbps"
              message=""
            />
          </div>
          <ButtonComponent
              buttonText="Submit"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
