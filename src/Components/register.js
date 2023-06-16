import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: nama,
      password: password,
    };
    await axios.post("http://localhost:8000/user/", data).then(() => {
      navigate("/");
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
        className="float-start border border-1"
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
            <h1>Register</h1>
            <p>Silahkan registerasi data diri anda terlebih dahulu.</p>
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

              <input
                type="submit"
                style={{ width: "100%" }}
                className="py-1 border border-2 rounded-3 border-success my-1 btn btn-success"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
