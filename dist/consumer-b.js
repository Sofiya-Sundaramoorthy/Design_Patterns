"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerA = void 0;
const logger_1 = require("./logger");
class ConsumerA {
    constructor() {
        const instance = logger_1.SingletonLogger.getInstance();
        const message = instance.logMessage('Consumer B');
        console.log(message);
    }
}
exports.ConsumerA = ConsumerA;
//# sourceMappingURL=consumer-b.js.map