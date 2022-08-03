import React, { useState } from 'react'
import Input from '../common/Input'

const Step1 = ({step, handleNextStep}) => {
    const [name,setName] = useState({
        fullname:"",
        displayname:""
    })
  return (
    <>
   {
    step === 1 && (
        <div className='step-1-container'>
        <h1>Welcome! First things first...</h1>
        <p>You can always can them later.</p>
        <form onSubmit={handleNextStep}>
          <Input label='Full Name' placeholder='Steve Jobs' type='text' value={name.fullname} onChange={(e) => setName({...name, fullname: e.target.value})} name='fullname' />
          <Input label='Display Name' placeholder='Steve' type='text' value={name.displayname} onChange={(e) => setName({...name, displayname: e.target.value})} name='displayname' />
          <button disabled={name.fullname === '' || name.displayname === ''} className={`button-next ${(name.fullname === '' || name.displayname === '') && "op-75"}`} type='submit'>Create Workspace</button>
        </form>
      </div>
    )
   }
    </>
  )
}

export default Step1