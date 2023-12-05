const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {});
    console.log("**** CONEXION CORRECTA ****");
  } catch (error) {
    console.log("**** ERROR DE CONEXION ****", error);
  }
};

module.exports = dbConnect;
