import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const id = '3cAmJiRFybSjAG0xrXb4';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`;

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong with your request');
    }
  },
);

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    try {
      await axios.post(url, book);
      return book;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const deleteBooks = createAsyncThunk(
  'books/removeBooks',
  async (itemId, thunkAPI) => {
    try {
      const removeUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books/${itemId}`;
      await axios.delete(removeUrl);
      return itemId;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const id = Object.keys(action.payload);
        const receivedBooks = Object.values(action.payload);
        receivedBooks.forEach((book, index) => {
          const newBook = {
            item_id: id[index],
            title: book[0].title,
            author: book[0].author,
            category: book[0].category,
          };
          state.books.push(newBook);
        });
      })

      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(addBooks.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })

      .addCase(deleteBooks.fulfilled, (state, action) => {
        state.books = state.books.filter((item) => item.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
