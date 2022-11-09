import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaHome, FaSearch, FaBars, FaTimesCircle } from "react-icons/fa";
import { BiCategory, BiDrink } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [showed, setShowed] = useState(false);
  return (
    <NavContainer>
      <Link to={"/"}>
        <h1>CANYON BAR</h1>
      </Link>

      <Icons>
        <StyledLink to={"/"}>
          <FaHome />
        </StyledLink>
        <StyledLink to={"/search"}>
          <FaSearch />
        </StyledLink>
        <StyledLink to={"/categories"}>
          <BiCategory />
        </StyledLink>
        <StyledLink to={"/cocktails"}>
          <BiDrink />
        </StyledLink>
      </Icons>
      <button className="responsive-bars">
        <FaBars onClick={(e) => setShowed(true)} />
      </button>
      <div
        className="responsive-info"
        style={showed ? { display: "flex" } : { display: "none" }}
      >
        <FaTimesCircle onClick={(e) => setShowed(false)} className="cancel" />
        <NavLinks to={"/"}>Home</NavLinks>
        <NavLinks to={"/search"}>Search by Ingridients</NavLinks>
        <NavLinks to={"/categories"}>Categories</NavLinks>
        <NavLinks to={"/cocktails"}>Cocktails</NavLinks>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  min-height: 14vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background-color: var(--opacity-color);
  color: var(--font-color);
  z-index: 5;

  h1:hover {
    transition: 0.2s;
    color: var(--pink-color);
  }

  .responsive-bars {
    font-size: 1.5rem;
    color: var(--font-color);
    display: none;
  }

  .responsive-bars:hover {
    cursor: pointer;
  }
  .responsive-info {
    display: none;
  }

  @media (max-width: 651px) {
    h1 {
      margin-right: 2rem;
    }
    .responsive-bars {
      background-color: inherit;
      display: block;
      font-size: 2rem;
      margin-left: 1rem;
    }
    .responsive-info {
      position: absolute;
      top: 100%;
      left: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-height: 35vh;
      min-width: 50vw;
      background-color: var(--opacity-color);
      border-radius: 0 0 0 2rem;
      display: none;
    }

    .responsive-info .cancel {
      position: absolute;
      right: 10%;
      top: 5%;
      font-size: 1.5rem;
    }
    .responsive-info .cancel:hover {
      color: var(--pink-color);
    }
  }
`;

const Icons = styled.div`
  display: flex;
  @media (max-width: 651px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  margin: 1.5rem 0rem;
  &:hover {
    transition: 0.2s;
    color: var(--pink-color);
    border-bottom: 0.1rem solid var(--pink-color);
    padding-bottom: 0.3rem;
    cursor: pointer;
  }
`;

const StyledLink = styled(NavLink)`
  background-color: var(--opacity-color);
  color: var(--font-color);
  margin: 0.5rem;
  padding: 0.8rem;
  line-height: 1rem;
  border-radius: 30%;
  border: 0.2rem rgba(255, 255, 255, 0.3);
  font-size: 1.3rem;

  &:hover {
    background: linear-gradient(0deg, var(--opacity-color), var(--pink-color));
  }

  &.active {
    background: linear-gradient(0deg, var(--opacity-color), var(--pink-color));
  }

  @media (min-width: 851px) {
    font-size: 1.5rem;
    line-height: 1rem;
    padding: 1rem;
    margin: 1rem;
    border: 0.2rem rgba(255, 255, 255, 0.1);
    border-radius: 30%;
  }
`;

export default Navbar;
