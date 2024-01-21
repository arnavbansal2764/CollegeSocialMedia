import { useState } from "react";
import LoginPage from "./Public/loginPage/login";
import RegisterPage from "./Public/registerPage/register";
import Chat from "../src/components/chatfrontend/Chat"

function App() {
  return (
    <div>
      <RegisterPage />
      <LoginPage />
      <Chat username="dushyant" room = "personal"/>
    </div>
  );
}

export default App;
