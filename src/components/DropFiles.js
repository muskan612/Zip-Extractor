import React from 'react'
import Drive from './Drive'
import './DropFiles.css'

const DropFiles = () => {

  return (
    <div className='drop-area'>
      <div className="file-input" >
        <p className='text'>
          <b>Choose File</b>
          <p>from your computer</p>
        </p>
        <input type="file"/>
      </div>
      <Drive/>
      <i className='italic'>or drag and drop file here...</i>
    </div>
  )
}

export default DropFiles