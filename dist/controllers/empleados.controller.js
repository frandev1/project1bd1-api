"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmpleados = exports.createNewEmpleado = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _repo = require("../repo/repo");
var _connection = require("../database/connection");
var _mssql = _interopRequireDefault(require("mssql"));
var getEmpleados = exports.getEmpleados = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var empleados;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _repo.ListarEmpleadosRepo)();
        case 3:
          empleados = _context.sent;
          res.status(200).json({
            empleados: empleados
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            msg: 'Internal Server Error'
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
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
          _context2.prev = 0;
          _req$body = req.body, nombre = _req$body.nombre, salario = _req$body.salario;
          if (!(nombre == null || salario == null)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Please fill all fields'
          }));
        case 4:
          console.log(nombre, salario);
          _context2.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context2.sent;
          _context2.next = 10;
          return pool.request().input('inNombre', _mssql["default"].VarChar, nombre).input('inSalario', _mssql["default"].Money, salario).output('OutResultCode', _mssql["default"].Int, 0).execute('dbo.InsertarEmpleado');
        case 10:
          result = _context2.sent;
          console.log(result.output.OutResultCode);
          if (result.output.OutResultCode == 0) {
            res.status(200).json({
              msg: 'Empleado creado correctamente'
            });
          } else {
            res.status(400).json({
              msg: 'Error al crear el empleado'
            });
          }
          _context2.next = 20;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          console.error('Error al llamar al stored procedure');
          res.status(500).json({
            msg: 'Internal Server Error'
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return function createNewEmpleado(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();