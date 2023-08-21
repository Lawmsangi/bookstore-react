import React from 'react';
import { useSelector } from 'react-redux';
import DisplayBooks from './DisplayBooks';
import AddBook from './AddBook';

export default function Books() {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      <div>
        {books.map((book) => (
          <DisplayBooks
            key={book.author}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
}
