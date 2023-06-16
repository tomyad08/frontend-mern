const jwt = require("jsonwebtoken");
const db = require("../models/indexUser");
const User = db.user;

exports.findAll = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.create = (req, res) => {
  User.create(req.body);
  res.json({ message: "berhasil" });
};

exports.findOne = async (req, res) => {
  const admin = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        username: admin.username,
        password: admin.password,
      },
      "secret123"
    );
    return res.json({
      status: "success",
      token: token,
    });
  } else {
    return res.json({
      message: "error, silahkan perikasa username dan password",
    });
  }
};
