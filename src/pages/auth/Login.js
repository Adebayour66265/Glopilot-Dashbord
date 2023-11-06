import React from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
// import Card from '../../component/Card/Card';
import "./Login.css";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleInputChange = () => {};
  // const loginUser = () => {};
  return (
  
      <div className="container">
        <div className="first-div">
          <div className="learnweb3">
            <div className="learn">
              <h1>Glopilot</h1>
            </div>

            <p>Dynamic on-demand transportation</p>
            <p>
              {" "}
              platform that connects passengers with available drivers in
              real-time.
            </p>
          </div>
        </div>
        <div className="second-div">
          <form className="form" id="login">
            {/* <img src={Logo} size={13} /> */}
            <h1 className="form__title">Login</h1>
            <BiLogIn size={30} />

            <div className="form__input-group">
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <PasswordInput
              name="password"
              placeholder="Type password"
              // value={password}
              onChange={handleInputChange}
            />

            {/* <button className="form__button" type="submit">
              Continue
            </button> */}
            <Link className="form__button" to="/dashboard">
            Continue
            </Link>
            <p className="form__text">
              <Link className="form__link" to="/forgot">
                Forgot your password?
              </Link>
            </p>
            {/* <p className="form__text">
              <Link className="form__link" to="/register">
                Don't have an account? Create account
              </Link>
            </p> */}
          </form>
        </div>
      </div>
  );
};

export default Login;
