import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage"
import Home from "./Home"
import LoginPage from "./Loging";
import Register from "./Register";
import Programms from "./Programms";
import Payment from "./Payment";
import UserProfile from "./UserProfile";
import Dashboard from "./Dashboard";

function App() {
  return (

    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<LandingPage />} />
          <Route  path="/Home" element={<Home />} />
          <Route  path="/login" element={<LoginPage />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/FreeProgramme" element={<Programms />} />
          <Route  path="/payment" element={<Payment />} />
          <Route  path="/profile" element={<UserProfile />} />
          <Route  path="/dashboard" element={<Dashboard />} />





        </Routes>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
