import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Chat from "../src/components/chatfrontend/Chat"

function App() {
  const [globalUserName,setGlobalUserName]= useState("")
  console.log("usernmae is", globalUserName)
  return (
    <div>
      <SignupForm globalUserName={globalUserName} setGlobalUserName={setGlobalUserName}/>
      <LoginForm globalUserName={globalUserName} setGlobalUserName={setGlobalUserName}/>
      <Chat username="dushyant" room = "personal"/>
    </div>
  );
}

export default App;
