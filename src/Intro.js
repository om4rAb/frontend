import React from 'react'
import "./css/introStyle.css"
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <div className='parent'>

          <div className='welc-container'> 
            <h2 className='Welcome'> Welcome to <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; VENOM  </h2>
          </div>
          
          <div className='text-container'>
              <p className='text'>Here you Can achieve your fitness goals with our personalized training and 
                  nutrition program focused on weight loss or muscle gain.
                  Choose between our <Link>standard</Link>  and <Link>premium</Link>  subscription packs 
                  for tailored support. 
              </p>  
          </div>
    
    
    </div>
  )
}
