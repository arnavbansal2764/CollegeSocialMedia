import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Chat from "../src/components/chatfrontend/Chat"

function App() {
  return (
    <div>
      <SignupForm />
      <LoginForm />
      <Chat username="dushyant" room = "personal"/>
    </div>
  );
}

export default App;
