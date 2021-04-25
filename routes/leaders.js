/*
    path: /api/leaders
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { leadersList, leadersAdd } = require('../controllers/leaders');
const router = Router();

router.get('', [], leadersList);

router.post('', [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('value','Las salchichas son obligatorias').not().isEmpty().isInt(),
    check('volume','El volumen del estomago es obligatorio').not().isEmpty().isDecimal(),
],
leadersAdd);

module.exports=router;