var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/friends', function(req, res) {
  res.json([
    {
      name: 'Kim',
      age: '25',
      hobby: 0,
      city: 2
    },
    {
      name: 'Vanessa',
      age: '26',
      hobby: 2,
      city: 1
    },
    {
      name: 'Sarah',
      age: '27',
      hobby: 1,
      city: 0
    }
  ]);
});

router.get('/hobbies', function(req, res) {
  setTimeout(function(){
    res.json([
      'Music',
      'Reading',
      'Dating'
    ]);
  }, 1000);
});

router.get('/cities', function(req, res) {
  res.json([
    'Beijing',
    'New York',
    'Paris'
  ]);
});

module.exports = router;
