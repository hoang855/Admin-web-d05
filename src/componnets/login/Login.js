import "./Login.css";
import "antd/dist/antd.css";
import { Image } from "antd";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="logi-container">
      <div className="login-form">
        <Image
          width={"45%"}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        {isLogin === false ? (
          <SignUp setIsLogin={setIsLogin} />
        ) : (
          <SignIn setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
