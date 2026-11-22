import React from "react";
import fesLogo from "../assets/fes-logo.png";

const Nav = ({ setSearchQuery }) => {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          src={fesLogo}
          alt="FES Logo"
          className="logo__img"
        />
        <div className="logo__title">
          <span>Simplified</span> Flix
        </div>
      </div>

      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          const query =
            e.currentTarget.elements.searchInput.value.trim();

          if (query) setSearchQuery(query);
        }}
      >
        <div className="search-form__group">
          <input
            className="search-form__input"
            type="text"
            id="searchInput"
            name="searchInput"
            placeholder="Search movies..."
            required
          />

          <button
            className="search-form__button"
            type="submit"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Nav;