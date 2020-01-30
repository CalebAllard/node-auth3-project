const router = require('express').Router();
const bc = require('bcryptjs');
const restricted = require('../auth/restricted-middleware');
const Users = require('./users-model');

router.get('/',restricted,(req,res) => {
    Users.find()
        .then(ret => {
            res.status(200).json(ret);
        })
        .catch(err => {
            res.status(500).json({err: 'err getting users'});
        })
});




module.exports = router;