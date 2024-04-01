export class SingletonLogger {
    private static instance: SingletonLogger;

    public static getInstance() {
        if (!SingletonLogger.instance) {
            SingletonLogger.instance = new SingletonLogger();
        }

        return SingletonLogger.instance;
    }

    public logMessage(message: string): String {
        return `The message is from ${message}`;
    }
}
