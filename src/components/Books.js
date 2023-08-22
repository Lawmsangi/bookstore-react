import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayBooks from './DisplayBooks';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { books } = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <div>
        {books.map((book) => (
          <DisplayBooks
            key={book.item_id}
            itemId={book.item_id}
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
