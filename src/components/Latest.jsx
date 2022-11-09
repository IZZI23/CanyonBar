import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Latest() {
  const [latest, setLatest] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getLatest = async () => {
    const api = await fetch(
      "https://the-cocktail-db.p.rapidapi.com/latest.php",
      options
    );
    const data = await api.json();
    if (data) {
      setLatest(data.drinks);
    }
  };

  useEffect(() => {
    getLatest();

  }, [latest]);

  return (
    <LatestContainer>
      <h2>Most Latest</h2>
      <Splide
        options={{
          perPage: 2,
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
        {latest.map((drink) => {
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
    </LatestContainer>
  );
}

const LatestContainer = styled.section`
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
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: 850px) {
    min-height: 15vh;
    min-width: 12vh;
    &:hover {
      transform: none;
    }
    p {
      font-size: 1rem;
      width: 100%;
      text-align: center;
      font-weight: 600;
    }
  }
`;

export default Latest;
