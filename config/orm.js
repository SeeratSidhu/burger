var connection = require("../config/connection.js");
var table = "burgers";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
        connection.query(queryString, vals, (err, result)=> {
            if(err) throw err;
            console.log("added");
            cb(result);
        });
    },
    updateOne: (table, cols, vals, condition, cb) => {
        var queryString = `UPDATE ${table} SET ${cols.toString()} = ? WHERE ${condition};`;
        connection.query(queryString, vals, (err, result) => {
            if(err) throw err;
            console.log("updated");
            cb(result);
        });
    }
};

module.exports = orm;
