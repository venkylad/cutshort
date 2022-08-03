import React from 'react';

const Steps = ({ step, handleNextStep }) => {
  const progress = ['20%', '50%', '80%', '100%'];

  return (
    <div className='steps-container'>
      <div className='line' />
      <div className='progress-line' style={{ width: progress[step - 1] }} />
      <div className='step-active' onClick={() => handleNextStep(1)}>
        1
      </div>
      <div
        className={step > 1 ? 'step-active' : 'step'}
        onClick={() => handleNextStep(2)}
      >
        2
      </div>
      <div
        className={step > 2 ? 'step-active' : 'step'}
        onClick={() => handleNextStep(3)}
      >
        3
      </div>
      <div
        className={step > 3 ? 'step-active' : 'step'}
        onClick={() => handleNextStep(4)}
      >
        4
      </div>
    </div>
  );
};

export default Steps;
