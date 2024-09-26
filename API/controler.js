'use strict';

let response = require("./res");
let connection = require("./koneksi");

exports.index = (req, res) => {
    response.ok("API SUCCES", res)
};

// menampilkan database
exports.tampilsemuadata = (req, res) => {
    connection.query('SELECT * FROM karyawan', (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
});
}

exports.tampilkandata = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM karyawan WHERE id = ?', [id], (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
}

exports.addData = (req, res) => {
    let data = {
        'id': req.body.id,
        'nama': req.body.nama,
        'nik': req.body.nik,
        'age': req.body.age,
    };
    connection.query('INSERT INTO karyawan SET ?', [data], (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok("Data Berhasil Di Tambahkan", res)
        }
    });
}

exports.deleteData = (req, res) => {
    let id = req.params.id;
    connection.query('DELETE FROM karyawan WHERE id = ?', [id], (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok("Data Berhasil Di Hapus", res)
        }
    });
}

exports.updatedata = (req, res) => {
    let id = req.body.id;
    let data = {
        'id': req.body.id,
        'nama': req.body.nama,
        'nik': req.body.nik,
        'age': req.body.age,
    };
    connection.query('UPDATE karyawan SET ? WHERE id = ?', [data, id], (error, rows) => {
        if(error) {
            console.log(error);
        } else {
            response.ok("Data Berhasil Di Update", res)
        }
    });
}