import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setQuotes(data))
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again later.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {quotes.map((quote, index) => (
        <p key={index}>{quote.text}</p>
      ))}
    </div>
  );
};

export default Quotes;
