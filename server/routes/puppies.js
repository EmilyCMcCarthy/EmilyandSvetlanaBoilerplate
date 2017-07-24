// routes/puppies.js
const router = require('express').Router();

// matches GET requests to /routes/puppies/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /routes/puppies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /routes/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});
// matches DELTE requests to /routes/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

module.exports = router;