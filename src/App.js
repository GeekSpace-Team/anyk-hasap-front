import React, { useEffect, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbnar/Navbar";
import AboutUs from "./components/Navbnar/pages/aboutUs/AboutUs";
import Contacts from "./components/Navbnar/pages/contacts/Contacts";
import { GlobalDebug } from "./components/Navbnar/pages/GlobalDebug";
import HomePage from "./components/Navbnar/pages/homePage/HomePage";
import OurServices from "./components/Navbnar/pages/ourServices/OurServices";
import history from "./utils/history/history";

function App() {
  useEffect(() => {
    (process.env.NODE_ENV === "production" ||
      process.env.REACT_APP_ENV === "STAGING") &&
      GlobalDebug(false);
  }, []);

  console.log = function () {};
  console.error = function () {};
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <HashRouter history={history}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

export default App;
