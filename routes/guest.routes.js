const express = require("express");
const router = express.Router();
const {
  getAllGuests,
  getGuestById,
  createGuest,
  deleteGuest,
} = require("../controllers/guestController");
const {
  validateCreateItem,
  validateUpdateItem,
  validateGetItemById,
  validateDeleteItem,
} = require("../validators/guest");

router.get("/", getAllGuests);
router.get("/:id", validateGetItemById, getGuestById);
router.post("/", validateCreateItem, createGuest);
router.delete("/:id", validateDeleteItem, deleteGuest);

module.exports = router;
