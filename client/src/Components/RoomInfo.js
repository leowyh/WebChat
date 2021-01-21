import React from "react";
import "./RoomInfo.css";

const RoomInfo = ({ currentuser, users, room }) => {
  return (
    <div className="">
      <div className="info-content">
        <h1>
          <u>Users</u>
        </h1>
        <h3>
          {users.map((user, i) => (
            <div key={i}>
              {user.userName === currentuser ? (
                <strong>{user.userName} (me)</strong>
              ) : (
                user.userName
              )}
            </div>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default RoomInfo;
