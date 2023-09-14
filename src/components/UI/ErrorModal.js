import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card.js";
import Button from "./Button.js";

function Errormodal(props) {

  return (
    <>
      <div className={classes.backdrop} onClick={props.onCloseButtonHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseButtonHandler}>Close</Button>
        </footer>
      </Card>
    </>
  );
}

export default Errormodal;
