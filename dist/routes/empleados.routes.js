"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empleados = require("../controllers/empleados.controller");
var router = (0, _express.Router)();
router.get('/empleados', _empleados.getEmpleados);
router.post('/empleados', _empleados.createNewEmpleado);
var _default = exports["default"] = router;