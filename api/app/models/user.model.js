module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      username: String,
      password: String,
    },
    {
      timestamps: true,
    }
  );
  return mongoose.model("user", schema);
};
