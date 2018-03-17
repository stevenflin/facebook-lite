var express = require('express');
var router = express.Router();

var CommentsService = require('../services/CommentsService');

router.get('/post/:postId', (req, res, next) => {
	CommentsService.findByPost(req.params.postId)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

router.post('/new', (req, res, next) => {
	CommentsService.create(req.body)
	.then(responseSuccess => res.json(responseSuccess))
	.catch(responseFailure => res.json(responseFailure));
});

module.exports = router;
