import React, { useState } from "react";

/**
 * "In Stock" | "Out of Stock"
 */

const OutOfStockItem = () => {
  const isInStock = false;

  return (
    <div>
      <h2>Chicken Quesadilla</h2>
      <h3>Price: $12.99</h3>
      <p></p>
    </div>
  );
};

// dark theme = red text, light theme blue

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <button>Change Theme</button>
      <div>The current theme is changing</div>
    </>
  );
};

const LoggedInUser = () => {
  const isLoggedIn = false;

  return <div></div>;
};

const ConditionalRendering = () => {
  return <div></div>;
};

export default ConditionalRendering;
