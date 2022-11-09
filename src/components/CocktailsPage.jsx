import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBarAuto from "./lilComponents/SearchBarAuto";
import ReactPaginate from "react-paginate";
import Ingridients from "../components/lilComponents/Ingridients";
import { Link } from "react-router-dom";

function CocktailsPage() {
  const [search, setSearch] = useState("Gin");
  const [cocktails, setCocktails] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(9);

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
    if (data != null){
      setCocktails(data.drinks)
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      getCocktails(search);
    }
  }, [search]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (cocktails != null){
      if(cocktails.slice(itemOffset, endOffset) != null) {
        setCurrentItems(cocktails.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(cocktails.length / itemsPerPage));
      }  
    }else{
      setCurrentItems(null)
    }
      
  }, [itemOffset, itemsPerPage, cocktails]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cocktails.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Ingridients />
      <h2>Search by Cocktail Name</h2>
      <SearchBarAuto search={search} setSearch={setSearch} />
      <div className="container">
        <div className="grid">
          {currentItems != null ? (
            currentItems.map((drink) => {
              return (
                <div className="card" key={drink.idDrink}>
                  <Link to={"/details/" + drink.idDrink}>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{drink.strDrink}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="cocktails__notfound">
              <h3>No Cocktail With That Name Found</h3>
            </div>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num page-num-i"
          nextLinkClassName="page-num page-num-i"
          activeLinkClassName="active"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: solid var(--white-color);
  h2 {
    margin-top: 7.5rem;
  }

  .container {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .grid {
    padding: 2rem 5rem;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .card p {
    font-weight: 600;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }

  .card img {
    border-radius: 1rem;
  }

  .cocktails__notfound {
    position: relative;
    left: 100%;
    padding: 1rem 1rem;
    line-height: 1.5rem;
    color: var(--pink-color);
  }

  @media (max-width: 851px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }
`;

export default CocktailsPage;
