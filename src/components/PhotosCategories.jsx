import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function PhotosCategories(props) {
  const [category, setCategory] = useState([]);
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

  const getCategory = async () => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${props.activeTab}`,
      options
    );
    const data = await api.json();
    setCategory(data.drinks);
  };

  useEffect(() => {
    getCategory();
  }, [props.activeTab]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(category.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(category.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, category]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % category.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <PhotoGrid>
        {currentItems.map((drink) => {
          return (
            <div className="card" key={drink.idDrink}>
              <Link to={"/details/" + drink.idDrink}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <p>{drink.strDrink}</p>
              </Link>
            </div>
          );
        })}
      </PhotoGrid>

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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
`;
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
  .card {
    min-width: 10rem;
    margin: 1.5rem 0rem;
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

  @media (max-width: 851px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export default PhotosCategories;
