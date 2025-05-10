import React, { useState, useEffect } from 'react';
import './items.css';
import axios from 'axios';

export default function PackerMovers({ store }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    axios.get("http://localhost:8082/svc/packers")
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching packers & movers services!");
        setLoading(false);
      });
  }, []);

  const handleSortChange = (e) => setSortOrder(e.target.value);

  const getSortedResult = () => {
    if (sortOrder === "lowToHigh") return [...result].sort((a, b) => a.pcost - b.pcost);
    if (sortOrder === "highToLow") return [...result].sort((a, b) => b.pcost - a.pcost);
    return result;
  };

  const cardAction = (item) => {
    localStorage.setItem("element", JSON.stringify(item));
    store.dispatch({ type: "page", data: "Product" });
  };

  if (loading) return <div>Packers & Movers Services Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="page-wrapper">
      <div className="header">
        <h2>Packers & Movers</h2>
        <div className="filter-placeholder">
          <label htmlFor="sort">Filter:</label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className="card-parent">
        {getSortedResult().map((item) => (
          <div className="card-horizontal" key={item.id} onClick={() => cardAction(item)}>
            <div className="card-img-horizontal">
              <img src={item.pimage} alt="not available" width={200} height={200} />
            </div>
            <div className="card-details">
              <p>{item.pname}</p>
              <p>Rs. {item.pcost}</p>
              <p>{item.pdescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
