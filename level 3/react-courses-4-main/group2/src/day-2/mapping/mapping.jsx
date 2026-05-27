import React, { useState, useEffect } from "react";

/**
 * Using map return a list of all the numbers in nums doubled. put them in a <p></p> tag
 */

export const DoubleNum = () => {
  const nums = [1, 2, 3, 4, 5];

  return (
    <>
    </>
  );
};

/**
 * Return the elements in the frameworks array each as a div element
 */

export const JSXElements = () => {
  const frameworks = ["react", "vue", "angular"];

  return (
    <>
    </>
  );
};

// Component mapping.jsx
import { UsersList } from "./UsersList";
import SelectedUsers from "./SelectedUsers";

const Mapping = () => {
  // [selectedUsers] => read only
  // [setSelectedUsers] => function to update selectedUsers
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [name, setName] = useState('Chris');

  // spread operator
  
  const users = [
    { employeeId: 1, name: "Alice" },
    { employeeId: 2, name: "Bob" },
    { employeeId: 3, name: "Charlie" },
  ];

  return (
    <div>
      {/* <UsersList users={users} addNewSelectedUser={addNewSelectedUser} />
      <SelectedUsers selectedUsers={selectedUsers} /> */}
    </div>
  );
};

export default Mapping;
