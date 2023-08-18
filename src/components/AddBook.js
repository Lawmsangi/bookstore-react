import React from 'react';
import '../css/AddBook.css';

export default function AddBook() {
  return (
    <div className="add-book">
      <div className="line" />
      <h1 className="title">ADD NEW BOOK</h1>
      <form action="">
        <input className="book-title" type="text" placeholder="Book title" />
        <input className="book-author" type="text" placeholder="Author" />
        <button type="button" className="button-add">ADD BOOK</button>
      </form>
    </div>
  );
}
