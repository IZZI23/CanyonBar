import React from 'react';
import Navbar from "../components/Navbar";
import DetailsPage from '../components/DetailsPage';
import Latest from "../components/Latest";
import Footer from "../components/Footer";

function Details() {
  return (
    <div>
        <Navbar/>
        <DetailsPage/>
        <Latest/>
        <Footer/>
    </div>
  )
}

export default Details