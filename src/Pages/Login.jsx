import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ebay from "../img/ebay.png";
import customer from "../img/customer.png";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';



export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getToken() {
    axios({
      url: "https://dummyjson.com/auth/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: "atuny0",
        password: "9uQFF1Lh",
      }),
    })
      .then((res) => {
        dispatch({
          type: "change",
          payload: res.data,
        });
        toast.info("Registered successfully!");
        navigate("/products");
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Error");
      });
  }

  return (
    <div className="row">
      <div className="col-5">
        <div className="container login">
          <img src={ebay} className="ebay" alt="" />
          <div>
            <h1>Sign in</h1>
            <label htmlFor="">Username</label>
            <br />
            <input
              type="text"
              placeholder="Login"
              onInput={(item) => {
                setUsername(item.target.value);
              }}
            />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              placeholder="******"
              onInput={(item) => {
                setPassword(item.target.value);
              }}
            />{" "}
            <br />
            <button onClick={getToken} className="btn btn-primary mt-3">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="col-7 col-sm-2 col-lg-7 h-100">
        <img src={customer} alt="" />
      </div>
    </div>
  );
}
