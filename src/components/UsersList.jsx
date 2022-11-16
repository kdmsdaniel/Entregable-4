import React from "react";

const UsersList = ({ usersList, selectUsers}) => {
  
  return (
    <ul>
        {usersList.map((users) => (
        <li key={users.id}>
          <h3>{users.first_name}</h3>
          <div><b>last name </b>{users.last_name}</div>
          <div><b>Email: </b>{users.email}</div>
          <div><b>birthday: </b>{users.birthday}</div>
          <button onClick={() => selectUsers(users)}>Select</button>
   
        </li>
      ))}
    </ul>
  );
};

export default UsersList;