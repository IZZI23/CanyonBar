import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <Foot>
      <div className="footer__icons">
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaTiktok />
        </button>
      </div>
      <div className="footer__credit">
        <p>
          Created by <span>Islam Zeynalov</span>
        </p>
        <p> &copy; All Rights Reserved</p>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  min-height: 20vh;
  margin-top: 2rem;
  .footer__icons {
    text-align: center;
  }

  .footer__icons button {
    display: inline-block;
    background-color: inherit;
    font-size: 1.8rem;
    color: var(--font-color);
    margin: 1rem;
    border: solid var(--border);
    line-height: 4.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .footer__icons button:hover {
    background-color: var(--pink-color);
  }

  .footer__credit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  .footer__credit span {
    color: var(--pink-color);
  }
`;
export default Footer;
