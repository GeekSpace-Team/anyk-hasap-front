import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,Navigate
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbnar/Navbar';
import AboutUs from './components/Navbnar/pages/aboutUs/AboutUs';
import Contacts from './components/Navbnar/pages/contacts/Contacts';
import HomePage from './components/Navbnar/pages/homePage/HomePage';
import OurServices from './components/Navbnar/pages/ourServices/OurServices';
import history from './utils/history/history'

function App() {
  return (
    <BrowserRouter history={history}>
        <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ourServices" element={<OurServices/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
