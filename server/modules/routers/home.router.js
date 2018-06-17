const express = require('express');
const router = express.Router();

const pool = require( '../pool.js' );




router.get( '/', (req, res) => {
  console.log( 'in GET request to DB from ROUTER' );
  const queryText = `SELECT * FROM books`;
  pool.query( queryText )
  .then( (result) => {
    console.log( `back from the database with ${result}` );
    res.send( result.rows );
  })
  .catch(( error ) => {
    console.log( `ERROR getting listing: ${error}` );
  });// end GET from books DB
});

router.post( '/add_book', (req, res) => {
   console.log('In POST');
   console.log('Req.body is:', req.body);
   const queryText = `INSERT INTO books (title, author, year, summary) VALUES ($1,$2,$3,$4)`;
   pool.query(queryText, ([req.body.title, req.body.author, req.body.year, req.body.summary]))
       .then((results) => {
           console.log('Results are', results);
           res.sendStatus(201);
       })
       .catch((err) => {
           console.log('Error GET :', err);
           res.sendStatus(500);
       })
});

router.delete('/', (req, res) => {
  //req.query._id is mongo, right?? Might be just .id
  let bookID = req.query.id;
  console.log('id for delete request is', bookID);
  Task.findByIdAndRemove(req.query.id)
  .then(() => {
    console.log( 'Book deleted:', req.query );
    res.sendStatus(200);
  }).catch(error) => {
    console.log( 'Error deleting book', error );
    res.sendStatus(500);
  }
  
})


module.exports = router;
