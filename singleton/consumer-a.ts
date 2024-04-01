import { SingletonLogger } from './logger';

const instance = SingletonLogger.getInstance();
const message = instance.logMessage('Consumer A');
console.log(message);
