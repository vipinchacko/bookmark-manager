'use strict';

const { Router } = require('express');

const router = Router();

router.route('/').get((req, res) => {
  return res.send({ status: 'available' });
});

module.exports = router;
