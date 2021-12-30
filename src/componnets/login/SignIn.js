import { useState } from "react";
import "./Login.css";

const SignIn = ({ setIsLogin }) => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPassword] = useState("");

  console.log("SignIn", emailLogin, passwordLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form-form">
      <h1 className="login-form-form__title">Sign In</h1>
      <div className="login-form__form">
        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
          <span className="span-let">
            Don't have on account?
            <p onClick={() => setIsLogin(false)}>Sign Up</p>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
