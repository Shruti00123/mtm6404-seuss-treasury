import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setBooks(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="books-container">
      {books.map(book => {
        console.log('Book object:', book); 
        let imageUrl = 'https://via.placeholder.com/150'; 
        if (book.image) {
          imageUrl = book.image.startsWith('http') ? book.image : `https://seussology.info${book.image}`;
        }
        console.log(`Book ID: ${book.id}, Image URL: ${imageUrl}`);

        return (
          <Link to={`/books/${book.id}`} key={book.id} className="book-card">
            <img 
              src={imageUrl} 
              alt={book.title} 
              className="book-image" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} 
            />
            <div className="book-details">
              <p className="book-title">{book.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Books;
