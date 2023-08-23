import React from 'react';
import '../css/DisplayBooks.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteBooks } from '../redux/books/booksSlice';

function DisplayBooks({
  itemId, author, title, category,
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
              buttonClass="card-button"
              text="Comments"
            />
          </li>
          <div className="line2" />
          <li>
            <Button
              buttonClass="card-button"
              onClick={() => dispatch(deleteBooks(itemId))}
              text="Remove"
            />
          </li>
          <div className="line2" />
          <li>
            <Button
              buttonClass="card-button"
              text="Edit"
            />
          </li>
        </ul>
      </div>

      <div className="book-completed">
        <div className="circle" />
        <div>
          <div className="percent">64%</div>
          <span className="completed">Completed</span>
        </div>
      </div>

      <div className="line3" />

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
  itemId: PropTypes.string.isRequired,
};

export default DisplayBooks;
