const express = require('express');
const router = express.Router();

const pool = require( '../pool.js' );


router.get( '/', (req, res) => {
  console.log( 'in GET request to DB from ROUTER' );
  const queryText = `SELECT * FROM books`;
  pool.query( queryText )
  .then( (result) => {
    console.log( 'back from the database with,', result );
    res.send( result.rows );
  })
  .catch(( error ) => {
    console.log( `ERROR getting listing: ${error}` );
  });
});

router.get( '/manage_genres', (req, res) => {
  console.log( 'in GET request to DB from ROUTER' );
  const queryText = `SELECT * FROM genres`;
  pool.query( queryText )
  .then( (result) => {
    console.log( 'back from the database with,', result );
    res.send( result.rows );
  })
  .catch(( error ) => {
    console.log( `ERROR getting listing: ${error}` );
  });
});


router.post( '/add_book', (req, res) => {
   console.log('In addBook POST', req.body);
   const queryText = `INSERT INTO books (title, author, year, summary) VALUES ($1,$2,$3,$4)`;
   pool.query(queryText, [req.body.title, req.body.author, req.body.year, req.body.summary])
       .then((results) => {
           console.log('New book is:', results);
           res.sendStatus(201);
       })
       .catch((err) => {
           console.log('Error :', err);
           res.sendStatus(500);
       })
});

  router.post( '/manage_genres', (req, res) => {
    console.log( 'In addGenre POST', req.body );
    const queryText = `INSERT INTO genres (genre) VALUES ($1);`;
    pool.query(queryText, [req.body.genre])
      .then((results) => {
        console.log( 'New genre is:', results );
        res.sendStatus(201);
    })
      .catch((err) => {
        console.log( 'Error:', err );
        res.sendStatus(500);
    })
  });


  router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    console.log( 'In DELETE to remove book ID:', bookId );

    const queryText = 'DELETE FROM "books" WHERE id=$1';

    pool.query(queryText, [bookId] )
    .then((results) => {
      console.log( 'Successful delete of book', results );
      res.sendStatus(200);
    }).catch((err) => {
      console.log( 'Error deleting book', err );
      res.sendStatus(500);
    })  
  });


  router.delete('/manage_genres/:id', (req, res) => {
    const genreId = req.params.id;
    console.log( 'In DELETE to remove genre ID:', genreId );

    const queryText = 'DELETE FROM "genres" WHERE id=$1';

    pool.query(queryText, [genreId] )
    .then((results) => {
      console.log( 'Successful delete of genre', results );
      res.sendStatus(200);
    }).catch((err) => {
      console.log( 'Error deleting genre', err );
      res.sendStatus(500);
    })  
  });



module.exports = router;
