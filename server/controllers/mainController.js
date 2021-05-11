const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    port: '32000',
    user: 'root',
    password: 'root',
    database: 'gradebook',
});
conn.connect();

exports.post = (req, res) => {
    console.log(req.body);
    conn.query('INSERT INTO grades (`Student`,`Grade`) VALUES (?, ?, ?)', [req.body.student, req.body.grade], (err, rows) => {
        if (err) throw err;
        res.json({ data: rows });
    });
}

exports.getAll = (req, res) => {
    console.log("Get all")
    conn.query('SELECT * FROM grades', (err, rows) => {
        if (err) throw err;
        res.json({ data: rows });
    });
}

exports.getById = (req, res) => {
    console.log(req.body)
    conn.query('SELECT * FROM grades WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.json({ data: rows });
    });
}

exports.put = (req, res) => {
    console.log(req.body);
    conn.query('UPDATE grades SET `Student` = ?, `Grade`=? WHERE id = ?', [req.body.Student, req.body.Grade, req.params.id], (err, rows) => {
        if (err) throw err;
        res.json({ data: rows });
    });
}

exports.delete = (req, res) => {
    console.log(req.body)
    conn.query('DELETE FROM grades WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.json({ data: rows });
    });
}
