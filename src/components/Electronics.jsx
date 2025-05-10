import React, { useState, useEffect } from 'react';
import './items.css';
import axios from 'axios';

export default function Plumbing({ store }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the plumbing data when the component mounts
    axios.get("http://localhost:8082/svc/plumbing")
      .then((res) => {
        setResult(res.data);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((err) => {
        setError("Error fetching data!");
        setLoading(false); // Stop loading in case of error
      });
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle card click
  function cardAction(item) {
    localStorage.setItem("element", JSON.stringify(item));
    store.dispatch({ "type": "page", "data": "Product" });
  }

  // Loading state and error handling
  if (loading) {
    return <div>Plumbing List Fetching...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Displaying the result after data is fetched
  if (result != null) {
    return (
      <div className='card-parent'>
        {result.map((item) => {
          return (
            <div className='card' key={item.id} onClick={() => { cardAction(item) }}>
              <div className='card-img'>
                <img src={item.pimage} alt="not available" width={200} height={200} />
              </div>
              <div className='card-name'>
                <p> {item.pname} </p>
              </div>
              <div className='card-price'>
                <p> Rs. {item.pcost} </p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }

  return null; // If result is null, return nothing (should not happen)
}
