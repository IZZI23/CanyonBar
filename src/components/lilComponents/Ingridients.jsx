import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { FaPlus, FaMinus } from "react-icons/fa";

function Ingridients() {
  const [ingridients, setIngridients] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(40);

  const toggle = () => {
    if (clicked) {
      return setClicked(null);
    }

    setClicked(true);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d83053e760mshbf7dc3718659598p1e1736jsn6ad31b0fb74d",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  const getIngridients = async (search) => {
    const api = await fetch(
      `https://the-cocktail-db.p.rapidapi.com/list.php?i=list`,
      options
    );
    const data = await api.json();
    setIngridients(data.drinks);
  };

  useEffect(() => {
    getIngridients();
  }, [ingridients]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(ingridients.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(ingridients.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, ingridients]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ingridients.length;
    setItemOffset(newOffset);
  };

  return (
    <Accordion>
      <Wrap onClick={() => toggle()}>
        <h2>List Of Ingridients and Cocktails</h2>
        <span>
          {clicked === true ? (
            <FaMinus className="icon" />
          ) : (
            <FaPlus className="icon" />
          )}
        </span>
        {clicked === true ? (
          <DropDown onClick={(e) => e.stopPropagation()}>
            <IngridientsContainer>
              {Array.isArray(currentItems) ? (
                currentItems.map((drink) => {
                  return (
                    <div key={drink.strIngredient1}>
                      <p>{drink.strIngredient1}</p>
                    </div>
                  );
                })
              ) : (
                <div className="ingridients__notfound">
                  <h3>No Ingridient Was Found</h3>
                </div>
              )}
            </IngridientsContainer>
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
          </DropDown>
        ) : (
          <>
          </>
        )}
      </Wrap>
    </Accordion>
  );
}

const Accordion = styled.div`
  min-height: 55vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: solid var(--white-color);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  cursor: pointer;
  .icon {
    font-size: 1.2rem;
  }
  h2 {
    padding: 1rem;
  }
  
  .ingridients__notfound {
    position: relative;
    left: 100%;
    padding: 1rem 1rem;
    line-height: 1.5rem;
    color: var(--pink-color);
  }
`;

const DropDown = styled.div`
  background: inherit;
  color: var(--alt-font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: text;
  .page-num-i {
    display: none;
  }
`;

const IngridientsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;

  @media (max-width: 851px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export default Ingridients;
