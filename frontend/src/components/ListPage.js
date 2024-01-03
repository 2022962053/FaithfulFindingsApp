// App.js

import React, { useState, useEffect } from "react";
import "./List.css"; // Import the CSS file

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/list");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  if (loading) {
    return React.createElement("div", null, "Loading...");
  }

  if (error) {
    return React.createElement("div", null, `Error: ${error}`);
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h1", { className: "h1" }, "Ceramah List"),
    React.createElement(
      "table",
      { className: "bordered-table" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement("th", null, "Title"),
          React.createElement("th", null, "Date"),
          React.createElement("th", null, "Time"),
          React.createElement("th", null, "Place")
          // Add more columns as needed
        )
      ),
      React.createElement(
        "tbody",
        null,
        data.map((item) =>
          React.createElement(
            "tr",
            { key: item.id },
            React.createElement("td", null, item.Title),
            React.createElement("td", null, item.Date),
            React.createElement("td", null, item.Time),
            React.createElement("td", null, item.Place,
            React.createElement("button", { onClick: () => handleMoreInfoClick(item.Link) },
            React.createElement("span", null, "\u2192")
              )
            )
            // Add more columns as needed
          )
        )
      )
    )
  );
};

const handleMoreInfoClick = (Link) => {
  // Redirect to the specified link
  window.location.href = Link;
};

// const handleMoreInfoClick = (id) => {
//   // Implement logic to show more information for the selected item
//   console.log(Show more info for item with ID ${id});
// };

export default List;