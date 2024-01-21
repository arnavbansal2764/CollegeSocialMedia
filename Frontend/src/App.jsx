import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Chat from "../src/components/chatfrontend/Chat";

function App() {
  const [globalUserName, setGlobalUserName] = useState("");
  const [globalCollege, setGlobalCollege] = useState("");
  console.log("usernmae is", globalUserName);
  return (
    <div>
      <SignupForm
        globalUserName={globalUserName}
        setGlobalUserName={setGlobalUserName}
        globalCollege={globalCollege}
        setGlobalCollege={setGlobalCollege}
      />
      <LoginForm
        globalUserName={globalUserName}
        setGlobalUserName={setGlobalUserName}
        globalCollege={globalCollege}
        setGlobalCollege={setGlobalCollege}
      />
      <Chat username={globalUserName} room="personal" />
      <Chat username="dushy" room="personal" /> 
    </div>
  );
}

export default App;
