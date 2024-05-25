import React, { useEffect, useState } from "react";
import { fetchData } from "../Apis";
import "../App.css";
import LoaderComp from "./LoaderComp";

const Quotes = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchIt, setFetchIt] = useState(false);
  const [loading, setLoading] = useState(false);

  //   Fetching data from api/index file
  const fetchQuoteData = async () => {
    if (!category) {
      alert("Enter a word first!!!");
    } else {
      try {
        const apiData = await fetchData(category);
        setData(apiData);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setData([]);
      }
    }
  };

  //   handle click make the fetchIt to true
  //   cause the useEfect will cal once when this is true
  //   category is cause of loading
  const handleClick = () => {
    setFetchIt(true);
    category ? setLoading(true) : setLoading(false);
  };

  // When the component mounts the useEffect will not be called
  // cause of the condition when it is true then it will be called
  useEffect(() => {
    if (fetchIt) {
      fetchQuoteData();
      setFetchIt(false);
    }
  }, [fetchIt]);

  return (
    <div className="main-div">
      <h1>Quote Generator!</h1>
      <br />
      <p>
        Write A single word & Click{" "}
        <strong style={{ color: "yellow", fontStyle: "italic" }}>
          Get Quote
        </strong>{" "}
        button to get a Quote about that word
      </p>

      <div className="input-button">
        <input
          className="input-field"
          type="text"
          placeholder="Enter Word"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={handleClick}>Get Quote</button>
      </div>

      {/* If loading is true then Loader Component will render if not then the other */}
      {loading ? (
        <LoaderComp />
      ) : (
        <div className="quote-div">
          {error && <p>Error: {error}</p>}
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <p>
                  <strong style={{color: "wheat"}}>Quote: </strong>
                  {item.quote}
                </p>
                <p style={{color: "yellow"}}>
                  Author: <strong style={{ color: "yellowgreen", fontStyle: "italic" }}>
                    {item.author}
                  </strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
