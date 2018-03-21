var express = require('express');
var router = express.Router();

var MessagesService = require('../services/MessagesService');

router.get('/user1/:userId1/user2/:userId2', (req, res, next) => {
	MessagesService.findByUser(req.params.userId1, req.params.userId2)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/new', (req, res, next) => {
	MessagesService.create(req.body)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

module.exports = router;
