import React, { useEffect, useState } from "react";
import Search from "./lilComponents/SearchBar";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Coke() {
  const [search, setSearch] = useState("Rum");
  const [cocktails, setCocktails] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getCocktails = async (search) => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/search.php?s=${search}`,
      options
    );
    const data = await api.json();
    setCocktails(data.drinks.slice(0, 5));
  };

  useEffect(() => {
    if (search.length > 0) {
      getCocktails(search);
    }
  }, [search]);

  return (
    <CocktailContainer>
      <h2>Find Your Favourite Cocktails</h2>
      <Search search={search} setSearch={setSearch} />
      <div className="cocktails__container">
        <div className="cocktails__grid">
          {Array.isArray(cocktails) ? (
            cocktails.map((drink) => {
              return (
                <Link
                  className="cocktails__card"
                  key={drink.idDrink}
                  to={"/details/" + drink.idDrink}
                >
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <p>{drink.strDrink}</p>
                </Link>
              );
            })
          ) : (
            <h2>No Cocktails With That Name Found</h2>
          )}
        </div>
        <NavLink to={"/cocktails"}>
          <FaArrowRight className="arrow" />
        </NavLink>
        <p className="seeall">SEE ALL</p>
      </div>
    </CocktailContainer>
  );
}

const CocktailContainer = styled.section`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: solid var(--white-color);

  .cocktails__container {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .arrow {
      font-size: 3rem;
      border-radius: 50%;
      margin: 0.5rem;
      padding: 0.5rem;
    }
    .arrow:hover {
      background-color: var(--pink-color);
    }

    .seeall {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--pink-color);
      margin: 0.5rem;
    }
  }

  .cocktails__grid {
    padding: 2rem 5rem;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-areas:
      "one five two"
      "three four two";
  }

  .cocktails__card:nth-child(1) {
    grid-area: one;
  }
  .cocktails__card:nth-child(2) {
    grid-area: two;
  }
  .cocktails__card:nth-child(3) {
    grid-area: three;
  }
  .cocktails__card:nth-child(4) {
    grid-area: four;
  }
  .cocktails__card:nth-child(5) {
    grid-area: five;
  }

  .cocktails__card {
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cocktails__card:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .cocktails__card p {
    font-weight: 600;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }

  .cocktails__card img {
    border-radius: 1rem;
  }

  @media (max-width: 851px) {
    .cocktails__grid {
      margin: 1rem auto;
      display: grid;
      grid-gap: 3rem;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five";
    }
    .cocktails .card p {
      font-weight: 600;
      font-size: 1rem;
      width: 100%;
      text-align: center;
    }
  }
`;

export default Coke;
