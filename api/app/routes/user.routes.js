const user = require("../controller/user.controller");

module.exports = (app) => {
  const r = require("express").Router();

  r.get("/", user.findAll);
  // r.get("/:id", mahasiswa.show);
  r.post("/", user.create);
  r.post("/login", user.findOne);
  // r.put("/:id", mahasiswa.update);
  // r.delete("/:id", mahasiswa.delete);

  app.use("/user", r);
};
