import React  from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import "./css/Home.css"
import Coaches from './Coaches'
import Packs from './Packs'
import UsersExp from './UsersExp'


export default function Home(props) {


  return (
    <div className='Home-container'>

        <div id='navbar-comp'>
          
            <Navbar  />

        </div>
        
        <div id='intro-comp'>
          
            <Intro />
          
        </div>

        
        <div id='coaches-comp'>
          
          <Coaches />
        
      </div>

  
      <div id='UserExp-comp'>
          
          <UsersExp />
        
      </div>

      <div id='packs-comp'>
          
          <Packs />
        
      </div>


    </div>
  )
}
