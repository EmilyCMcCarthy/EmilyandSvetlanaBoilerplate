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


router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) res.status(401).send('User not found');
      else if (!user.hasMatchingPassword(req.body.password)) res.status(401).send('Incorrect password');
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
