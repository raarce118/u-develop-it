const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Connect to database
/* const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'N0vember8!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  ); */

// Get all candidates and their party affiliation
/* app.get('/api/candidates', (req, res) => {
    const sql = `SELECT candidates.*, parties.name 
                  AS party_name 
                  FROM candidates 
                  LEFT JOIN parties 
                  ON candidates.party_id = parties.id`;
                  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  }); */
  
  // Get single candidate with party affiliation
  /* app.get('/api/candidate/:id', (req, res) => {
    const sql = `SELECT candidates.*, parties.name 
                 AS party_name 
                 FROM candidates 
                 LEFT JOIN parties 
                 ON candidates.party_id = parties.id 
                 WHERE candidates.id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  }); */

  // Delete a candidate
/* app.delete('/api/candidate/:id', (req, res) => {
    const sql = `DELETE FROM candidates WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Candidate not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  }); */

  // Update a candidate's party
/* app.put('/api/candidate/:id', (req, res) => {
    // Candidate is allowed to not have party affiliation
  const errors = inputCheck(req.body, 'party_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
    const sql = `UPDATE candidates SET party_id = ? 
                 WHERE id = ?`;
    const params = [req.body.party_id, req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Candidate not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  }); */








     // Get all candidates API
  /* app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });  */

      // Select all candidates
  /* db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  }); */





  








     // Get a single candidate API
  /* app.get('/api/candidate/:id', (req, res) => {
    const sql = `SELECT * FROM candidates WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  }); */


     // get a single candidate
/* db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  }); */








     // Delete a candidate API
     /*app.delete('/api/candidate/:id', (req, res) => {
        const sql = `DELETE FROM candidates WHERE id = ?`;
        const params = [req.params.id];
      
        db.query(sql, params, (err, result) => {
          if (err) {
            res.statusMessage(400).json({ error: res.message });
          } else if (!result.affectedRows) {
            res.json({
              message: 'Candidate not found'
            });
          } else {
            res.json({
              message: 'deleted',
              changes: result.affectedRows,
              id: req.params.id
            });
          }
        });
      }); */

     /* Delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  }); */







// Create a candidate API
/*app.post('/api/candidate', ({ body }, res) => {
    const errors = inputCheck(
      body,
      'first_name',
      'last_name',
      'industry_connected'
    );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
      VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  }); */



  /* Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
if (err) {
console.log(err);
}
console.log(result);
}); */

// Default response for any other request (Not Found)
/* app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */