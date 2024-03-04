"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  "port": process.env.PORT || 3000,
  "server": process.env.DBserver || '',
  "user": process.env.DBuser || '',
  "password": process.env.DBpassword || '',
  "database": process.env.DBdatabase || ''
};