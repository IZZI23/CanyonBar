import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getPopular = async () => {
    const api = await fetch(
      "https://the-cocktail-db.p.rapidapi.com/popular.php",
      options
    );
    const data = await api.json();
    if (data) {
      setPopular(data.drinks);
    }
  };

  useEffect(() => {
    getPopular();
  }, [popular]);

  return (
    <PopularContainer>
      <h2>Most Popular</h2>
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          width: "80vw",
          mediaQuery: "max",
          breakpoints: {
            851: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {popular.map((drink) => {
          return (
            <SplideSlide key={drink.idDrink}>
              <Card>
                <Link to={"/details/" + drink.idDrink}>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <p>{drink.strDrink}</p>
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </PopularContainer>
  );
}

const PopularContainer = styled.section`
  text-align: center;
  border-bottom: solid var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    padding-top: 1rem;
  }
`;

const Card = styled.div`
  min-height: 70vh;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  img {
    min-width: 10rem;
    border-radius: 1rem;
  }
  p {
    font-size: 1rem;
    width: 100%;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: 400;
  }

  @media (max-width: 850px) {
    min-height: 15vh;
    min-width: 10vh;
    &:hover {
      transform: none;
    }
    p {
      font-size: 0.8rem;
      width: 100%;
      text-align: center;
      font-weight: 400;
    }
  }
`;

export default Popular;
