"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmpleados = exports.createNewEmpleado = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var _mssql = _interopRequireDefault(require("mssql"));
var getEmpleados = exports.getEmpleados = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context.sent;
          _context.next = 5;
          return pool.request().output('OutResultCode', _mssql["default"].Int).execute('dbo.ListarEmpleados');
        case 5:
          result = _context.sent;
          console.log(result.recordset);
          return _context.abrupt("return", res.json(result.recordset));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getEmpleados(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewEmpleado = exports.createNewEmpleado = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre, salario, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, salario = _req$body.salario;
          if (!(nombre == null || salario == null)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Please fill all fields'
          }));
        case 3:
          console.log(nombre, salario);
          _context2.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input('inNombre', _mssql["default"].VarChar, nombre).input('inSalario', _mssql["default"].Money, salario).output('OutResultCode', _mssql["default"].Int, 0).execute('dbo.InsertarEmpleado');
        case 9:
          result = _context2.sent;
          console.log(result.recordset);
          return _context2.abrupt("return", result.recordset);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createNewEmpleado(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();