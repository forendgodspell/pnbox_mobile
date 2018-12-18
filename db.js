var client = require('mariasql');
var connection = new client({
    host: '192.168.137.200',
    user: 'root',
    password: '111111',
    db: 'pnbox_db'
});

connection.on('error', function (err) {
    if (err)
        console.log('[db connection:error]');
        console.dir(err);
});

connection.on('ready', function () {
    console.log('[db connection:ready]');
});

connection.on('end', function () {
    console.log('[db connection:end]');
});

connection.on('close', function () {
    console.log('[db connection:close]');
});

var q = connection.query('select * from `log.comport`');

q.on('result', function (res) {
    if (typeof res === "undefined") {
        return;
    }

    var info = res.info;
    var rowcount = info.numRows;
    console.log('[query:result]:[' + rowcount + ' rows]');

    res.on('data', function (row) {
        console.dir(row);
    });
});

//connection.query('show databases', null, { useArray: true }, function (err, rows) {
//    return;

//    // (err)
//        //throw err;

//    if (err) {
//        console('[query:error]');
//        console.dir(err);
//        console.log('Error on query database: ' + err.message);
//    } else {
//        console.log('[query:result]');
//        console.dir(rows);
//        console.log('Rows[0]: ' + rows[0]);
//    }
//});

//var q = connection.query('select * from user');
//q.on('result', function (res) {
//    return;

//    console.log('[query:result]');
//    console.dir(res);

//    res.on('data', function (row) {
//        console.log('[query:result:index[' + '' + ']]')
//        console.dir(row);
//    });

//    res.on('end', function () {
//        console.log('read rows finished!')
//    });

//    res.on('error', function (err) {
//        console.log('[query:result:error]');
//        console.dir(err);
//    });
//}).on('end', function () {
//    console.log('read result finished!');
//});

connection.end();
