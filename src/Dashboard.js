import React from 'react'
import './css/dashboardStyle.css';
export default function Profile() {
  return (
   
    <div class="cont">
      <h2 className='titleclient'>Customer</h2>
      
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>poids</th>
          <th>choix</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>30</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>30</td>
          <td>Male</td>
        </tr>
      </table>

      <h2 className='titleclient'>Pack</h2>
      
      <table>
        <tr>
          <th>NomPck</th>
          <th>description</th>
          <th>prix</th>
          <th>duree</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>30</td>
          <td>Male</td>
          <td><button className='x' type='butoon' >Modif</button></td>
          <td><button className='x'  type='butoon' >Delete</button></td>
        </tr>
      </table>
    </div>

  )
}
