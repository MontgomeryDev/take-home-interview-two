import React from 'react';
import fesLogo from "../assets/fes-logo.png";

const Nav = () => {
  return (
      <nav>
      <div className="fesLogo">
        <img
          src={fesLogo}
          alt=""
          class="logo__img"
          width="50px"
        />
        <div className="logo__title"><span>Simplified</span> Flix</div>
      </div>
      <form className="search-form" id="searchForm">
        <div className="search-form__group">
          <input
            className="search-form__input"
            type="text"
            id="searchInput"
            placeholder="Search movies..."
            required
          />
          {/* <!-- no need for button with an onClick because it's part of a form with a type="submit" below  --> */}
          <button className="search-form__button" type="submit" aria-label="Search">
            <svg
              className="search-form__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Nav;