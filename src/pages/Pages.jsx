import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Cocktails from "./Cocktails";
import Categories from "./Categories";
import Details from "./Details";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cocktails" element={<Cocktails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default Pages;
