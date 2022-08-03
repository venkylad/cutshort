import React, { useState } from 'react';
import Logo from './images/logo.svg';
import './App.css';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Steps from './components/steps/Steps';

const App = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handleStepBack = (num) => {
    if (num && num <= step) {
      setStep(num);
    }
  };

  return (
    <div className='container'>
      <div className='logo-div'>
        <img className='logo' src={Logo} alt='' />
        Eden
      </div>
      <Steps step={step} handleNextStep={handleStepBack} />
      <Step1 step={step} handleNextStep={handleNextStep} />
      <Step2 step={step} handleNextStep={handleNextStep} />
      <Step3 step={step} handleNextStep={handleNextStep} />
      <Step4 step={step} handleNextStep={handleNextStep} />
    </div>
  );
};

export default App;
