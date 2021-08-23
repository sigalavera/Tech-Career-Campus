
import React from 'react'
import "./Login.css";


 

const Login = () => {
  return (
    <div className="login">
      <div className="login-user">
        <form>
          <input type="text" placeholder="Email Adress" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
