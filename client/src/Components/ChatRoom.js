import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Messages from "./Messages";
import InputBar from "./InputBar";
import RoomInfo from "./RoomInfo";
import { io } from "socket.io-client";
import "./ChatRoom.css";
const querystring = require("querystring");

let socket;

const ChatRoom = () => {
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState("");
  const [currentuser, setCurrentUser] = useState("");
  const [messages, setMessages] = useState([]);

  let location = useLocation();

  // when page is first rendered
  useEffect(() => {
    const server = "http://localhost:5000/";
    socket = io(server);

    // update room
    console.log(location.search);
    const { userName, roomName } = querystring.parse(location.search.substr(1));
    console.log(userName, roomName);
    // setup for connection
    socket.emit("join", { userName, roomName });

    setCurrentUser(userName);
    setRoom(roomName);
    console.log(socket);

    // listener for setting room users
    socket.on("roomUsers", (roomUsers) => {
      console.log("updating users");
      setUsers(roomUsers);
    });

    // listener for setting messages
    socket.on("new message", (messageData) => {
      console.log("updating message");
      console.log(messageData);
      setMessages((messages) => [...messages, messageData]);
    });
  }, []);

  useEffect(() => {
    console.log("users updated");
    console.log(users);
  }, [users]);

  const sendMessage = (message) => {
    socket.emit("new message", message);
  };

  return (
    <div className="outer-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 left-section">
            <RoomInfo currentuser={currentuser} users={users} room={room} />
          </div>
          <div className="col-9 right-section">
            <h1>Messaging Section</h1>
            <Messages messages={messages} currentuser={currentuser} />
            <InputBar sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
