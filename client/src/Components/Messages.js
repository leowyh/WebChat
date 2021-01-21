import React from "react";
import "./Messages.css";

const Messages = ({ messages, currentuser }) => {
  return (
    <div className="message-window">
      {messages.map(({ username, message }, i) => (
        <div key={i}>
          {currentuser === username ? (
            <div className="message-right">
              <div className="message-user">
                <div className="user-photo">
                  <img
                    className="user-photo-img"
                    src="/user-icon.png"
                    alt="no img"
                  ></img>
                </div>
                <div className="user-name">
                  <h5>{username}</h5>
                </div>
              </div>
              <div className="message-text">
                <p>{message}</p>
              </div>
            </div>
          ) : (
            <div className="message-left">
              <div className="message-user">
                <div className="user-photo">
                  <img
                    className="user-photo-img"
                    src="/user-icon.png"
                    alt="no img"
                  ></img>
                </div>
                <div className="user-name">
                  <h5>{username}</h5>
                </div>
              </div>
              <div className="message-text">
                <p>{message}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Messages;
