import React, { useState } from 'react'
import UserIcon from '../../images/userIcon'
import UsersIcon from '../../images/usersIcon'

const Step3 = ({step, handleNextStep}) => {

    const [active, setActive] = useState(null)

    const handleActiveCard = (id) => setActive(id)

  return (
    <>{
        step === 3 && (
<div className='step-1-container'>
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
        <div className='option-wrap'>
            <div className='option-div'>
            <div className={active === 'user' ? 'option-active' : 'option'} onClick={() => handleActiveCard('user')}>
                <div className='icon'>
                    <UserIcon active={active === 'user'} />
                </div>
                <div>
                    <h4>For myself</h4>
                    <p>Write better think more clearly and stay organized</p>
                </div>
            </div>
           <div className={active === 'users' ? 'option-active' : 'option'} onClick={() => handleActiveCard('users')}>
               <div className='icon'>
                    <UsersIcon active={active === 'users'} />
                </div>
                <div>
                    <h4>For myself</h4>
                    <p>Write better think more clearly and stay organized</p>
                </div>
            </div>
        </div>
         <button disabled={active === null} onClick={handleNextStep} className={`button-next ${active === null && 'op-75'}`} type='submit'>Create Workspace</button>
        </div>
        
      </div>
        )
    }
    
    </>
  )
}

export default Step3