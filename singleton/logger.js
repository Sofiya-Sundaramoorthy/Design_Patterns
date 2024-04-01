"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonLogger = void 0;
var SingletonLogger = /** @class */ (function () {
    function SingletonLogger() {
    }
    SingletonLogger.getInstance = function () {
        if (!SingletonLogger.instance) {
            SingletonLogger.instance = new SingletonLogger();
        }
        return SingletonLogger.instance;
    };
    SingletonLogger.prototype.logMessage = function (message) {
        return "The message is from ".concat(message);
    };
    return SingletonLogger;
}());
exports.SingletonLogger = SingletonLogger;
