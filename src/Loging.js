import React, { useState } from "react";
import axios from "axios";
import "./css/LoginStyle.css"
import { Link, useNavigate } from "react-router-dom";



export default function LoginPage(){

        // useNavigate to pass the user to another page without refreshing it
    const navigate= useNavigate()

    const [err , setErr] = useState(false)
	const [state , setState] = useState({
		"email": "" ,
		"password":"",        
	})
    const [token , setToken] = React.useState("")

	const SaveData= (e) => { 
        const {name , value }= e.target
        
        setState((old) => { 
            return {...old , [name]:value}
         })
     }


 
	const login = async (e) => {
		e.preventDefault()
		try{
            let data= new FormData()
            data.append("method" , "login")
            data.append("email" , state.email)
            data.append("password" , state.password) 
            setErr(false)

    
            
                const res = await axios.post(`http://localhost:8000/api/login`, data)
                const d = res.data
                if(d.hasOwnProperty("access_token")){
                    localStorage.setItem("token" , d.access_token)

                    navigate("/payment")
                }
                else if(d.hasOwnProperty("msg"))
                {
                    setErr(true)
                }

                
               
        }catch(error){
            console.log(error)
        }
       
     }    	

    return(
        
            <div className="form-container">


                <form className="login-form login-right" onSubmit={login}>
                    <h2>Login</h2>
                    <label>Email :</label>
                    <input className="inp" type='text' value={state.email} name='email' placeholder="Enter email" onChange={e=>SaveData(e)}/>
                    
                    <label>Password :</label>
                    <input className="inp" type='text' value={state.password} placeholder="Enter password" name='password'onChange={e=>SaveData(e)}/>

                    <input className="btn" type={'submit'} value={"submit"} />
                    {    err===true   &&     <p className="error"> Enter valid log in </p>}

                    <p>Don't have an account ? <Link to="/register">Register</Link>  </p>

                    <Link className="backBTn" to="/home">&larr;</Link>

                </form>

                <div className="login-left">
                    
                    <img src={require("./images/venom.png")} alt="logo" style={{width:"200px", height:"200px" , borderRadius:"50px"}} />
                </div>


            </div>
        
    )
}
