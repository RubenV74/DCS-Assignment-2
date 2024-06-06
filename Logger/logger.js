const winston = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

class Logger {
    constructor(filename) {
        this.logger = winston.createLogger({
            level:'info',
            format: combine(
                timestamp(),
                myFormat),
            transports:[
                new winston.transports.Console(),
                new winston.transports.DailyRotateFile({ filename: `log/${filename}-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD-HH',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles:'14d'})
            ]
        });
    }

    info(label, message){
        this.logger.log({level: 'info',
            label: label,
            message: message});
    }

    error(label, message){
        this.logger.log({level: 'error',
            label: label,
            message: message});
    }
}

module.exports = new Logger("error");