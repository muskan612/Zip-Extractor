import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h5>Supported formats:</h5>
      <p>7z, zipx, rar, tar, exe, dmg, iso, zip, msi, nrg, gz, cab, bz2, wim, ace</p>
      <h5>Supports password-protected archives</h5>
      <h5>Can unpack multi-part archives (zip.001, rar.part1, z01, etc)</h5>
    </div>
  )
}

export default Footer