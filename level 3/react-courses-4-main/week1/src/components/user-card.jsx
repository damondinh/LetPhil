import React from "react";

export const UserCard = ({ name, age, job }) => {
  function handleClickAlert() {
    alert(name);
  }

  return (
    <div onClick={() => handleClickAlert()}>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{job}</h2>
    </div>
  );
};
