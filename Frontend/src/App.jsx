import { useState } from "react";
import LoginPage from "./Public/loginPage/login";
import RegisterPage from "./Public/registerPage/register";
import Chat from "../src/components/chatfrontend/Chat"
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {

  return (
    <div>
      <RegisterPage />
      <LoginPage />
      <Chat socket ={socket} username="dushyant" room = "personal"/>
    </div>
  );
}

export default App;
