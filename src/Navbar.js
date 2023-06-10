import React from "react"
import { Link } from "react-router-dom"
import "./css/NavbarStyle.css"


export default function Navbar(props) {


  

  return (
    <div>
        
        <header >

            <ul  className="right">
                <li><Link  >  Intro</Link></li>
                <li><Link  > Coaches</Link></li>
                <li><Link > Feedback</Link></li>
                <li style={{textDecoration:"underline white"}}><Link to="/FreeProgramme" > Free Programme</Link></li>
                <li><Link  >  Packages </Link></li>
                <li><Link style={{textDecoration:"underline white"}} to="/login" >  Login  </Link></li>
            </ul>



        </header>
    </div>
  )
}
