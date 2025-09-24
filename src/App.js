import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial state with sample books
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // State for adding new books
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title.trim() && newBook.author.trim()) {
      const book = {
        id: Date.now(), // Simple ID generation
        title: newBook.title.trim(),
        author: newBook.author.trim()
      };
      setBooks([...books, book]);
      setNewBook({ title: '', author: '' });
    }
  };

  // Handle removing a book
  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Handle input changes for new book
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Library Management</h1>
        
        {/* Search Bar */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Add Book Form */}
        <form onSubmit={handleAddBook} className="add-book-form">
          <div className="input-group">
            <input
              type="text"
              name="title"
              placeholder="New book title"
              value={newBook.title}
              onChange={handleInputChange}
              className="book-input"
            />
            <input
              type="text"
              name="author"
              placeholder="New book author"
              value={newBook.author}
              onChange={handleInputChange}
              className="book-input"
            />
            <button type="submit" className="add-button">
              Add Book
            </button>
          </div>
        </form>

        {/* Book List */}
        <div className="book-list">
          {filteredBooks.length === 0 ? (
            <p className="no-books">
              {searchTerm ? 'No books found matching your search.' : 'No books in the library.'}
            </p>
          ) : (
            filteredBooks.map(book => (
              <div key={book.id} className="book-item">
                <div className="book-info">
                  <span className="book-title">{book.title}</span>
                  <span className="book-author">by {book.author}</span>
                </div>
                <button
                  onClick={() => handleRemoveBook(book.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

