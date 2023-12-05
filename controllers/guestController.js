const guest = require('../models/nosql/guestModel');
const { getItems, getItemById, createItem, deleteItem } = require('../utils/handleFactory');

exports.getAllGuests = getItems(guest);
exports.getGuestById = getItemById(guest);
exports.createGuest = createItem(guest);
exports.deleteGuest = deleteItem(guest);
