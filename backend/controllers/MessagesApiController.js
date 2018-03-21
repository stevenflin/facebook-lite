var express = require('express');
var router = express.Router();

var MessagesService = require('../services/MessagesService');

router.get('/user/:userId', (req, res, next) => {
	MessagesService.findByUser(req.params.userId)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/new', (req, res, next) => {
	MessagesService.create(req.body)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

module.exports = router;
