const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate.helpers");

const validateCreate = [
    check('title')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 5, max: 255 }),
    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 5, max: 255 }),
    check('isComplete')
        .exists()
        .isBoolean(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdate = [
    check('title')
        .optional()
        .not()
        .isEmpty()
        .isLength({ min: 5, max: 255 }),
    check('description')
        .optional()
        .not()
        .isEmpty()
        .isLength({ min: 5, max: 255 }),
    check('isComplete')
        .optional()
        .isBoolean(), 
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateDelete = [
    param('id')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Se necesita un id que se encuentre en la base de datos')
        .isNumeric()
        .withMessage('El id debe ser tipo numérico'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = { validateCreate, validateUpdate, validateDelete };
