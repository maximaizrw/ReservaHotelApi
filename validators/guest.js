const { check } = require("express-validator");
const validateResults = require("../utils/handleValidators");

const validateCreateItem = [
  check("name").exists().notEmpty(),
  check("surname").exists().notEmpty(),
  check("dateOrBirth").exists().notEmpty(),
  check("nationality").exists().notEmpty(),
  check("phoneNumber").exists().notEmpty(),
  check("idReservation").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

const validateUpdateItem = [
  check("name").optional().notEmpty(),
  check("surname").optional().notEmpty(),
  check("dateOrBirth").optional().notEmpty(),
  check("nationality").optional().notEmpty(),
  check("phoneNumber").optional().notEmpty(),
  check("idReservation").optional().notEmpty().isMongoId(),
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
