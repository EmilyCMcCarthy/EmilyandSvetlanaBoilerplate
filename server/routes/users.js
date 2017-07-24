// routes/users.js
const router = require('express').Router();

// matches GET requests to /routes/users/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /routes/users/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /routes/users/:userId
router.put('/:userId', function (req, res, next) { /* etc */});
// matches DELTE requests to /routes/users/:userId
router.delete('/:userId', function (req, res, next) { /* etc */});

module.exports = router;