var express = require('express');
var router = express.Router();

var PostsService = require('../services/PostsService');

router.get('/', (req, res, next) => {
	PostsService.findAll()
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/next', (req, res, next) => {
	PostsService.findNext10(req.body.date)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/new', (req, res, next) => {
	PostsService.create(req.body)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

module.exports = router;
