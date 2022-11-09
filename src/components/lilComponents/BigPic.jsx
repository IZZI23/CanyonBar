import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Categories(props) {
  const [category, setCategory] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getCategory = async () => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${props.activeTab}`,
      options
    );
    const data = await api.json();
    setCategory(data.drinks.slice(0, 1));
  };

  useEffect(() => {
    getCategory();
  }, [props.activeTab]);

  return (
    <>
      {category.map((drink) => {
        return (
          <Picture
            key={drink.idDrink}
            style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}
          ></Picture>
        );
      })}
    </>
  );
}

const Picture = styled.main`
  max-height: 90vh;
  max-width: 90%;
  margin-top: 2.5rem;
  margin-inline: 10%;
  border-radius: 0.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 851px) {
    min-height: 50vh;
  }
  @media (max-width: 651px) {
    min-height: 40vh;
    max-width: 100%;
  }
`;
export default Categories;
