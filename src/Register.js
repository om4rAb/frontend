
import React, { useState } from 'react';
import "./css/register.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function Register() {
  

  const navigate = useNavigate()
const [ user, setUser]=useState({
  "nomCl":"",
  "prenomCl":"",
  "ageCl":"",
  "poidsCl":"",
  "email":"",
  "password":"",
});


const savedata=(e)=>{
  const {name , value }= e.target
        
  setUser((old) => { 
      return {...old , [name]:value}
   })
}

const sendData = async(x)=>{
    const res = await axios.post('http://localhost:8000/api/register',x)
  console.log(res.data)
}
  const register =(e) => {
      e.preventDefault();
      var data=new FormData();
    
      data.append('method','register')
      data.append("nomCl",user.nomCl)
      data.append("nomCl",user.ageCl)
      data.append("nomCl",user.prenomCl)
      data.append("nomCl",user.poidsCl)
      data.append("email",user.email)
      data.append("password",user.password)

      sendData(data)
      navigate("/login")
    
    
  }
  return (
 <div className='register-container' >
     <form className="register-form" onSubmit={(e) => {register(e)}} >
     <p> Register </p>
       <label htmlFor="nom">Nom:</label>
       <input
         type="text"
         id="nom"
         name='nomCl'
         value={user.nom}
         onChange={(e) => savedata(e)}
         required
       />
  
       <label htmlFor="prenom">Prénom:</label>
       <input
         type="text"
         name='prenomCl'
         id="prenom"
         value={user.prenom}
         onChange={(e) => savedata(e)}
         required
       />
  
       <label htmlFor="age">Age:</label>
       <input
         type="number"
         id="age"
         name='ageCl'
         value={user.age}
         onChange={(e) => savedata(e)}
         required
       />
  
       <label htmlFor="poids">Poids:</label>
       <input
         type="number"
         id="poids"
         name='poidsCl'
         value={user.poids}
         onChange={(e) => savedata(e)}
         required
       />
  
       <label htmlFor="email">Email:</label>
       <input
         type="email"
         id="email"
         name='email'
         value={user.email}
         onChange={(e) => savedata(e)}
         required
       />
  
       <label htmlFor="password">Password:</label>
       <input
         type="password"
         id="password"
         value={user.password}
         name='password'
         onChange={(e) => savedata(e)}
         required
       />
  
       <button type="submit">Register</button>
     </form>
     <Link className="backBTn" to="/login">&larr;</Link>

 </div>
  );
};


