var client = require('mariasql');
var db = new client({
    host: '192.168.137.200',
    user: 'root',
    password: '111111',
    db: 'pnbox_db'
});

var comport = require('serialport');
var port = new comport('/dev/ttyUSB0', {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    xon: false,
    xoff: false,
    rtscts: false,
    autoOpen: true
});

port.on('error', function (err) {
    console.log('Error creating port:');
    console.dir(err);
});

port.on('close', function() {
    console.log('[comport:close]');
});

port.on('open', function (err) {
    if (err) {
        console.log('Error opening port:');
        console.dir(err);
    }

    console.log('[comport:on]');
    port.write(Buffer.from('comport turn on!\n'));
});

//port.on('drain', function() {
//    console.log('[comport:drain]');
//});

port.on('data', function (data) {
    console.log('Data:', data);

    if (Buffer.isBuffer(data)) {
        //console.log('is buffer');

        var text = data.toString('utf8');

        console.log('Text:', text);

        db.query('insert into `log.comport`(log) values (:text)', {text: text}, function(err, rows) {
            if (err)
                console.dir(err);
            
            //console.dir(rows);
        });

        db.close();
    }
});

//port.on('readable', function () {
//    console.log('Read:', port.read());