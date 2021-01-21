import React, { useState } from "react";
import "./InputBar.css";

const InputBar = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("submit messages");
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="wrapper">
      <form onSubmit={onSubmitHandler}>
        <input
          className="form-control"
          type="text"
          value={message}
          placeholder="Type your message here"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={onSubmitHandler}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default InputBar;
