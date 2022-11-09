import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import SearchPage from "../components/SearchPage";

function Search() {
  return (
    <div>
      <Navbar />
      <SearchPage />
      <Popular />
      <Footer />
    </div>
  );
}

export default Search;
