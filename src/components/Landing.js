import React from 'react'
import { Link } from 'react-router-dom'

export const Landing=() =>{
  return (
    <div className='landing'>
      <div className='landing-head'>
    <div className='fitZing-landing'>Fit<span className='zing'>Zing</span></div>
    <div className='slogan'>we are what we eat :)</div>
    </div>
    <div className='landing-links'>
    <Link to='/login' className='landing-login-btn'>Login</Link><br></br>
    <Link to='/signup' className='landing-signup'>New to Fitzing? Signup &gt;</Link>
    </div>
    <div className='land-images'>
    <div className='landing-images'>
      <img src='images/Ellipse 7.png'></img>
        <img src='images/Ellipse 6.png'></img>
      <img src='images/Ellipse 5.png'></img>
    </div>
    <div className='landing-images'>
      <img src='images/Ellipse 2.png'></img>
        <img src='images/Ellipse 3.png'></img>
      <img src='images/Ellipse 4.png'></img>
    </div>
    </div>
    </div>
  )
}
