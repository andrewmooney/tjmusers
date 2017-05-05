module.exports = (app, db) => {
    db.connect();

    app.get('/setup', (req, res) => {
        const query = 'CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50), username varchar(30), email VARCHAR(255), role VARCHAR(50), PRIMARY KEY (id))';
        db.query(query, (err, rows) => {
            if (err) return res.json(err);
            return res.status(200).json(rows);
        })
    });

    app.get('/users', (req, res) => {
        db.query('SELECT * FROM Users', (err, rows, fields) => {
            if (err) throw err;
            return res.status(200).json(rows);
        });
    });

    app.get('/users/:field/:value', (req, res) => {
        const query = `SELECT * FROM Users WHERE ${req.params.field} = ?`;
        db.query(query, [req.params.value], (err, rows, fields) => {
            if (err) throw err;
            return res.status(200).json(rows);
        });
    });

    app.delete('/users/:id', (req, res) => {
        const query = 'DELETE FROM Users WHERE id = ?';
        db.query(query, [req.params.id], (err, result) => {
            if (err) throw err;
            return res.status(200).json(result);
        });
    });

    app.post('/users', (req, res) => {
        const query = `INSERT INTO users (name, username, email, role) VALUES (?, ?, ?, ?)`;
        db.query(query, [req.body.name, req.body.username, req.body.email, req.body.role], (err, result) => {
            if (err) throw err;
            return res.status(200).json(result);
        });
    })
}