import React from 'react'
import "./../assets/css/Home.css"
import Bolly from "./../assets/images/Bolly.png";

const Footer = () => {
  return <>
  <div className='footer'>
    <div className='content'>
<span> © 2023 Copyright:</span>
<span className='bold'> sakshisjadhav.120@gmail.com</span>
</div>
<div className='footer-logo'>

<img  src={Bolly} alt="" />
</div>
  </div>
  </>
}

export default Footer