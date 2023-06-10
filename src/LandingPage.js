import React from 'react'
import im from "./images/venom.png"
import "./css/LandingPageStyle.css"
import { Link } from 'react-router-dom'




export default function LandingPage() {
  return (
    <div id='bac'>

      <div className='container1'> 
          <div className='top'>
              <h2 style={{display:"inline"}}>VENOM</h2>
              <img src={im} alt='Logo' style={{width:"50px", height:"50px" , borderRadius:"50px"}} />
          </div>
      </div>


        <div className='center-Of-Page'>

          <div className='title-container'>
              <h3 className='title'>Become fitter ,<br/>Stronger & more <br/> confident</h3>
          </div>

          <div className='para-container'>            
                <p className='par'>
                Welcome to our gym project website! 
                We are passionate about fitness and wellness,
                and we believe that everyone should have access to the resources 
                and support they need to achieve their health goals. Whether you're
                  a seasoned athlete or a beginner just starting out on your fitness journey,
                  we are here to help you succeed.
                </p>
          </div>

          <div className='btn-container'>
              <Link to="/home" className='btn' >GET STARTED</Link>  
          </div>
        </div>
      
    </div>
  )
}
