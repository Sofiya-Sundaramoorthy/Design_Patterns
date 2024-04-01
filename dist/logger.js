"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonLogger = void 0;
class SingletonLogger {
    static getInstance() {
        if (!SingletonLogger.instance) {
            SingletonLogger.instance = new SingletonLogger();
        }
        return SingletonLogger.instance;
    }
    logMessage(message) {
        return `The message is from ${message}`;
    }
}
exports.SingletonLogger = SingletonLogger;
//# sourceMappingURL=logger.js.map