import "./App.css";
import JoinRoom from "./Components/JoinRoom";
import ChatRoom from "./Components/ChatRoom";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={JoinRoom}></Route>
      <Route path="/chatroom" component={ChatRoom}></Route>
    </Router>
  );
}

export default App;
