"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const instance = logger_1.SingletonLogger.getInstance();
const message = instance.logMessage('Consumer A');
console.log(message);
//# sourceMappingURL=consumer-a.js.map