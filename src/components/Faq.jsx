import React from "react";
import styled from "styled-components";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";


function Faq() {
  return (
    <FaqContainer>
      <h2>FAQ</h2>
      <FaqQuestion className="faq__item" id="question1">
        <a className="faq__link" href="#question1">
          Why am I doing this?
          <FaChevronCircleDown className=" button button__down" />
          <FaChevronCircleUp className="button button__up" />
        </a>
        <div className="faq__answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            labore sequi magnam nesciunt, assumenda laborum consequatur iste
            consectetur laudantium quos!
          </p>
        </div>
      </FaqQuestion>
      <FaqQuestion className="faq__item" id="question2">
        <a className="faq__link" href="#question2">
          Why am I doing this?
          <FaChevronCircleDown className=" button button__down" />
          <FaChevronCircleUp className="button button__up" />
        </a>
        <div className="faq__answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            labore sequi magnam nesciunt, assumenda laborum consequatur iste
            consectetur laudantium quos!
          </p>
        </div>
      </FaqQuestion>
      <FaqQuestion className="faq__item" id="question3">
        <a className="faq__link" href="#question3">
          Why am I doing this?
          <FaChevronCircleDown className=" button button__down" />
          <FaChevronCircleUp className="button button__up" />
        </a>
        <div className="faq__answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            labore sequi magnam nesciunt, assumenda laborum consequatur iste
            consectetur laudantium quos!
          </p>
        </div>
      </FaqQuestion>
    </FaqContainer>
  );
}

const FaqContainer = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: 10%;
  padding: 1rem;
  border-bottom: solid var(--white-color);
`;

const FaqQuestion = styled.div`
  margin-bottom: 5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--alt-background-color);
  box-shadow: 0.5rem 0.2rem 0.5rem var(--pink-color);

  .faq__link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .button {
    font-size: 1.5rem;
    border: 0.2rem solid var(--white-color);
    border-radius: 50%;
  }
  .button:hover {
    background-color: var(--pink-color);
  }
  .button__up {
    display: none;
  }

  .faq__answer {
    overflow: hidden;
    max-height: 0;
    transition: 0.5s;
  }

  .faq__answer p {
    padding: 1rem 2rem;
  }

  &:target .faq__answer {
    max-height: 20rem;
  }

  &:target .faq__link .button__up {
    display: block;
  }

  &:target .faq__link .button__down {
    display: none;
  }
`;

export default Faq;
