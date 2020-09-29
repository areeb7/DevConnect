const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route           POST api/users
// @description     register route
// @access          Public

// router.get('/', (req, res) => res.send('USER ROUTE WORKING'));

router.post(
  '/',
  [
    check('name', 'Name required*').not().isEmpty(),
    check('email', 'Valid email required*').isEmail(),
    check('password', 'Use password of 6 or more characters*')
      .isLength({
        min: 6,
      })
      .not()

      .isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('USER ROUTE WORKING');
  }
);

module.exports = router;
