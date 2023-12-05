const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    checkIn: Date,
    checkOut: Date,
    room: Number,
    price: Number,
    paymentMethod: String, enum: ["cash", "credit card", "debit card"],
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;