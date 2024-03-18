import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './navbar';
import HomeComponent from "./home"
import RoomsComponent from "./rooms"
import ContactusComponent from "./contact-us"
import FacilitiesComponent from './facilities';

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/facilities' element= {<FacilitiesComponent/>}/>
      <Route path='/home' element= {<HomeComponent/>} /> 
      <Route path='/rooms' element= {<RoomsComponent/>} />
      <Route path='/contact-us' element= {<ContactusComponent/>} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default RouterComponent