import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

function Search(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    props.setSearch(inputRef.current.value);
  };

  return (
    <SearContainer>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Cocktail Name..."
        />
        <FaSearch onClick={handleClick} />
      </div>
    </SearContainer>
  );
}

const SearContainer = styled.div`
  margin: 2rem 1rem;
  width: 50%;
  position: relative;

  input {
    width: 100%;
    height: 3rem;
    font-size: 1.5rem;
    font-family: "Times New Roman", Times, serif;
    padding: 1rem 1.5rem;
    color: var(--white-color);
    background: linear-gradient(
      180deg,
      var(--pink-color),
      var(--opacity-color)
    );
    border-radius: 0.4rem;
    &:focus {
      color: var(--font-color);
    }
  }
  svg {
    cursor: pointer;
    position: absolute;
    left: 95%;
    top: 35%;
  }
  @media (max-width: 850px) {
    svg {
      left: 90%;
    }
  }
`;

export default Search;
