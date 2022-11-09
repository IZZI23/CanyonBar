import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import CategoriesPage from "../components/CategoriesPage";

function Categories() {
  return (
    <div>
      <Navbar />
      <CategoriesPage />
      <Popular />
      <Footer />
    </div>
  );
}

export default Categories;
