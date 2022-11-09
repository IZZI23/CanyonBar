import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function DetailsPage() {
  let params = useParams();

  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getInfo = async () => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${params.id}`,
      options
    );
    const data = await api.json();
    setDetails(data.drinks);
  };

  useEffect(() => {
    getInfo();
  }, [params.id]);

  return (
    <Details>
      <h2>instructions and ingridients</h2>
      {details.map((info) => {
        return (
          <DetailsContainer key={info.idDrink}>
            <Image>
              <img src={info.strDrinkThumb} alt="" />
            </Image>
            <InfoContainer>
              <div>
                <button
                  className={`btn btn--neutral  ${
                    activeTab === "instructions" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("instructions")}
                >
                  Instructions
                </button>
                <button
                  className={`btn btn--neutral  ${
                    activeTab === "ingredients" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("ingredients")}
                >
                  Ingredients
                </button>
              </div>
              {activeTab === "instructions" && (
                <div className="instructions">
                  <div className="main">
                    <h2>Main Information:</h2>
                    <p>Name: {info.strDrink}</p>
                    <p>Category: {info.strCategory}</p>
                    <p>Alcoholic / non-Al: {info.strAlcoholic}</p>
                    <p>Glass: {info.strGlass}</p>
                  </div>
                  <div className="description">
                    <h2>Instructions:</h2>
                    <p>{info.strInstructions}</p>
                  </div>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div className="ingridients">
                  <div className="container">
                    <div className="amount">
                      <ul>
                        <h2>Amount</h2>
                        <li key={info.idDrink}>{info.strMeasure1}</li>
                        <li key={info.idDrink}>{info.strMeasure2}</li>
                        <li key={info.idDrink}>{info.strMeasure3}</li>
                        <li key={info.idDrink}>{info.strMeasure4}</li>
                        <li key={info.idDrink}>{info.strMeasure5}</li>
                        <li key={info.idDrink}>{info.strMeasure6}</li>
                        <li key={info.idDrink}>{info.strMeasure7}</li>
                        <li key={info.idDrink}>{info.strMeasure8}</li>
                        <li key={info.idDrink}>{info.strMeasure9}</li>
                        <li key={info.idDrink}>{info.strMeasure10}</li>
                      </ul>
                    </div>
                    <div className="name">
                      <h2>ingridients</h2>
                      <ul>
                        <li key={info.idDrink}>{info.strIngredient1}</li>
                        <li key={info.idDrink}>{info.strIngredient2}</li>
                        <li key={info.idDrink}>{info.strIngredient3}</li>
                        <li key={info.idDrink}>{info.strIngredient4}</li>
                        <li key={info.idDrink}>{info.strIngredient5}</li>
                        <li key={info.idDrink}>{info.strIngredient6}</li>
                        <li key={info.idDrink}>{info.strIngredient7}</li>
                        <li key={info.idDrink}>{info.strIngredient8}</li>
                        <li key={info.idDrink}>{info.strIngredient9}</li>
                        <li key={info.idDrink}>{info.strIngredient10}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="footnotes">
                    <h2>Footnotes</h2>
                    <h3>cL*</h3>
                    <p>
                      <span>cL</span> is a written abbreviation for
                      centilitre*.A <span>centilitre</span> is a metric unit of
                      volume that is equal to one hundredth of a litre.
                    </p>
                    <p>1cL ≈ 10ml</p>
                    <h3>Oz*</h3>
                    <p>
                      <span>Oz</span> is a written abbreviation for ounce*.There
                      are 29.6 milliliters in a US fluid <span>ounce</span> ,
                      while 28.4 milliliters in a British fluid{" "}
                      <span>ounce</span> .
                    </p>
                    <p>1 Oz ≈ 28.4ml - 29.6ml</p>
                  </div>
                </div>
              )}
            </InfoContainer>
          </DetailsContainer>
        );
      })}
    </Details>
  );
}

const Details = styled.div`
  padding-top: 7.5rem;
  text-align: center;
  border-bottom: solid var(--white-color);
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  @media (max-width: 851px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

const Image = styled.div`
  max-height: 80vh;
  margin: 5rem 2rem;
  display: flex;
  img {
    max-width: 80vw;
    border-radius: 1rem;
  }
`;

const InfoContainer = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  button {
    margin: 1rem;
  }
  .instructions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    h2 {
      color: var(--pink-color);
      letter-spacing: 0.3rem;
    }
    .main {
      text-align: center;
    }
    .description {
      p {
        line-height: 2rem;
      }

      text-align: center;
    }
  }
  .ingridients {
    margin-top: 1rem;
    h2 {
      color: var(--pink-color);
      letter-spacing: 0.2rem;
    }
  }
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    ul li {
      list-style: inside;
      margin: 0.5rem;
      line-height: 1.5rem;
    }
  }

  .footnotes {
    margin-top: 1rem;
    margin-inline: 10%;
    span {
      color: var(--pink-color);
    }
    h4 {
      margin: 1.5rem;
    }
    p {
      line-height: 1.5rem;
    }
  }
`;

export default DetailsPage;
