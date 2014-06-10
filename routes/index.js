var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/ui');
});

router.get('/rest/mistRestart',function(req,res) {
    exec('/root/bylgjanTools/tools/dosomecheck.sh',function(err,stdout,stderr) {
        console.log('Script is executed', err,stdout,stderr);
    });
    res.send(200,'Restart is initiated!');
});

module.exports = router;
