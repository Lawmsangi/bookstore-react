import React from 'react';
import '../css/DisplayBooks.css';
import { PropTypes } from 'prop-types';

function DisplayBooks({ author, title, category }) {
  return (
    <div className="book-card">
      <div className="card-details">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <ul>
          <li>
            <button className="card-button" type="button">Comments</button>
          </li>
          <li>
            <button className="card-button" type="button">Remove</button>
          </li>
          <li>
            <button className="card-button" type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="book-completed">
        <div>cirle</div>
        <div>
          <div>64%</div>
          <span>completed</span>
        </div>
      </div>

      <div className="book-progress">
        <h2>CURRENT CHAPTER</h2>
        <h3>Chapter 17</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

DisplayBooks.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default DisplayBooks;
