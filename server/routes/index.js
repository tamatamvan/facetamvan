'use strict'
const express = require('express');
const router = express.Router();
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'});

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken);
  next()
}

/* GET main endpoint. */
router.get('/', setAccessToken, 
(req, res) => {
  FB.api('/me/feed', 'post', {
    message: req.body.status
  }, function(response) {
    res.send(response)
  })
});

router.get('/fbtimeline', setAccessToken, 
(req, res) => {
  FB.api('/me/feed', function(response) {
    res.send(response)
  })
})

router.post('/fbtimeline', setAccessToken, 
(req, res) => {
  FB.api('/me/feed', 'post', {
    message: req.body.status
  }, function(response) {
    res.send(response)
  })
})

module.exports = router;
