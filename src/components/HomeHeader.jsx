import React from "react";
import styled from "styled-components";
import img from "../background.jpg";

function Top() {
  return (
    <Home>
      <Content>
        <h1>learn more about your favourite drinks</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          nulla aliquid ullam quis quae laborum!
        </p>
        <a href="https://silverhillhospital.org/community/blog-post/top-5-alcohol-related-health-issues/" target="_blank">
          <button className="home__btn btn btn--large">Learn More</button>
        </a>
      </Content>
    </Home>
  );
}

const Home = styled.section`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  box-shadow: inset 8rem 6rem 15rem #000000, inset -8rem -6rem 15rem #000000;
  border-bottom: solid var(--white-color);

  @media (max-width: 850px) {
    min-height: 60vh;
    box-shadow: inset 4rem 3rem 15rem #000000, inset -4rem -3rem 15rem #000000;
}
`;

const Content = styled.div`
  min-width: 40vw;
  margin-inline: 5%;
  .home__btn{
    margin: 2rem 1rem;
  }


`;
export default Top;
