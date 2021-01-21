import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./JoinRoom.css";

const JoinRoom = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  let history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("submit data", userName, roomName);

    history.push(`/chatroom?userName=${userName}&roomName=${roomName}`);
  };

  return (
    <>
      <div className="outer-container">
        <div className="container col-md-6 col-sm-12">
          <h1 className="text-center md-6">Welcome to WebChat!</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label className="form-label">Room</label>
              <input
                className="form-control mb-3"
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={onSubmitHandler}
              >
                Join Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
