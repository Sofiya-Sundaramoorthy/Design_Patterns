"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./logger");
var instance = logger_1.SingletonLogger.getInstance();
var message = instance.logMessage('Consumer B');
console.log(message);
