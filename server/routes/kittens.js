// routes/kittens.js
const router = require('express').Router();

// matches GET requests to /routes/kittens/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /routes/kittens/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /routes/kittens/:kittenId
router.put('/:kittenId', function (req, res, next) { /* etc */});
// matches DELTE requests to /routes/kittens/:kittenId
router.delete('/:kittenId', function (req, res, next) { /* etc */});

module.exports = router;