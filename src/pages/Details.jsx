import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Book data:', data); 
        setBook(data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        setError('Failed to load book details');
      });
  }, [id]);

  return (
   
    <div>
      {error && <p>{error}</p>}
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <img src={book.image} alt={book.title} />
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;