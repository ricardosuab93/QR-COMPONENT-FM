import React from 'react'
import QR from '../Images/qr-code.png'
import './QrComponent.css'

const QrComponent = () => {
  return (
    <div className='qrContainer'>

      <img src={QR} alt="imageqr" />
      <div className='textContainer'>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
      <li>
        <a href="https://github.com/ricardosuab93/QR-COMPONENT-FM"> Visit this solution </a>
      </li>
    </div>
  )
}

export default QrComponent
