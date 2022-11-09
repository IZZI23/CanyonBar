import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BigPic from "./lilComponents/BigPic";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState("Ordinary Drink");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getList = async () => {
    const api = await fetch(
      "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
      options
    );
    const data = await api.json();
    setList(data.drinks);
  };

  useEffect(() => {
    getList();
  }, [list]);

  return (
    <Container>
      <h2>Choose the Category</h2>
      <div className="category__container">
        <div className="category__grid">
          <aside className="category__list">
            {Array.isArray(list) ? (
              list.map((drink) => {
                return (
                  <div key={drink.strCategory}>
                    <button
                      className={`btn btn--small  ${
                        activeTab === `${drink.strCategory}` ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(`${drink.strCategory}`)}
                    >
                      {drink.strCategory}
                    </button>
                  </div>
                );
              })
            ) : (
              <div>
                <button className="btn btn--small">No Category</button>
              </div>
            )}
            <NavLink to={"/categories"}>
              <button className="btn btn--small seeall">
                SEE ALL <FaArrowRight className="arrow" />
              </button>
            </NavLink>
          </aside>
          <>
            <BigPic activeTab={activeTab} />
          </>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  max-width: 100%;
  margin: 2rem 1rem;
  text-align: center;
  border-bottom: solid var(--white-color);
  padding-bottom: 2rem;

  .category__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category__grid {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 0.2rem;

    .seeall {
      position: relative;
      color: var(--white-color);
      margin: 0.5rem;
      background: linear-gradient(
        0deg,
        var(--background-color),
        var(--white-color)
      );
    }
    .seeall:hover {
      background: linear-gradient(
        0deg,
        var(--background-color),
        var(--pink-color)
      );
      color: var(--font-color);
    }

    .arrow {
      position: absolute;
      left: 80%;
      bottom: 35%;
      font-size: 1.2rem;
    }
  }
  .category__list {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 4rem);
    line-height: 5rem;
    padding: 1rem;
    margin: 1rem;
  }
  .active {
    background: linear-gradient(
      0deg,
      var(--background-color),
      var(--pink-color)
    );
    color: white;
  }

  /* ----MEDIA MAX 851px */
  @media (max-width: 851px) {
    min-height: 70vh;
    margin: 2rem 0;
    .category__grid {
      display: flex;
      flex-direction: column;
    }
    .category__list {
      display: grid;
      grid-gap: 0.8rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 4rem);
    }
  }
  /* ----MEDIA MAX 651px */
  @media (max-width: 651px) {
    .category__list {
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(11, 4rem);
    }
  }
`;

export default List;
