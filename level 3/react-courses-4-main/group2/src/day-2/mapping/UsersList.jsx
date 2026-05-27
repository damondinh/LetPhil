/**
 * Create a small user profile card, using the users list. Map over the elements and return the user's name inside of a span tag
 */

export const UsersList = ({ users, addNewSelectedUser }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div className="flex flex-row gap-2 border border-2-white">
            <p>{user.employeeId}</p>
            <p>{user.name}</p>
            <button
              onClick={() => addNewSelectedUser(user)}
            >
              Add User
            </button>
            <br />
          </div>
        );
      })}
    </>
  );
};
