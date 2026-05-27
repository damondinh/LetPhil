import React, { useState } from "react";

/**
 * 1. Show name, age, and if they are in school or not
 * 2. If they are in school show the text "Currently going to school" if they aren't show "Not going to school anymore".
 * 3. Extra properties
 * 
 */

export const UserCard = ({ name }) => {
  return <div className="border-2 p-4 bg-red-500">{name}</div>;
};
