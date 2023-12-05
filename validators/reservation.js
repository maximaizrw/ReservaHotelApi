const { check } = require("express-validator");
const validateResults = require("../utils/handleValidators");

const validateCreateItem = [
  check("checkIn").exists().notEmpty(),
  check("checkOut").exists().notEmpty(),
  check("room").exists().notEmpty(),
  check("price").exists().notEmpty(),
  check("paymentMethod").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validateUpdateItem = [
  check("checkIn").optional().notEmpty(),
  check("checkOut").optional().notEmpty(),
  check("room").optional().notEmpty(),
  check("price").optional().notEmpty(),
  check("paymentMethod").optional().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validateGetItemById = [
  check("id").exists().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

const validateDeleteItem = [
  check("id").exists().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = {
  validateCreateItem,
  validateUpdateItem,
  validateGetItemById,
  validateDeleteItem,
};
