const express = require("express");
const router = express.Router();
const {
  getAllReservations,
  getReservationById,
  createReservation,
  deleteReservation,
} = require("../controllers/reservationController");
const {
  validateCreateItem,
  validateUpdateItem,
  validateGetItemById,
  validateDeleteItem,
} = require("../validators/reservation");

router.get("/", getAllReservations);
router.get("/:id", validateGetItemById, getReservationById);
router.post("/", validateCreateItem, createReservation);
router.delete("/:id", validateDeleteItem, deleteReservation);

module.exports = router;
