import React, { useState } from "react";
import AddUser from "./components/Users/AddUser.js";
import UserList from "./components/Users/UserList.js";

function App() {
  let id = 0;

  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUsersList((prevUsersList) => {
      id++;
      return [...prevUsersList, { name: uName, age: uAge, id: id }];
    });
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}
export default App;
