const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get ('/',(req,res)=>{
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=g`)
    .then((response)=>{
      console.log(response.data);
      res.send(response.data)
    }).catch((error)=>{
      console.log(error);
      res.sendStatus(500);
    });
});


// return all favorite images
router.get('/', (req, res) => {
  // return all favorites
  const queryText = `SELECT * FROM favorites ORDER BY name ASC`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('req.body', req.body);
  let queryText = `insert into favorites (url) values ($1);`;
  pool.query(queryText, [req.body.address.payload]).
  then((response) => {
    console.log('added successfully', response);
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error in adding new favorite', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
