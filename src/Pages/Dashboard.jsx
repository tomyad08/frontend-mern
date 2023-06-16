import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(" ");
  const [loading, setLoading] = useState(true);
  const [npm, setNpm] = useState(" ");

  useEffect(() => {
    dataMahasiswa();
  }, []);

  const dataMahasiswa = async () => {
    await axios.get(API.DATA_MAHASISWA).then((value) => {
      setData(value.data);
      setLoading(false);
    });
  };

  const handleEdit = (value) => {
    navigate("/edit", {
      state: value,
    });
  };

  const handleHapus = async (value) => {
    await axios.delete(API.DATA_MAHASISWA + `${value}`);
    alert("silahkan di refresh");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div
        className=" py-3 container-fluid"
        style={{ backgroundColor: "#2c12bc" }}
      >
        <button className="float-end btn btn-danger" onClick={handleLogout}>
          Log Out
        </button>
        <div
          style={{ backgroundColor: "grey", width: "100px", height: "30px" }}
        ></div>
      </div>

      <div className="d-flex justify-content-center ">
        {!loading ? (
          <div>
            <h1>Dashboard Data Mahasiswa</h1>
            <h5>Universitas Sebelah</h5>

            <input
              type="string"
              className="px-3 py-1 my-2 border border-0 btn btn-light border-dark rounded-5 float-end"
              style={{ color: "black" }}
              placeholder="seacrh NPM ..."
              onChange={(e) => setNpm(e.target.value)}
            />

            <Link to="/add">
              <button className="btn btn-primary border border-black border-0 rounded-2 my-3">
                + Tambah Data
              </button>
            </Link>

            <table>
              <tr>
                <th id="th">Nomor Induk Mahasiswa (NPM)</th>
                <th id="th">Nama Lengkap</th>
                <th id="th">Jenis Kelamin</th>
                <th id="th">Tanggal Lahir</th>
                <th id="th">Tempat Lahir</th>
                <th id="th">Alamat</th>
                <th id="th">Edit</th>
                <th id="th">Hapus</th>
              </tr>
              {data
                ?.filter((value) => {
                  if (npm === " ") {
                    return value;
                  } else if (value.id.includes(npm)) {
                    return value;
                  }
                })
                .map((value) => (
                  <tr
                    key={value.id}
                    className="border border-1 px-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <td id="td">{value.id}</td>
                    <td id="td">{value.nama_lengkap}</td>
                    <td id="td">{value.jenis_kelamin}</td>
                    <td id="td">{value.tanggal_lahir.substring(0, 10)}</td>
                    <td id="td">{value.tempat_lahir}</td>
                    <td id="td">{value.alamat}</td>
                    <th id="td">
                      <button
                        className="btn btn-primary border border-0 border-black py-2 px-3"
                        onClick={() => handleEdit(value)}
                      >
                        Edit
                      </button>
                    </th>
                    <th id="td">
                      <button
                        className="btn btn-danger border border-0 border-black py-2 px-3"
                        onClick={() => handleHapus(value.id)}
                      >
                        Hapus
                      </button>
                    </th>
                  </tr>
                ))}
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
