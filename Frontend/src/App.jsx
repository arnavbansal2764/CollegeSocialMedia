import { useState } from "react";
import LoginPage from "./Public/loginPage/login";
import RegisterPage from "./Public/registerPage/register";
import Chat from "../src/components/chatfrontend/Chat"
import io from "socket.io-client";

const socket1 = io.connect("http://localhost:3001");
const socket2 = io.connect("http://localhost:3001");

function App() {
  return (
    <div>
      <RegisterPage />
      <LoginPage />
      <Chat socket ={socket1} username="dushyant" room = "personal"/>
      <Chat socket ={socket2} username="arnav" room = "personal"/>
    </div>
  );
}

export default App;
