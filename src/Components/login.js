import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: nama,
      password: password,
    };
    await axios.post("http://localhost:8000/user/login", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.token) {
        navigate("/dashboard");
      } else {
        alert("silahkan periksa kembali username dan password");
      }
    });
  };
  return (
    <div>
      <img
        src="./student.jpg"
        alt=" "
        style={{ position: "fixed", zIndex: "-1" }}
      />

      <div
        className="float-end border border-1"
        style={{
          width: "350px",
          height: "600px",
          backgroundColor: "white",
        }}
      >
        <div>
          <div className="mx-5 mt-5 ">
            <div
              style={{
                width: "100px",
                height: "30px",
                backgroundColor: "grey",
                marginBottom: "50px",
              }}
            ></div>
            <h1>Log In</h1>
            <p>
              Silahkan masukkan akun anda untuk mengakses database mahasiswa.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="string"
                placeholder="username"
                onChange={(e) => setNama(e.target.value)}
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                style={{ width: "100%" }}
              />

              <br />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                style={{ width: "100%" }}
              />
              <br />
              <div className="d-flex justify-content-around">
                <Link to="/register">
                  <button className="py-1 px-3 border border-0 rounded-3 border-primary my-1 btn ">
                    Register
                  </button>
                </Link>
                <input
                  type="submit"
                  className="py-1 px-3 border border-2 rounded-3 border-success my-1 btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
