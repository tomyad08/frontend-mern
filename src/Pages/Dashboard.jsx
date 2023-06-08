import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(" ");
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container-fluid">
      {!loading ? (
        <div>
          <Link to="/add">
            <button className="btn">Tambah Data</button>
          </Link>
          <table>
            <tr>
              <th className="border border-2 p-1">id</th>
              <th className="border border-2 p-1">Nama Lengkap</th>
              <th className="border border-2 p-1">Jenis Kelamin</th>
              <th className="border border-2 p-1">Tanggal Lahir</th>
              <th className="border border-2 p-1">Tempat Lahir</th>
              <th className="border border-2 p-1">Alamat</th>
              <th className="border border-2 p-1">Edit</th>
              <th className="border border-2 p-1">Hapus</th>
            </tr>
            {data?.map((value) => (
              <tr key={value.id} className="border border-2">
                <td className="border border-2 p-1">{value.id}</td>
                <td className="border border-2 p-1">{value.nama_lengkap}</td>
                <td className="border border-2 p-1">{value.jenis_kelamin}</td>
                <td className="border border-2 p-1">{value.tanggal_lahir}</td>
                <td className="border border-2 p-1">{value.tempat_lahir}</td>
                <td className="border border-2 p-1">{value.alamat}</td>
                <th>
                  <button
                    className="btn border border-2 py-2 px-3"
                    onClick={() => handleEdit(value)}
                  >
                    Edit
                  </button>
                </th>
                <th>
                  <button className="btn border border-2 py-2 px-3">
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
  );
};
export default Dashboard;
