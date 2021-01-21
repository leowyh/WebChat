let users = [];

const addUser = (socketId, userName, roomName) => {
  const user = {
    socketId,
    userName,
    roomName,
  };

  users.push(user);
  return user;
};

const removeUser = (id) => {
  const index = users.findIndex((users) => users.socketId === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  } else {
    console.log("removeUser error: No user found");
  }
};

const getUsers = (room) => {
  return users.filter((user) => user.roomName === room);
};

const getCurrentUser = (id) => {
  return users.find((user) => user.socketId === id);
};

module.exports = {
  addUser,
  removeUser,
  getUsers,
  getCurrentUser,
};
