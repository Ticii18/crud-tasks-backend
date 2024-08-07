const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validate.helpers");

const validateCreate = [
    check('title')
        .exists()
        .not()
        .isEmpty(),
    check('description')
        .exists()
        .not()
        .isEmpty(),
    check('isComplete')
        .exists()
        .isEmpty()
        .not()
        .isBoolean(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdate = [
    check('title')
        .optional()
        .not()
        .isEmpty(),
    check('description')
        .optional()
        .not()
        .isEmpty(),
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
