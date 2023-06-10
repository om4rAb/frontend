import React from 'react'
import "./css/ProgrammStyle.css"


export default function Programms() {
  return (
    <div>
      <div class="progcontainer">
        <h1>Fitness Program</h1>

        <div class="pro">
            <h2>Week 1</h2>
            <ul>
                <li>Monday: Cardio workout</li>
                <li>Tuesday: Upper body strength training</li>
                <li>Wednesday: Rest day</li>
                <li>Thursday: Lower body strength training</li>
                <li>Friday: HIIT workout</li>
                <li>Saturday: Yoga</li>
                <li>Sunday: Rest day</li>
            </ul>
        </div>

        <div class="pro">
            <h2>Week 2</h2>
            <ul>
                <li>Monday: Lower body strength training</li>
                <li>Tuesday: Cardio workout</li>
                <li>Wednesday: Rest day</li>
                <li>Thursday: Upper body strength training</li>
                <li>Friday: Yoga</li>
                <li>Saturday: HIIT workout</li>
                <li>Sunday: Rest day</li>
            </ul>
        </div>

        <div class="pro">
            <h2>Week 3</h2>
            <ul>
                <li>Monday: Upper body strength training</li>
                <li>Tuesday: Yoga</li>
                <li>Wednesday: Rest day</li>
                <li>Thursday: Lower body strength training</li>
                <li>Friday: Cardio workout</li>
                <li>Saturday: HIIT workout</li>
                <li>Sunday: Rest day</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
