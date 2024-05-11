import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import { Context } from '.';
import Register from "./pages/Register"
import AboutUs from './pages/AboutUs';
import { ToastContainer } from "react-toastify";
import  { useContext, useEffect } from "react";
import Navbar from './components/Navbar';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import Footer from './components/Footer';

const App = () => {

  const { isAuthenticated, setIsAuthenticated, setUser } =
  useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);



  return (
    <>
<Router>
<Navbar />
<Routes>


<Route path='/' element={<Home/>} />
<Route path='/appointment' element={<Appointment/>} />
<Route path='/login' element={<Login/>}  />
<Route path='/register' element={<Register/>}  />
<Route path='/about' element={<AboutUs/>} />

</Routes>
<Footer/>

<ToastContainer position='top-center' />

</Router>



    </>
  )
}

export default App
