var express = require('express');
var router = express.Router();

var UserService = require('../services/UserService');

router.get('/', (req, res, next) => {
	UserService.findAll()
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.get('/:userId', (req, res, next) => {
	UserService.findById(req.params.userId)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.get('/usernames/:username', (req, res, next) => {
	UserService.checkIfUsernameExists(req.params.username)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/login', (req, res, next) => {
	UserService.login(req.body.username, req.body.password)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/new', (req, res, next) => {
	UserService.create(req.body)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

module.exports = router;
