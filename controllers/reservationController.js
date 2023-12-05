const reservation = require('../models/nosql/reservationModel');
const { getItems, getItemById, createItem, deleteItem } = require('../utils/handleFactory');

exports.getAllReservations = getItems(reservation);
exports.getReservationById = getItemById(reservation);
exports.createReservation = createItem(reservation);
exports.deleteReservation = deleteItem(reservation);    
