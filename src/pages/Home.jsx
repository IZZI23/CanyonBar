import React from "react";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import Latest from "../components/Latest";
import HomeCocktails from "../components/HomeCocktails";
import HomeCategories from "../components/HomeCategories";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeCategories />
      <HomeCocktails />
      <Latest />
      <About />
      <Popular />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
