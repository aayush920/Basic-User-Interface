import React, { useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError]=useState();

  function onNameChangeHandler(event) {
    setName(event.target.value);
  }

  function onAgeChangeHandler(event) {
    setAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0 || +age <= 0) {
      setError(
        {
          title:"Invalid Input",
          message:"Please check the details"
        }
      );

      return;
    }

    props.onAddUser(name, age);
    setName("");
    setAge("");
  }

  function errorHandler(){
    setError(null);
  }
  
  return (
    <>
      {error && <ErrorModal onCloseButtonHandler={errorHandler} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type="text"
            value={name}
            onChange={onNameChangeHandler}
          ></input>
          <label>Age(Years)</label>
          <input
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
