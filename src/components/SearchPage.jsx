import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBarAuto from "./lilComponents/SearchBarAuto";
import Ingridients from "../components/lilComponents/Ingridients";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Coke() {
  const [search, setSearch] = useState("Vodka,Peach Schnapps");
  const [ingridients, setIngridients] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(6);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getIngridients = async (search) => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${search}`,
      options
    );
    const data = await api.json();
    setIngridients(data.drinks);
  };

  useEffect(() => {
    if (search.length > 0) {
      getIngridients(search);
    }
  }, [search]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (ingridients != null) {
      if (ingridients.slice(itemOffset, endOffset) != null) {
        setCurrentItems(ingridients.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(ingridients.length / itemsPerPage));
      }
    } else {
      setIngridients([]);
    }
  }, [itemOffset, itemsPerPage, ingridients]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ingridients.length;
    setItemOffset(newOffset);
  };

  return (
    <SearchIngridients>
      <Ingridients />
      <h2>Search By Ingridients</h2>
      <SearchBarAuto search={search} setSearch={setSearch} />
      <div className="ingridients__container">
        <div className="ingridients__grid">
          {Array.isArray(currentItems) ? (
            currentItems.map((drink) => {
              return (
                <div className="ingridients__card" key={drink.idDrink}>
                  <Link to={"/details/" + drink.idDrink}>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{drink.strDrink}</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="ingridients__notfound">
              <h3>No Ingridient With That Name Found</h3>
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
    </SearchIngridients>
  );
}

const SearchIngridients = styled.section`
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

  .ingridients__container {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ingridients__grid {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(15rem, 1fr));
    grid-template-rows: auto;
    margin: 2.5rem;
  }

  .ingridients__card {
    min-width: 25vw;
    margin-bottom: 2rem;
  }

  .ingridients__card img {
    padding: 1rem;
    border-radius: 2rem;
  }

  .ingridients__card:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  .ingridients__card p {
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
  }

  .ingridients__notfound {
    position: relative;
    left: 100%;
    padding: 1rem 1rem;
    line-height: 1.5rem;
    color: var(--pink-color);
  }

  @media (max-width: 851px) {
    .ingridients__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 451px) {
    .ingridients__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Coke;
