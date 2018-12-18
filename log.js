var log4js = require('log4js');
log4js.configure({
    appenders: {
        system: {
            type: 'file',
            filename: 'log/system.log'
        },
        debug: {
            type: 'file',
            filename: 'log/debug.log'
        },
        app: {
            type: 'file',
            filename: 'log/app.log'
        }
    },
    categories: {
        default: {
            appenders: ['app'],
            level: 'info'
        },
        debug: {
            appenders: ['debug'],
            level: 'debug'
        },
        info: {
            appenders: ['app'],
            level: 'info'
        }
    }
});

//all, trace, debug, info, warn , error, fatal, mark, off

var _debugger = log4js.getLogger('debug');
var _info = log4js.getLogger('info');

//_debugger.info('_debug:info');
//_debugger.debug('_debug:debug');

//_info.info('_info:info');
//_info.debug('_info:debug');

module.exports = {
    debug: function (msg) {
        _debugger.debug(msg);
    },
    info: function (msg) {
        _info.info(msg);
    }
};
   
