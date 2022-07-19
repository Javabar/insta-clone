import { useState } from "react";
import { Navigate } from "react-router-dom";
import { signUp } from "../utlis";

const SignOrLog = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginBool, setLoginBool] = useState(false); // new

  const submitHandler = async (e) => {
    e.preventDefault();
    await signUp(username, email, password, setter);
  };

  return (
    <div>
      {!user && <Navigate to="/Photos" />}
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!loginBool && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eMail"
          />
        )}
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">{loginBool ? "Log In" : "Sign Up"}</button>
      </form>
      <button onClick={() => setLoginBool(!loginBool)}>
        {loginBool ? "Don't " : "Already "} have an account?
      </button>
    </div>
  );
};

export default SignOrLog;