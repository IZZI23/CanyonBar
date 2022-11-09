import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotosCategories from "./PhotosCategories";

function CategoriesPage() {
  const [list, setList] = useState({});
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
  }, []);

  return (
    <Container>
      <h2>Choose the Category</h2>
      <div className="category__container">
        <div className="category__grid">
          <List>
            <h3>Categories</h3>
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
          </List>
          <PhotosCategories activeTab={activeTab} />
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
  text-align: center;
  border-bottom: solid var(--white-color);
  padding-bottom: 2rem;

  h2 {
    margin-top: 7.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    padding-bottom: 3rem;
    border-bottom: solid var(--white-color);
  }

  .category__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .category__grid {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 2rem;
  }

  @media (max-width: 851px) {
    h2 {
      margin-top: 8rem;
      margin-bottom: 4rem;
    }

    .category__grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const List = styled.aside`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(11, 4rem);
  line-height: 2rem;
  padding: 1rem;
  .active {
    background: linear-gradient(
      0deg,
      var(--background-color),
      var(--pink-color)
    );
    color: white;
  }

  @media (max-width: 851px) {
  }
`;

export default CategoriesPage;
