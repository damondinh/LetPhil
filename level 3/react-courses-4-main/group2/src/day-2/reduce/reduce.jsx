import React from "react";

const SumNums = () => {
  const nums = [5, 10, 15, 20];

  return <div></div>;
};

const ShoppingCartTotal = () => {
  const cart = [
    { item: "Shirt", price: 25, quantity: 2 },
    { item: "Shoes", price: 60, quantity: 1 },
    { item: "Hat", price: 15, quantity: 3 },
  ];
};

const Transactions = () => {
  const transactions = [
    { type: "deposit", amount: 1000 },
    { type: "withdraw", amount: 200 },
    { type: "deposit", amount: 500 },
    { type: "withdraw", amount: 100 },
  ];
};

const Reduce = () => {
  return <div>Reduce</div>;
};

export default Reduce;
