var winston = require('winston');

module.exports.getLogger = function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize:   true,
                level:      'debug',
                label:      path
            }),
            new winston.transports.File({
                filename: 'data/all-logs.log',
                level: 'debug'
            })
        ]
    });
}

module.exports.getExceptionLogger  = function() {
    return new winston.Logger({
        exitOnError: false,
        transports : [
            new winston.transports.Console({
                colorize:   true,
                level:      'error',
                label:      'Exception'
            }),
            new winston.transports.File({
                filename: 'data/exceptions.log',
                level: 'error'
            })
        ]
    });
}
