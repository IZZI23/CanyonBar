import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import CocktailsPage from "../components/CocktailsPage";


function Cocktails() {
  return (
    <div>
      <Navbar/>
      <CocktailsPage />
      <Popular />
      <Footer />
    </div>
  )
}

export default Cocktails