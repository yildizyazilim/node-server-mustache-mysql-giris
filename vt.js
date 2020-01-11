var mysql = require('mysql');
var baglan = false;

function veri() {
}


dbUsers = mysql.createPool({
    connectionLimit: 500,
    host: "host",
    user: "username",
    password: "pass",
    database: "databaseName"
});
veri.VeriTabaninaBaglan = function (call) {
    dbUsers.getConnection(function (err, conn) {
        if (err) {
            veri.ProblemBildir("hata10", err);
            call(err, false);
            return false;
        } else {
            baglan = conn;
            call(false, conn);
            return false;
        }
    });
}
setTimeout(() => {
    veri.VeriTabaninaBaglan((err, resp) => {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
        }
    })
}, 3000);
module.exports = veri;