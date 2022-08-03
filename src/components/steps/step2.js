import React, { useState } from 'react'
import Input from '../common/Input'

const Step2 = ({step, handleNextStep}) => {
  const [details,setDetails] = useState({
        workspace:"",
        url:""
    })
  return (
    <>{
      step===2 && (
 <div className='step-1-container'>
        <h1>Let's setup a home for all your work.</h1>
        <p>You can always create another workspace.</p>
        <form onSubmit={handleNextStep}>
          <Input label='Wrokspace Name' placeholder='Eden' type='text' value={details.workspace} onChange={(e) => setDetails({...details, workspace: e.target.value})} name='company' />
          <Input label='Wrokspace URL (optional)' placeholder='Example' forUrl url='www.example.com/' type='text' value={details.url} onChange={(e) => setDetails({...details, url: e.target.value})} name='url' />
          <button disabled={details.workspace === '' || details.url === ''} className={`button-next ${(details.workspace === '' || details.url === '') && "op-75"}`} type='submit'>Create Workspace</button>
        </form>
      </div>
      )
    }
   
    </>
  )
}

export default Step2