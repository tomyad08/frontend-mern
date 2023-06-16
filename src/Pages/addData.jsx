import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState(" ");
  const [jenis, setJenis] = useState(" ");
  const [tanggal, setTanggal] = useState(" ");
  const [tempat, setTempat] = useState(" ");
  const [alamat, setAlamat] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      nama === " " &&
      jenis === " " &&
      tanggal === " " &&
      tempat === " " &&
      alamat === " "
    ) {
      return alert("isi data secara lengkap");
    } else {
      await axios.post(API.ADD_MAHASISWA, {
        nama_lengkap: nama,
        jenis_kelamin: jenis,
        tanggal_lahir: tanggal,
        tempat_lahir: tempat,
        alamat: alamat,
      });
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div
        className=" py-3 container-fluid"
        style={{ backgroundColor: "#2c12bc" }}
      >
        <div
          style={{ backgroundColor: "grey", width: "100px", height: "30px" }}
        ></div>
      </div>
      <div className="mx-5">
        <div
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "grey",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        ></div>
        <h1>Tambah Data</h1>
        <p>Silahkan isi data diri mahasiswa di bawah ini:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNama(e.target.value)}
            placeholder="nama lengkap"
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />
          <select
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            onChange={(e) => setJenis(e.target.value)}
            style={{ width: "20%" }}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setTanggal(e.target.value)}
            placeholder="tanggal lahir, 08-04-1998"
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />{" "}
          <input
            type="text"
            onChange={(e) => setTempat(e.target.value)}
            placeholder="tempat lahir"
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "40%" }}
          />
          <br />
          <Link to="/dashboard">
            <button className=" btn btn-danger py-1 px-3 border border-0 rounded-1 me-2">
              Cancel
            </button>
          </Link>
          <input
            type="submit"
            className=" btn btn-success py-1 px-3 border border-0 rounded-1"
          />
        </form>
      </div>
    </div>
  );
};
export default AddData;
