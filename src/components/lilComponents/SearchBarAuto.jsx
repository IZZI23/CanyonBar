import React from 'react';
import styled from "styled-components";

function SearchBarAuto(props) {
  return (
    <SearContainer>
      <div>
        <input
          value={props.search}
          type="text"
          placeholder="Gin,Vermouth,Anis.."
          onChange={(e)=>props.setSearch(e.target.value)}
        />
      </div>
    </SearContainer>
  )
}


const SearContainer = styled.div`
  margin: 2rem 1rem;
  width: 50%;
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
`
export default SearchBarAuto