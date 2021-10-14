import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import "./Login.css";

function Login() {
  const [username, setUser] = useState({ username: "", password: "" });
  let history = useHistory();
  const [details, setDetails] = useState({ username: "", password: "" });

  const Logout = () => {
    setUser({ username: "", password: "" });
  };

  const handlerOnLogin = () => {
    const passwordDB = window.btoa(details.username + ":" + details.password);
    axios
      .post("http://localhost:8080/authenticate", {
        username: details.username,
        password: passwordDB,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          history.push("/home");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <img src="https://lh3.googleusercontent.com/proxy/yAGZLDun1AzRvC0OibAdprB0ucgK1UHCJydr6-oMsXbbLPIrQPYvKDZS-Yhvi_ntpZ1JNqp6xxOo1TyqEysWpvY" />
      </div>
      <form>
        <div className="form-inner">
          <h2>HỆ THỐNG QUẢN LÍ THƯ VIỆN</h2>
          <div className="login">
            <label htmlFor="username">Tài khoản: </label>
            <input
              type="username"
              name="username"
              id="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
          </div>
          <div className="login">
            <label htmlFor="password">Mật khẩu: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input onClick={handlerOnLogin} type="button" value="Đăng nhập" />
          <input onClick type="button" value="Đăng kí" />
        </div>
      </form>
    </>
  );
}

export default Login;
