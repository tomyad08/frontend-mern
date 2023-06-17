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
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "grey",
              marginBottom: "30px",
              marginTop: "20px",
            }}
          ></div>
          <div className="mx-5 p-1 ">
            <h1>Tambah Data</h1>
            <p>Silahkan isi data diri mahasiswa di bawah ini:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setNama(e.target.value)}
                placeholder="nama lengkap"
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                style={{ width: "100%" }}
              />
              <br />
              <select
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                onChange={(e) => setJenis(e.target.value)}
                style={{ width: "100%" }}
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
                style={{ width: "100%" }}
              />{" "}
              <br />
              <input
                type="text"
                onChange={(e) => setTempat(e.target.value)}
                placeholder="tempat lahir"
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                style={{ width: "100%" }}
              />{" "}
              <br />
              <input
                type="text"
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
                className="p-1 border border-2 rounded-3 my-1 btn btn-light"
                style={{ width: "100%" }}
              />
              <br />
              <input
                type="submit"
                className=" btn btn-light border-success py-1 px-5 border border-2 rounded-1 float-end mt-5"
              />
              <Link to="/dashboard">
                <button className=" btn btn-light py-1 px-5 border border-2 border-danger rounded-1 mt-5">
                  Cancel
                </button>
              </Link>
            </form>
          </div>
        </div>
        <div className="col container-fluid">
          <img src="./hijab_work.jpg" alt=" " width="80%" />
        </div>
      </div>
    </div>
  );
};
export default AddData;
