const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    dateOrBirth: Date,
    nationality: String,
    phoneNumber: String,
    idReservation: mongoose.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
