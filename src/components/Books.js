import React, { useState } from 'react';
import DisplayBooks from './DisplayBooks';
import AddBook from './AddBook';

export default function Books() {
  const [books] = useState([
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'SelfHelp',
    },
    {
      title: 'This Girl',
      author: 'Colleen Hoover',
      category: 'Fiction',
    },
  ]);
  return (
    <div>
      <div>
        {books.map((book) => (
          <DisplayBooks
            key={book.author}
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
