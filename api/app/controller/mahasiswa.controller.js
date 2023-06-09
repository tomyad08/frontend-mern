const db = require("../models");
const Mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);
  Mahasiswa.create(req.body)
    .then(() => res.send({ message: "Data berhasil di simpan" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findAll = async (req, res) => {
  try {
    const data = await Mahasiswa.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Mahasiswa.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat mengupdate data" });
      }
      res.send({ message: "Data berhasil diupdate" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Mahasiswa.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak ada data yang dihapus" });
      }
      res.send({ message: "Data berhasil dihapus" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
