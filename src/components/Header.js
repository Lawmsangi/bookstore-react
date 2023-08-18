import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <nav className="header">
      <h1 className="Bookstore-CMS Text-Style-3">
        Bookstore CMS
      </h1>
      <Link className="links" to="/">BOOKS</Link>
      <Link className="links2" to="/categories">CATEGORIES</Link>
      <button className="header-button" type="button">
        <span className="material-icons">
          person
        </span>
      </button>
    </nav>
  );
}
