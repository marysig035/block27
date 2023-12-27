import './App.css'
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
import { useState } from "react";

export default function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

