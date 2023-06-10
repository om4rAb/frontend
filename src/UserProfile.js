import React, { useEffect, useState } from 'react'
import './css/UserProfileStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function UserProfile() {





    const [Programmes , setProgrammes] = useState([])
    const [user , setUser] = useState({})

// FETCH USER INFOS
    async function fetchUser() {
        let data= new FormData()
        data.append("method" , "login")
        data.append("token" , localStorage.getItem("token") )
      //  let res = await axios.post("http://localhost:8000/api/profile" , data);
      //  console.log(res)
     }

// FETCH USER PACK Programmes
    async function fetchprog() {
        let data= new FormData()
        data.append("method" , "login")
        data.append("token" , localStorage.getItem("token") )
        data.append("nompack" , localStorage.getItem("nomPack") )


      //  let res = await axios.post("http://localhost:8000/api/programmes" , data);
      //  console.log(res)
     }

    const logout= async ()=>{
      let data= new FormData()
      data.append("method" , "logout")
      data.append("token" , localStorage.getItem("token") )
      let res = await axios.post("http://localhost:8000/api/logout" , data);
      console.log(res)


    }

         useEffect( () =>{ 
            fetchUser();
            fetchprog()	} , [])
   












  return (
    <div className="profcontainer">
    <h2 className='title'>Venom</h2>
    <div className="program">
      <h3 className='h2profile'>Your Profile</h3>
      <h4 className='info'>Nom: Hadana</h4>
      <h4 className='info'>Prenom: abrom</h4>
      <h4 className='info'>Age: 25</h4>
      <h4 className='info'>Poids: 45</h4>
      <h4 className='info'>Choix: perte de la graisse</h4>
      
    </div>
    
    <div className="program">
      <h3  className='h2exrecise'>Full Body Workout Seance 1 </h3>
      
      <div   className='program'>
      <h3 className='h3'>Exercises:</h3>
      <ul className='tskrepas'>
        <h4>Squats :  4 Serie ------ 3 Repetition</h4>
        <h4>Push-ups : 3 Serie ------ 2 Repetition</h4>
        <h4>Walking Lunges : 5 Serie ------ 4 Repetition</h4>
      </ul>
      </div>
      <div  className='program'>
      <h3 className='h3'>Repas:</h3>
      <ul  className='tskrepas'>
        <h4>Repas 1 : ------</h4>
        <h4>Repas 2 : -------</h4>
        <h4>Repas 3 :---------</h4>
      </ul>
      </div>

      
      
     
      
    </div>
    
    <Link onClick={() => {
      logout()
    }
    } to="/home" >LOG OUT</Link>
   
  </div>

  )
}
