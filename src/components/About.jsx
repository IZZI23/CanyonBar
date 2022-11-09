import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutUs>
      <h2>about us</h2>
      <Text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          praesentium.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio culpa
          dignissimos dolorum alias ea, quo beatae laboriosam veritatis
          inventore dolores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          praesentium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis
          eligendi laudantium neque hic blanditiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim
          quisquam labore quae repellendus illo nihil, ducimus, unde sed saepe
          eius, pariatur blanditiis commodi iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim
          quisquam labore quae repellendus illo nihil, ducimus, unde sed saepe
          eius, pariatur blanditiis commodi iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis
          eligendi laudantium neque hic blanditiis.
        </p>
      </Text>
    </AboutUs>
  );
}

const AboutUs = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 5rem;
  border-bottom: solid var(--white-color);
  h2 {
    padding: 2rem;
    text-align: center;
  }
`;

const Text = styled.div`
  max-height: 60vh;
  max-width: 80vw;
  overflow-y: scroll;
  text-align: left;
  p {
  padding: 1rem;
  line-height: 1.5rem;
}
`;

export default About;
