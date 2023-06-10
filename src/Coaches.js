import React from 'react'
import "./css/Coaches.css"
import { Link } from 'react-router-dom'
import CoachesArray from './CoachesArray'

export default function Coaches() {


  return (
    <div>
            <h2 className='trainers'>OUR TRAINERS</h2>

        <div className='big-container'>
        
     {   CoachesArray.map((c , index) => {
        return ( <div className='cards-container'>
                    <img className='trainer' src={c.pic} alt='Trainer'  />
                    <h3>{c.name}</h3>
                    <h3> {c.desc} </h3>
                    <div className='icons'>
                        <Link to={c.instaLink}><img src={require("./images/twitter.png")} alt='Twitter' /></Link> 
                        <img src={require("./images/facebook.png")} alt='FB' />
                        <img src={require("./images/Instagram.png")} alt='Instagram' />
                    </div>
                 </div>) }   )
}
        
        </div>
    </div>
  )
}
