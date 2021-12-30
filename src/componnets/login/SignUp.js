import { useState } from "react";
import "./Login.css";

const SignUp = ({ setIsLogin }) => {
  const [usernameLogin, setusernameLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPassword] = useState("");

  console.log("SignUp", usernameLogin, emailLogin, passwordLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form-form">
      <h1 className="login-form-form__title">Sign Up</h1>
      <div className="login-form__form">
        <form onSubmit={handleSubmit}>
          <div className="login-form__form__input">
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              value={usernameLogin}
              onChange={(e) => setusernameLogin(e.target.value)}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="login-form__form__input">
            <input
              type="text"
              name="name"
              autoComplete="off"
              required
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>

          <div className="login-form__form__input">
            <input
              type="text"
              name="name"
              autoComplete="off"
              required
              value={passwordLogin}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Password</span>
            </label>
          </div>
          <button className="login-form__form__btn" type="submit">
            Sign Up
          </button>
          <span className="span-let">
            Have an account?
            <p onClick={() => setIsLogin(true)}>Sign In</p>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
