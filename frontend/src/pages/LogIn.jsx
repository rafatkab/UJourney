import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;