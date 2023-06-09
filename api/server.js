const express = require("express");
const cors = require("cors");
const db = require("./app/models/index.js");
const app = express();

const corsOption = {
  origin: "*",
};

//register middleware
app.use(cors(corsOption));
app.use(express.json());

//connect ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`gagal connect ${err.message}`);
    process.exit();
  });

require("./app/routes/mahasiswa.routes.js")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server ${PORT}`));

module.exports = app;
