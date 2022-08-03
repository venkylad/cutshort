import React from 'react'

const Input = ({label, placeholder, value, onChange, name, type, url}) => {
  return (
    <><div className='input-div'>
            <label>{label}</label>
            <div className='input-wrap'>
               {url && <div className='url'>{url}</div>} <input placeholder={placeholder} value={value} onChange={(e) => onChange(e)} name={name} type={type} />
            </div>
          </div></>
  )
}

export default Input