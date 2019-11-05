// use express.Router() class and load it with controllers
const express = require('express');
const path = require('path');
const router = express.Router();

// const fruit = require('./fruit');
const error = require('./error');

// router.get('/fruit', fruit.get);
// router.post('/fruit', fruit.post);
router.use(express.static(path.join(__dirname, "..",'..', 'public'), { maxAge: '30d' }));
router.get('/',(req,res)=>{
    res.render('home',{karem:"karem world"})
})
router.use(error.client);
router.use(error.server);

module.exports = router;
