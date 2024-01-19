import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./Public/loginPage/login";
import RegisterPage from "./Public/registerPage/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RegisterPage />
    </div>
  );
}

export default App;
