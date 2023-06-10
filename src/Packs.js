import React, { useEffect, useState } from 'react'
import "./css/packStyle.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Packs() {

      const [packs , setPacks] = useState([])

 async function fetchData() {
    let res = await axios.get("http://localhost:8000/api/packs");
	const packages = res.data.packs
	setPacks([...packs , ...packages])
	// console.log(packages)	
  }

      useEffect( () =>{ fetchData()		} , [])



  return (
    <div> 
		            <h2 className='OUR-PACKAGES'>OUR PACKAGES</h2>

<div className='packs-container'>
	
					{/* firstp pack */}
		{
			packs.length>0 &&
			packs.map((p, index)=>{
				return (<div key={index} className='pack'>
					<h3 className='packName'>#{p.nomPack} <br/> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; pack</h3>
					<h2>{p.prixPack} <span> DHS/{p.dureePack} </span> </h2>
					<ul >
						{
						p.descriptionPack.split(".\n").map((line ,index) => {
						  return (
							<li key={index}>{line}</li>
						  )
						}
						)		
						}
			
					</ul>
					<Link onClick={() => {
							localStorage.setItem("nomPack", p.nomPack)
					}
					} className='pay' to='/login'    >Buy Pack</Link>
			</div>
				)
			})
		}			
		
	
				{/* SEcond pack */}
		
</div>
    </div>
  )
}
