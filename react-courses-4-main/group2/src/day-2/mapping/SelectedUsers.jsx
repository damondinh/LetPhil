import React from "react";

const SelectedUsers = ({ selectedUsers }) => {
  return (
    <div>
      {selectedUsers?.map((selectedUser) => (
        <div className="text-red-500">{selectedUser.name}</div>
      ))}
    </div>
  );
};

export default SelectedUsers;
