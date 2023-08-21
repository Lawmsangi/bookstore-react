import React from 'react';
import '../css/DisplayBooks.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/booksSlice';

function DisplayBooks({
  id, author, title, category,
}) {
  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <div className="card-details">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <ul>
          <li>
            <Button
              className="card-button"
              text="Comments"
            />
          </li>
          <li>
            <Button
              className="card-button"
              onClick={() => dispatch(removeBook(id))}
              text="Remove"
            />
          </li>
          <li>
            <Button
              className="card-button"
              text="Edit"
            />
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
  id: PropTypes.string.isRequired,
};

export default DisplayBooks;
