import React, { useState } from 'react';
import '../css/AddBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { addBooks } from '../redux/books/booksSlice';

export default function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      await dispatch(addBooks({
        item_id: uuidv4(), title, author, category: 'Fiction',
      }));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book">
      <div className="line"> </div>
      <h1 className="title">ADD NEW BOOK</h1>
      <form action="">
        <input
          className="book-title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button onClick={handleSubmit} buttonClass="button-add" text="ADD BOOK" />
      </form>
    </div>
  );
}
