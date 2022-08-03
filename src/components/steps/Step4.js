import React from 'react'
import Tick from '../../images/tick.svg'

const Step4 = ({step}) => {
  return (
    <>
    {
        step === 4 &&  <div className='step-1-container text-center'>
            <div className='tick'>
                <img src={Tick} alt="" />
            </div>
        <h1>Congratulations, Eden!</h1>
        <p>You have completed onboarding, you can start using Eden.</p>
       
         <button onClick={() => alert('You have completed onboarding')} className='button-next mt-40' type='submit'>Launch Eden</button>
        
        
      </div>
    }
    
    </>
  )
}

export default Step4